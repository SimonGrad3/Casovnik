import { Component } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { TimeTrackingService } from "../services/time-tracking";


@Component({
  selector: 'app-stran1',
  imports: [MatAnchor, FormsModule, CommonModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule],
  templateUrl: './stran1.html',
  styleUrl: './stran1.css',
})
export class Stran1 {
  constructor(private router: Router, private timeService: TimeTrackingService) {}

 levo() {
    this.router.navigate(['/stran0']);
  }

  tabela() {
    this.router.navigate(['/tabela']);
  }

  logout() {
  this.timeService.stopTracking();
  localStorage.removeItem('currentUser'); 
  this.router.navigate(['/login']); 
}
}
