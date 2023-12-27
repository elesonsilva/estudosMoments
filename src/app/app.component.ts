import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from "./components/messages/messages.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, RouterLink, HttpClientModule,
        FormsModule, ReactiveFormsModule, FontAwesomeModule, MessagesComponent]
})
export class AppComponent {
  title = 'estudosMoments';
}
