const BASE_URL = 'http://localhost:3000/';

export const ENV = {
DEV: {
    WORKOUTLOGS_URL: BASE_URL.concat('api/workout-logs'),
    WORKOUTS_URL: BASE_URL.concat('api/workouts'),
    PROGRAMS_URL: BASE_URL.concat('api/programs'),
}
};