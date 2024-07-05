import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-group-card',
  templateUrl: './chat-group.component.html',
 
})
export class AppChatGroupCardComponent {
  @Input() title!: string;
  @Input() description!: string;
}
