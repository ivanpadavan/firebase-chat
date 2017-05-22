import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from "angularfire2";
import {ActivatedRoute, Router} from "@angular/router";
import {Http} from "@angular/http";
import {isNullOrUndefined} from "util";

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
  newMessage: string = '';
  users$: FirebaseObjectObservable<any>;
  openedChats: openedChat[] = [];
  drivers: Driver[] = [];
  constructor(
    private af: AngularFire,
    private router: Router,
    private route: ActivatedRoute,
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
    this.router.navigate(['/chat', user]);
  }
  closeChat(user: openedChat, index) {
    let url:any = this.router.url.split('/');
    url = url[url.length-1];
    this.openedChats.splice(index, 1);

    if (url === user.id) {
      const len = this.openedChats.length;

      if (len === 0) {
        this.router.navigate(['/']) };

      len === index ?
        this.router.navigate(['/chat', this.openedChats[index-1].id]) :
        this.router.navigate(['/chat', this.openedChats[index].id])
    }
  }
  getName(user, index) {
    const driver = this.drivers.filter(x => x.token === user)[0];
    return driver.fullName.length ? driver.fullName : `Водитель № ${index+1}`;
  }
}
