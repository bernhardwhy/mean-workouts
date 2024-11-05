import mongoose, { Schema, Document } from 'mongoose';

export interface Program {
    id: string,
    title: string,
    weeks: Week[],
}
export interface Exercise {
    _id: string,
    title: string,
    image: string,
}

export interface Workout {
    _id: string,
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
                    image: string,
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
                    image: string,
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