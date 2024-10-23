import { Component, computed, inject, input, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { ProgramService } from '../shared/program.service';


@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [MatButtonModule, MatListModule],
  templateUrl: './program-detail.component.html',
  styleUrl: './program-detail.component.css'
})
export class ProgramDetailComponent  implements OnInit {
  programId = input<string>('');
  programService = inject(ProgramService);
  allPrograms = this.programService.allPrograms;
  program = computed(() => {
    return this.allPrograms().find(p => p.id === this.programId());
  });
  

  ngOnInit(): void {
    this.programService.loadPrograms().subscribe();
  }

  onAddWeightLog() {
    console.log('Add Weight Log');
    this.programService.addWorkoutLog(this.programId(), 100);
  }
}
