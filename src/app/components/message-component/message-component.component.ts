import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent implements OnInit {
  @Input() me: boolean;
  @Input() text: string;
  @Input() date: string;
  @Input() imageURL: string;
  constructor() { }

  ngOnInit() { }

}
