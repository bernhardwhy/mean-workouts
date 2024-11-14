import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Exercise, Workout } from '../program.model';
import { tap } from 'rxjs';

import { environment } from '../../../environments/environment';

const WORKOUTS_URL = environment.WORKOUTS_URL;
const WORKOUTLOGS_URL = environment.WORKOUTLOGS_URL;
const EXERCISE_URL = environment.EXERCISE_URL;

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private httpClient = inject(HttpClient);
  private workouts = signal<Workout[]>([]);
  allWorkouts = this.workouts.asReadonly();
  private exercises = signal<Exercise[]>([]);
  allExercises = this.exercises.asReadonly();
  private workoutLogs = signal<{programId: string, weight: number, date: string}[]>([]);
  allWorkoutLogs = this.workoutLogs.asReadonly();
  private workoutDetail = signal<Workout | undefined>(undefined);
  workoutDetailReadOnly = this.workoutDetail.asReadonly();
  

  loadWorkouts() {
    return this.fetchWorkouts()
      .pipe(
        tap({
          next: (postData) => {
            console.log(postData, this.workouts);
            this.workouts.set(postData.workouts);
          }
        })
      )
  }

  showDetailWorkout(workoutId: string) {
    return this.httpClient.get<{ message: string, workoutDetail: Workout }>(WORKOUTS_URL + '/' + workoutId)
    .pipe(
      tap({
        next: (data) => {
          this.workoutDetail.set(data.workoutDetail);
        }
      })
    );
  }

  loadExercises() {
    return this.fetchExercises()
      .pipe(
        tap({
          next: (data) => {
            console.log(data, );
            this.exercises.set(data.exercises);
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

  private fetchWorkouts() {
    return this.httpClient.get<{ message: string, workouts: Workout[] }>(WORKOUTS_URL);
  }

  private fetchWorkoutLogs() {
    return this.httpClient.get<{ message: string, workoutLogs: {programId: string, weight: number, date: string}[] }>(WORKOUTLOGS_URL);
  }

  private fetchExercises() {
    return this.httpClient.get<{ message: string, exercises: {_id: string, title: string, image: string}[] }>(EXERCISE_URL);
  }
}
