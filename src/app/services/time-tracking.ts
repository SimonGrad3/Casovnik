import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {
  private timerSub?: Subscription;

  constructor(private router: Router) {}

  // To pokličemo ob prijavi
  startTracking() {
    // Če števec že teče, ga ustavimo (preprečimo podvajanje)
    this.stopTracking();

    this.timerSub = interval(1000).subscribe(() => {
      this.addTime();
    });
  }

  // To pokličemo ob odjavi
  stopTracking() {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
      this.timerSub = undefined;
    }
  }

  private addTime() {
    const username = localStorage.getItem('currentUser');
    const currentPage = this.router.url; // Avtomatsko dobi npr. '/stran0'

    // Ne štejemo časa na login strani ali če ni uporabnika
    if (!username || currentPage === '/login' || currentPage === '/') return;

    const allUsers = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (allUsers[username]) {
      if (!allUsers[username].times) {
        allUsers[username].times = {};
      }

      // Povečamo čas za trenutno stran
      const currentSeconds = allUsers[username].times[currentPage] || 0;
      allUsers[username].times[currentPage] = currentSeconds + 1;

      // Takoj shranimo v localStorage
      localStorage.setItem('users', JSON.stringify(allUsers));
    }
  }

  getTimes() {
    const username = localStorage.getItem('currentUser');
    if (!username) return {};
    const allUsers = JSON.parse(localStorage.getItem('users') || '{}');
    return allUsers[username]?.times || {};
  }
}
