import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Program } from '../program.model';
import { tap } from 'rxjs';

import {ENV} from '../env';

const PROGRAM_URL = ENV.DEV.PROGRAMS_URL;

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
            console.log(postData);
            this.programs.set(postData.programs)
          }
        })
      )
  }

  private fetchPrograms() {
    return this.httpClient.get<{ message: string, programs: Program[] }>(PROGRAM_URL);
  }
}
