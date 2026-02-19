import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TimeTrackingService } from '../services/time-tracking';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './tabela.html',
  styleUrl: './tabela.css',
})
export class Tabela implements OnInit {

  times: any = {};

  constructor(private router: Router, private timeService: TimeTrackingService) {}

  ngOnInit() {

    this.loadTimes();

    // LIVE update (bonus točka)
    interval(1000).subscribe(() => {
      this.loadTimes();
    });
  }

  loadTimes() {
    this.times = this.timeService.getTimes();
  }

  keys() {
    return Object.keys(this.times);
  }

   stran0() {
    this.router.navigate(['/stran0']);
  }

  logout() {
  this.timeService.stopTracking();
  localStorage.removeItem('currentUser'); 
  this.router.navigate(['/login']); 
}
}
