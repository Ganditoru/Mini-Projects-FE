import { createAction, props } from '@ngrx/store';

export interface Room {
  size: number;
  height: number;
  nrBeds: number;
  floor: number;
}

export const setRoom = createAction('[Room] Set Room', props<{ room: Room }>());
