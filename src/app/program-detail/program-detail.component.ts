import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProgramService } from '../shared/program.service';


@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './program-detail.component.html',
  styleUrl: './program-detail.component.css'
})
export class ProgramDetailComponent {
  programId = input<string>('');
  programService = inject(ProgramService);

  onAddWeightLog() {
    console.log('Add Weight Log');
    this.programService.addWorkoutLog(this.programId(), 100);
  }
}
