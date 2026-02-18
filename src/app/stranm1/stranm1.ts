import { MatAnchor } from "@angular/material/button";
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stranm1',
  imports: [MatAnchor, FormsModule, CommonModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule],
  templateUrl: './stranm1.html',
  styleUrl: './stranm1.css',
})
export class Stranm1 {
  constructor(private router: Router) {}

  desno() {
    this.router.navigate(['/stran0']);
  }
  tabela() {
    this.router.navigate(['/tabela']);
  }

  logout() {
  localStorage.removeItem('currentUser'); 
  this.router.navigate(['/login']); 
}
}