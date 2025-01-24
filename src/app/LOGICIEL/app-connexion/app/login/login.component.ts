import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule], // Ajouter HttpClientModule
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = ''; // Ajoutez ces propriétés
  password: string = '';

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
