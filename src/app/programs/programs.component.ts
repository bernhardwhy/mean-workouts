import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgramService } from '../shared/services/program.service';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent implements OnInit {
  private programService = inject(ProgramService);
  allPrograms = this.programService.allPrograms;
  private errorMessage = signal<string>('');
  private destroyRef = inject(DestroyRef);



  ngOnInit() {
    const subscription = this.programService.loadPrograms().subscribe();

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }


}
