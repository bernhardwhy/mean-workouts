import { Component, computed, inject, input, OnInit } from '@angular/core';
import { WorkoutService } from '../shared/services/workout.service';


@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.css'
})
export class WorkoutComponent implements OnInit {
  workoutId = input<string>('');
  workoutService = inject(WorkoutService);
  allWorkouts = this.workoutService.allWorkouts;
  workout = computed(() => {
    return this.allWorkouts().find(w => w.id === this.workoutId());
  });
  

  ngOnInit(): void {
    this.workoutService.loadWorkouts().subscribe();
  }

}
