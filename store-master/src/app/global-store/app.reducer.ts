import { ActionReducerMap } from '@ngrx/store';
import { roomReducer, RoomState } from './room/room.reducer';
import { userReducer, UserState } from '../components/user/store/user.reducer';

export interface AppState {
  user: UserState;
  room: RoomState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  room: roomReducer
};