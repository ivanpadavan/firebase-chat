import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  uid: string;
  newMessage: string = '';
  users$: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.af.auth.login({email: 'operator@operator.com', password: 'qweasd'})
    this.users$ = this.af.database.object('/users');
  }
}
