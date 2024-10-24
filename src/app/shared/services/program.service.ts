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

  private fetchPrograms() {
    return this.httpClient.get<{ message: string, programs: Program[] }>('http://localhost:3000/api/programs');
  }
}
