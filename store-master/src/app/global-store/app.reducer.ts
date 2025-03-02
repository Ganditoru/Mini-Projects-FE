import { ActionReducerMap } from '@ngrx/store';
import { roomReducer, RoomState } from './room/room.reducer';
import { userReducer, UserState } from '../user/store/user/user.reducer';
import { userModuleReducer, UserModuleState } from '../user/store/user-module.reducer';
import { AddressState } from '../user/address/store/address.reducer';

export interface AppState {
  userModule: UserModuleState;
  room: RoomState;
}

export const reducers: ActionReducerMap<AppState> = {
  userModule: userModuleReducer,
  room: roomReducer
};