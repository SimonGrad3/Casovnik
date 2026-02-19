import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { TimeTrackingService } from '../services/time-tracking';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user={
    ime:'',
  };
  
  constructor(private router: Router, private timeService: TimeTrackingService) {}

  login() {
    if (!this.user.ime.trim()) return alert('Vnesi uporabniško ime');

    // Obstoj uporabnika
    const allUsers = JSON.parse(localStorage.getItem('users') || '{}');

    if (!allUsers[this.user.ime]) {
      // nov uporabnik
      allUsers[this.user.ime] = {
        ime: this.user.ime,
        times: {} 
      };
    } else {
      console.log('Naložen obstoječ uporabnik:', this.user.ime);
    }
    localStorage.setItem('users', JSON.stringify(allUsers));
    // Shrani trenutnega
    localStorage.setItem('currentUser', this.user.ime);
    this.timeService.startTracking();  // Začni sledenje časa ob prijavi
    this.router.navigate(['/stran0']);
  }
}
