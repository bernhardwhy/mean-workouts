const BASE_URL = 'https://mean-workout-backend.vercel.app/';

export const environment = {
    production: true,
    WORKOUTLOGS_URL: BASE_URL.concat('api/workout-logs'),
    WORKOUTS_URL: BASE_URL.concat('api/workouts'),
    PROGRAMS_URL: BASE_URL.concat('api/programs'),
    EXERCISE_URL: BASE_URL.concat('api/exercises'),
};
