import { Component, computed, inject, input, OnInit } from '@angular/core';

import { ProgramService } from '../shared/services/program.service';
import { WorkoutService } from '../shared/services/workout.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './program-detail.component.html',
  styleUrl: './program-detail.component.css'
})
export class ProgramDetailComponent  implements OnInit {
  programId = input<string>('');
  programService = inject(ProgramService);
  workoutService = inject(WorkoutService);
  allPrograms = this.programService.allPrograms;
  allWorkoutLogs = this.workoutService.allWorkoutLogs;
  program = computed(() => {
    return this.allPrograms().find(p => p.id === this.programId());
  });
  

  ngOnInit(): void {
    if (this.allPrograms().length === 0) {
      this.programService.loadPrograms().subscribe();
    }
    this.workoutService.loadWorkoutLogs().subscribe();
  }

  onAddWeightLog() {
    let date = new Date();
    let dateString = date.toString();
    this.workoutService.addWorkoutLog(this.programId(), 100, dateString);
  }


}
