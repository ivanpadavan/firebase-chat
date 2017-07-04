import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Driver, openedChat} from '../app.component';

@Injectable()
export class OpenChatService {
  openedChats: openedChat[] = [];
  drivers: Driver[] = [];
  constructor(private http: Http) {
    this.http
      .get('http://ovz1.tesey.1l0r1.vps.myjino.ru/cars')
      .subscribe(
        (res) => this.drivers = res.json().map(x => Object.assign(new Driver(), x))
      )
  }

  openChat(user: string) {
    const driver = this.drivers.filter(x => x.token === user)[0];

    if (!this.openedChats.find((value) => value.id === user)) {
      this.openedChats.push({id: user, name: driver.fullName});
    }
  }
}
