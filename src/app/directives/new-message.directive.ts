import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {OpenChatService} from '../services/open-chat.service';

@Directive({
  selector: '[newMessage]'
})
export class NewMessageDirective implements OnChanges {
  @Input() id: string;
  @Input() playSound = false;
  interval;
  constructor(private el: ElementRef, private af: AngularFire, private chatService: OpenChatService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.af.database.object(`users/${this.id}`).subscribe(res => {
      const lastOpened = +new Date(res.lastOpened || 0);
      const lastMessage = +new Date(res.lastMessage || 0);

      if (lastOpened < lastMessage) {
        if (!this.interval) {
          this.interval = setInterval(() => {
            let fontWeight = this.el.nativeElement.style.fontWeight;
            this.el.nativeElement.style.fontWeight = fontWeight ? '' : 'bolder'
          }, 1000);
        }

        if (this.playSound) {
          const audio = new Audio('https://notificationsounds.com/message-tones/pitched-so-high-75/download/mp3');
          audio.play();
        }

        this.chatService.openChat(this.id);
      } else {
        clearInterval(this.interval);
        this.interval = undefined;
        this.el.nativeElement.style.fontWeight = "";
      }
    })
  }
}
