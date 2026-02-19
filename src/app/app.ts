import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeTrackingService } from './services/time-tracking'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('casovnik');

  constructor(private timeService: TimeTrackingService) {}

  ngOnInit() {
    // Preverimo, če je uporabnik že prijavljen
    const user = localStorage.getItem('currentUser');

    if (user) {
      console.log('Uporabnik najden, nadaljujem s sledenjem časa...');
      this.timeService.startTracking();
    }
  }
}