import { createReducer, on } from '@ngrx/store';
import { Room, setRoom } from './room.actions';

export interface RoomState {
  room: Room | null;
}

const initialState: RoomState = {
  room: null
};

export const roomReducer = createReducer(
  initialState,
  on(setRoom, (state, { room }) => ({ ...state, room }))
);