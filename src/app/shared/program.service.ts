import { Injectable, OnInit, signal } from '@angular/core';
import { Program } from './program.model';
import { PROGRAMS } from '../programs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private programs = signal<Program[]>([]);
  allPrograms = this.programs.asReadonly();

 constructor() {
  this.fetchPrograms();
 }
  
  fetchPrograms() {
    this.programs.set(PROGRAMS);
  }
}
