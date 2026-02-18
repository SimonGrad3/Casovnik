import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { TimeTrackingService } from '../services/time-tracking';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela.html'
})
export class Tabela implements OnInit {

  times: any = {};

  constructor(private timeService: TimeTrackingService) {}

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
}
