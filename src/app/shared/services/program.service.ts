import { inject, Injectable, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Program } from '../program.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private httpClient = inject(HttpClient);
  private programs = signal<Program[]>([]);
  allPrograms = this.programs.asReadonly();
  private workoutLogs = signal<{programId: string, weight: number, date: string}[]>([]);
  allWorkoutLogs = this.workoutLogs.asReadonly();

  loadPrograms() {
    return this.fetchPrograms()
      .pipe(
        tap({
          next: (postData) => {
            this.programs.set(postData.programs)
          }
        })
      )
  }

  addWorkoutLog(programId: string, weight: number, date: string) {
    const workoutLog = { programId, weight, date };
  
    this.httpClient.post('http://localhost:3000/api/workout-log', workoutLog)
      .subscribe(responseData => {
        console.log(responseData);
      });
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

  private fetchPrograms() {
    return this.httpClient.get<{ message: string, programs: Program[] }>('http://localhost:3000/api/programs');
  }
  private fetchWorkoutLogs() {
    return this.httpClient.get<{ message: string, workoutLogs: {programId: string, weight: number, date: string}[] }>('http://localhost:3000/api/workout-logs');
  }
}
