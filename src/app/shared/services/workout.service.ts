import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Workout } from '../program.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private httpClient = inject(HttpClient);
  private workouts = signal<Workout[]>([]);
  allWorkouts = this.workouts.asReadonly();

  loadWorkouts() {
    return this.fetchPrograms()
      .pipe(
        tap({
          next: (postData) => {
            console.log(postData);
            this.workouts.set(postData.workouts);
          }
        })
      )
  }

  private fetchPrograms() {
    return this.httpClient.get<{ message: string, workouts: Workout[] }>('http://localhost:3000/api/workouts');
  }
}
