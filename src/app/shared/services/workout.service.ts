import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Workout } from '../program.model';
import { tap } from 'rxjs';

import {ENV} from '../env';

const WORKOUTS_URL = ENV.DEV.WORKOUTS_URL;
const WORKOUTLOGS_URL = ENV.DEV.WORKOUTLOGS_URL;

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private httpClient = inject(HttpClient);
  private workouts = signal<Workout[]>([]);
  allWorkouts = this.workouts.asReadonly();
  private workoutLogs = signal<{programId: string, weight: number, date: string}[]>([]);
  allWorkoutLogs = this.workoutLogs.asReadonly();

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

  loadWorkoutLogs() {
    return this.fetchWorkoutLogs()
      .pipe(
        tap({
          next: (postData) => {
            console.log(postData);
            this.workoutLogs.set(postData.workoutLogs)
          }
        })
      )
  }

  addWorkoutLog(programId: string, weight: number, date: string) {
    const workoutLog = { programId, weight, date };
  
    this.httpClient.post(WORKOUTLOGS_URL, workoutLog)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  private fetchPrograms() {
    return this.httpClient.get<{ message: string, workouts: Workout[] }>(WORKOUTS_URL);
  }

  private fetchWorkoutLogs() {
    return this.httpClient.get<{ message: string, workoutLogs: {programId: string, weight: number, date: string}[] }>(WORKOUTLOGS_URL);
  }
}
