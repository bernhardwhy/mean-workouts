import { Component, computed, inject, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.css'
})
export class WorkoutComponent implements OnInit {
  workoutId = input<string>('');
  

  ngOnInit(): void {
  }

}
