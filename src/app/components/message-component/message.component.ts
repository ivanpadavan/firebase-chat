import {Component, AfterViewInit, Input} from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']
})
export class MessageComponent implements AfterViewInit {
  @Input() me: boolean;
  @Input() text: string;
  @Input() date: string;
  @Input() imageURL: string;
  constructor() { }

  ngAfterViewInit() {
    let node = document.getElementById('scrollable');
    node.scrollTop = node.scrollHeight;
  }

  openInNewTab(url) {
    let win = window.open(url, '_blank');
    win.focus();
}

}
