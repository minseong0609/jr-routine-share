// src/types/routine.ts
export type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight?: number;
  restTime?: number;
  videoUrl?: string;
  notes?: string;
}

export interface RoutineDay {
  day: DayOfWeek;
  exercises: Exercise[];
}

export interface Routine {
  id: string;
  title: string;
  description: string;
  isPublic: boolean;
  tags: string[];
  days: RoutineDay[];
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  username: string;
  email: string;
  bio?: string;
  profileImage?: string;
  fitnessLevel?: 'beginner' | 'intermediate' | 'advanced';
  goals?: string[];
  createdAt: Date;
}

export interface MealPlan {
  id: string;
  userId: string;
  title: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  ingredients: string[];
  recipe?: string;
  imageUrl?: string;
  isPublic: boolean;
  tags: string[];
  createdAt: Date;
}
