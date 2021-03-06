import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AngularFireModule, AuthMethods, AuthProviders} from "angularfire2";
import {KeysPipe} from "./pipes/keys.pipe";
import {MessageComponent} from "./components/message-component/message.component";
import {ChatComponent} from "./components/chat.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { NewMessageDirective } from './directives/new-message.directive';
import {OpenChatService} from './services/open-chat.service';

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
};

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    ChatComponent,
    MessageComponent,
    NewMessageDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    OpenChatService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
