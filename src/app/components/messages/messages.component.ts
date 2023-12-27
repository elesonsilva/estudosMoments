import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
 faTimes = faTimes;

 constructor (public messageService: MessagesService){

 }
}
