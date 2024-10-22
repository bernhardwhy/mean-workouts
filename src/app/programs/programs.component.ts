import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgramService } from '../shared/program.service';

import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [RouterLink, MatListModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {
  private programService = inject(ProgramService);
  allPrograms = this.programService.allPrograms;
}
