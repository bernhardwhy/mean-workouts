import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgramService } from '../shared/services/program.service';

import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [RouterLink, MatListModule, MatDividerModule, MatCardModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent implements OnInit {
  private programService = inject(ProgramService);
  allPrograms = this.programService.allPrograms;
  private errorMessage = signal<string>('');
  private destroyRef = inject(DestroyRef);



  ngOnInit() {
    const subscription = this.programService.loadPrograms().subscribe({
      complete: () => {
        //handle loading state here
      },
      error: (error) => {
        console.log(error);
        this.errorMessage.set(error.message);
      }
    })

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }


}
