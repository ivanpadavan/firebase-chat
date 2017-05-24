import {Component, OnInit} from "@angular/core";
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import {Http} from "@angular/http";

interface openedChat {
  name: string;
  id: string;
}
class Driver {
  private id;
  private lname_driver;
  private fname_driver;
  private phone_driver;
  token;
  get fullName() {
    const isFull = [this.lastName, this.firstName]
      .map(x => x.length)
      .reduce((acc, val) => acc && val)
    return `${this.lastName}${isFull ? ' ' : ''}${this.firstName}`
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
  showSidebar = false;
  id: string = '';
  users$: FirebaseObjectObservable<any>;
  openedChats: openedChat[] = [];
  drivers: Driver[] = [];
  constructor(
    private af: AngularFire,
    private http: Http
  ) {}

  ngOnInit() {
    this.af.auth.login({email: 'operator@operator.com', password: 'qweasd'})
    this.users$ = this.af.database.object('/users');
    this.http
      .get('http://ovz1.tesey.1l0r1.vps.myjino.ru/cars')
      .subscribe(
        (res) => this.drivers = res.json().map(x => Object.assign(new Driver(), x))
      )
  }

  openChat(user:string, index) {
    const driver = this.drivers.filter(x => x.token === user)[0];

    if (!this.openedChats.find((value) => value.id === user)) {
      this.openedChats.push({id: user, name: driver.fullName.length ? driver.fullName : `Водитель № ${index+1}`});
    }
    this.id = user;
  }
  closeChat(user: openedChat, index) {
    this.openedChats.splice(index, 1);

    if (this.id === user.id) {
      const len = this.openedChats.length;

      if (len === 0) {
        this.id = '';
      }
      this.id = len === index ?
         this.openedChats[index-1].id :
         this.openedChats[index].id;
  }
  }
  getName(user, index) {
    const driver = this.drivers.filter(x => x.token === user)[0];
    return driver.fullName.length ? driver.fullName : `Водитель № ${index+1}`;
  }
}
