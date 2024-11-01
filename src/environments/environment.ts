const BASE_URL = 'http://localhost:8000/';

export const environment = {
    production: true,
    WORKOUTLOGS_URL: BASE_URL.concat('api/workout-logs'),
    WORKOUTS_URL: BASE_URL.concat('api/workouts'),
    PROGRAMS_URL: BASE_URL.concat('api/programs'),
};
