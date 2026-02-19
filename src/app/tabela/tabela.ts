import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core'; // 1. Dodan ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
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
export class Tabela implements OnInit, OnDestroy {

  times: any = {};
  private intervalSub?: Subscription;

  constructor(
    private router: Router, 
    private timeService: TimeTrackingService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    this.loadTimes();
    this.intervalSub = interval(1000).subscribe(() => {
      this.loadTimes();   
      // 3. PRISILIMO ANGULAR, DA OSVEŽI EKRAN!
      this.cdr.detectChanges(); 
    });
  }

  ngOnDestroy() {
    if (this.intervalSub) {
      this.intervalSub.unsubscribe();
    }
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
