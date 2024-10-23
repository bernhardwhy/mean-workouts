import { Routes } from '@angular/router';
import { ProgramsComponent } from './programs/programs.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { WorkoutComponent } from './workout/workout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'programs',
        pathMatch: 'full'
    },
    {
        path: 'programs',
        component: ProgramsComponent
    },
    {
        path: 'programs/:programId',
        component: ProgramDetailComponent,
    },
    {
        path: 'workouts/:workoutId',
        component: WorkoutComponent,
    }
];
