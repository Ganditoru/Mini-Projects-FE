import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserModuleState } from '../user-module.reducer';

export const selectUserModuleState = createFeatureSelector<UserModuleState>('userModule');

// Select UserState from UserModuleState
export const selectUserState = createSelector(
  selectUserModuleState,
  (state) => state.user
);

export const selectIsLoaded = createSelector(
  selectUserState,
  (state) => state.isLoaded
);

export const selectSelectedUser = createSelector(
  selectUserState,
  (state) => state.selectedUser
);

export const selectUserList = createSelector(
  selectUserState,
  (state) => state.userList
);