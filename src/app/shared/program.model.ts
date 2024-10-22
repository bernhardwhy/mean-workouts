export interface Program {
    id: string,
    title: string,
    workouts: string[],
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