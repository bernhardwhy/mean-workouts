export interface Program {
    id: string,
    title: string,
    weeks: Week[],
}

export interface Workout {
    id: string,
    title: string,
    exercises: [
        {
            warmUp: [
                {
                    id: string,
                    title: string,
                    sets: number,
                    reps: number,
                    duration: number,
                    rest: number,
                }
            ],
            main: [
                {
                    id: string,
                    title: string,
                    sets: number,
                    reps: number,
                    duration: number,
                    rest: number,
                }
            ]
        }
    ]
}


export interface Week {
        id: string,
        title: string,
        workouts: [
            {
                id: string,
                title: string,
                isRest: boolean,
            }
        ]
      }