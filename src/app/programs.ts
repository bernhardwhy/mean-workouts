export const PROGRAMS = [
  {
    id: '1234015',
    title: 'muscle builder program weights only',
    workouts: ['611297']
  },
  {
    id: '12340151',
    title: 'muscle builder program weights only',
    workouts: ['611297']
  }
];

export const WORKOUTS = [
    {
      id: '611297',
      week: 4,
      title: 'chest',
      exercises: [
        {
          warmUp: [
            {
              id: 'w1',
              title: 'Jumping Jacks',
              sets: 3,
              reps: null,
              duration: 40,
              rest: 30,
            },
            {
              id: 'w2',
              title: 'Low Plank to High Plank',
              sets: 3,
              reps: 12,
              duration: null,
              rest: 30,
            },
            {
              id: 'w3',
              title: 'Push Ups',
              sets: 3,
              reps: 20,
              duration: null,
              rest: 30,
            }
          ],
          main: [
            {
              id: 'm1',
              title: 'Bench Press - Barbell',
              sets: 4,
              reps: 15,
              duration: null,
              rest: 45,
            },
            {
              id: 'm2',
              title: 'Inlince Bench Press - Barbell',
              sets: 4,
              reps: 12,
              duration: null,
              rest: 45,
            },
            {
              id: 'm3',
              title: 'Bench Flys - Dumbbell',
              sets: 4,
              reps: 15,
              duration: null,
              rest: 45,
            },
            {
              id: 'm4',
              title: 'Incline Supinated Twisting Bench Press - Barbell',
              sets: 4,
              reps: 12,
              duration: null,
              rest: 45,
            },
            {
              id: 'm5',
              title: 'Bench Press Alternating - Barbell',
              sets: 4,
              reps: 10,
              duration: null,
              rest: 45,
            },
            {
              id: 'm6',
              title: 'Incline Bench Press (Close Grip) - Dumbbell',
              sets: 4,
              reps: 12,
              duration: null,
              rest: 45,
            },
            {
              id: 'm7',
              title: 'Dumbbell Cross Alternating Frontal Raises',
              sets: 4,
              reps: 10,
              duration: null,
              rest: 45,
            },
          ],
        }
      ]
    }
]
