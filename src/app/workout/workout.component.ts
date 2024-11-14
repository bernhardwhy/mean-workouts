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
  workout = this.workoutService.workoutDetailReadOnly;
  showWeightDialog = signal(false);
  maxWeight = signal(0);
  exerciseId = signal('');


  ngOnInit(): void {
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


}
