import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RoomState } from './room.reducer';

export const selectRoomState = createFeatureSelector<RoomState>('room');
export const selectRoom = createSelector(selectRoomState, (state) => state.room);