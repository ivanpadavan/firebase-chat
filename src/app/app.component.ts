import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from "angularfire2";
import {ActivatedRoute, Router} from "@angular/router";

interface openedChat {
  name: string;
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  uid: string;
  newMessage: string = '';
  users$: FirebaseObjectObservable<any>;
  openedChats: openedChat[] = [];
  constructor(private af: AngularFire, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.af.auth.login({email: 'operator@operator.com', password: 'qweasd'})
    this.users$ = this.af.database.object('/users');
  }

  openChat(user, index) {
    if (!this.openedChats.find((value) => value.id === user)) {
      this.openedChats.push({id: user, name: index+1});
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
}
