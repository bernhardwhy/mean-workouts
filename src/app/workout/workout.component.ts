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
  allExercises = this.workoutService.allExercises;
  workout = computed(() => {
    return this.allWorkouts().find(w => w.id === this.workoutId());
  });

  builtWorkout = computed(() => {
    return this.buildWorkout();
  });
  

  ngOnInit(): void {
    this.workoutService.loadWorkouts().subscribe();
    this.workoutService.loadExercises().subscribe();
  }

  buildWorkout() {
    return {
      ...this.workout(),
      exercises: this.workout()?.exercises.map((ex) => {
        return {
          warmUp: ex.warmUp.map((w) => {
            this.allExercises().map((e) => {
              if (e._id === w.id) {
                w.title = e.title;
                w.image = e.image;
              }
            });
            return {
              id: w.id,
              title: w.title,
              sets: w.sets,
              reps: w.reps,
              duration: w.duration,
              rest: w.rest,
              image: w.image,
            }
          }),
          main: ex.main.map((m) => {
            this.allExercises().map((e) => {
              if (e._id === m.id) {
                m.title = e.title;
                m.image = e.image;
              }
            });
            return {
              id: m.id,
              title: m.title,
              sets: m.sets,
              reps: m.reps,
              duration: m.duration,
              rest: m.rest,
              image: m.image,
            }
          })
        }
      })
    };
  }


}
