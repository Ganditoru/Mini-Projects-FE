import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectIsLoading = createSelector(
  selectUserState,
  (state) => state.isLoading
);

export const selectSelectedUser = createSelector(
  selectUserState,
  (state) => state.selectedUser
);

export const selectUserList = createSelector(
  selectUserState,
  (state) => state.userList
);