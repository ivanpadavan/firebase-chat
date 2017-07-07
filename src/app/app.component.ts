import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {OpenChatService} from './services/open-chat.service';

export interface openedChat {
  name: string;
  id: string;
}
export class Driver {
  private id;
  private lname_driver;
  private fname_driver;
  private phone_driver;
  token;
  get fullName() {
    const isFull = [this.lastName, this.firstName]
      .map(x => x.length)
      .reduce((acc, val) => acc && val);
    const name = `${this.lastName}${isFull ? ' ' : ''}${this.firstName}`;
    return name.length ? name : 'Безымянный водитель';
  }
  get lastName() {
    return this.lname_driver || '';
  }

  get firstName() {
    return this.fname_driver || '';
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidebar = true;
  id: string = '';
  users$: FirebaseObjectObservable<any>;

  constructor(
    private af: AngularFire,
    private chatService: OpenChatService
  ) {}

  ngOnInit() {
    this.af.auth.login({email: 'operator@operator.com', password: 'qweasd'})
    this.users$ = this.af.database.object('/users');
  }

  openChat(user: string) {
    this.chatService.openChat(user);
    this.id = user;
  }

  closeChat(user: openedChat, index) {
    this.chatService.openedChats.splice(index, 1);

    if (this.id === user.id) {
      const len = this.chatService.openedChats.length;

      if (len === 0) {
        this.id = '';
      }
      this.id = len === index ?
        this.chatService.openedChats[index-1].id :
        this.chatService.openedChats[index].id;
    }
  }
  getName(user) {
    const driver = this.chatService.drivers.filter(x => x.token === user)[0];
    return driver.fullName;
  }
}
