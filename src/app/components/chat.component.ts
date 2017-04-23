import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import {Http, RequestOptions, Headers} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'chat',
    template: `
  <div style="height: calc(100% - 30px); overflow-y: auto" id="scrollable">
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
      <input type="text" style="flex-grow: 1" [(ngModel)]="newMessage" (keyup.enter)="send()">
      <button class="btn btn-primary" (click)="send()" [disabled]="!newMessage">Send</button>
    </div>`
})
export class ChatComponent implements OnInit {
  id: string;
  newMessage = '';
  chat$: FirebaseObjectObservable<any>;
    constructor(private route: ActivatedRoute, private af: AngularFire, private http: Http) { }

    ngOnInit() {
      this.route.params.subscribe((params) => {
        this.id = params['id'];
        this.chat$ = this.af.database.object(`/messages/${this.id}`);
      });
    }
  send() {
    this.af.database.list(`/messages/${this.id}`).push({name: 'operator', text: this.newMessage, date: (new Date).toISOString()})

    this.af.database.object(`users/${this.id}/pushToken`).subscribe((token) => {
      this.http.post(`https://fcm.googleapis.com/fcm/send`, {
          to: token.$value,
        "notification": {title: "New msg",
          body: this.newMessage,
          sound: 'default'}
        },
        new RequestOptions({headers: new Headers({
          'Content-Type':'application/json',
          'Authorization':'key=AAAAj2Q_2oQ:APA91bEFo5fq5aSoyfy2A_jJ8y_imc7sUcRGBViemnaqITQ24iUE7dJ3s0_oZ_FtKQcNFeeDcyO2mr9DLzEra3Ozx6gDFYJ110FlYVNxSiPiPfnJIyGtc8U_PBCUFgVqR_xyrU6zAHr8'
        })})).subscribe((res) => this.newMessage='');
    })

  }
}
