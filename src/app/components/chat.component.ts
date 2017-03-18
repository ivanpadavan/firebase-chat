import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";

@Component({
    moduleId: module.id,
    selector: 'chat',
    template: `
  <div style="height: calc(100% - 30px); overflow-y: auto">
      <h2>Chat</h2>
        <div *ngFor="let message of chat$ | async | keys">
          <message [me]="(chat$ | async)[message].name == 'operator'"
                   [text]="(chat$ | async)[message].text"
                   [imageURL]="(chat$ | async)[message].imageURL"
                   [date]="(chat$ | async)[message].date"></message>
          <div style="clear: both"></div>
        </div>
      </div>

    <div style="display: flex; height: 30px">
      <input type="text" style="flex-grow: 1" [(ngModel)]="newMessage">
      <button class="btn btn-primary" (click)="send()" [disabled]="!newMessage">Send</button>
    </div>`
})
export class ChatComponent implements OnInit {
  id: string;
  newMessage = '';
  chat$: FirebaseObjectObservable<any>;
    constructor(private route: ActivatedRoute, private af: AngularFire) { }

    ngOnInit() {
      this.route.params.subscribe((params) => {
        this.id = params['id']
        this.chat$ = this.af.database.object(`/messages/${this.id}`);
      });
    }
  send() {
    this.af.database.list(`/messages/${this.id}`).push({name: 'operator', text: this.newMessage, date: (new Date).toISOString()})
  }
}
