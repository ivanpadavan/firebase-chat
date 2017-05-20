import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {KeysPipe} from "./pipes/keys.pipe";
import { MessageComponent } from './components/message-component/message.component';
import {RouterModule, Route} from "@angular/router";
import {ChatComponent} from "./components/chat.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

const firebaseConfig = {
  apiKey: "AIzaSyDEFJPpyGALNqn4quypS4Wfd4J43IxnNdI",
  authDomain: "test-f37a3.firebaseapp.com",
  databaseURL: "https://test-f37a3.firebaseio.com",
  storageBucket: "test-f37a3.appspot.com",
  messagingSenderId: "615862229636"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
}

const routes: Route[] = [
  {path: "chat/:id", component: ChatComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    ChatComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
