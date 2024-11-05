import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
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
  workout = this.workoutService.workoutDetailReadOnly;
  showWeightDialog = signal(false);
  maxWeight = signal(0);
  exerciseId = signal('');

  builtWorkout = computed(() => {
    return this.buildWorkout();
  });


  ngOnInit(): void {
    this.workoutService.loadWorkouts().subscribe();
    this.workoutService.loadExercises().subscribe();
    this.workoutService.showDetailWorkout(this.workoutId()).subscribe();
  }

  addWorkoutRecord(exerciseId: string) {
    this.exerciseId.set(exerciseId);
    this.toggleDialog();
  }

  toggleDialog() {
    this.showWeightDialog.update(oldDialogState => !oldDialogState);
    // this.workoutService.addWorkoutLog(this.workoutId(), 100, dateString);
  }
  
  postWeightRecord() {
    let date = new Date();
    let dateString = date.toString();
    this.showWeightDialog.update(oldDialogState => !oldDialogState);
    const workoutLog = {
      exerciseId: this.exerciseId(),
      weight: this.maxWeight(),
      date: dateString
    }

    this.workoutService.addWorkoutLog(workoutLog.exerciseId, workoutLog.weight, workoutLog.date);
  }

  decrementWeight() {
    if (this.maxWeight() >= 15) {
      this.maxWeight.update(oldMaxWeight => oldMaxWeight - 5);
    } else if (this.maxWeight() === 0) {
      return;
    }else {
      this.maxWeight.update(oldMaxWeight => oldMaxWeight - 1);
    }
  }

  incrementWeight() {
      this.maxWeight.update(oldMaxWeight => oldMaxWeight + 1);
  }

  incrementWeightByFive() {
    this.maxWeight.update(oldMaxWeight => oldMaxWeight + 5);
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
