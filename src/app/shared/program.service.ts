import { inject, Injectable, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Program } from './program.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private httpClient = inject(HttpClient);
  private programs = signal<Program[]>([]);
  allPrograms = this.programs.asReadonly();

  loadPrograms() {
    // this.fetchPrograms().subscribe(postData => {
    //   console.log(postData);
    //   this.programs.set(postData.programs);
    // });
    return this.fetchPrograms()
      .pipe(
        tap({
          next: (postData) => {
            console.log(postData);
            this.programs.set(postData.programs)
          }
        })
      )
    // this.programs.set(PROGRAMS);
  }

  private fetchPrograms() {
    return this.httpClient.get<{ message: string, programs: Program[] }>('http://localhost:3000/api/programs');
  }
}
