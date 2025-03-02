import { createReducer, on } from '@ngrx/store';
import { addUserSuccess, loadUsers, loadUsersFailure, loadUsersSuccess, setUser } from './user.actions';
import { User } from '../../models/user.model';

export interface UserState {
  selectedUser: User | null;
  userList: User[];
  error: string | null;
  isLoaded: boolean;
}

const initialState: UserState = {
  selectedUser: null,
  userList: [],
  error: null,
  isLoaded: false
};

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => ({ ...state, selectedUser: user })),

  on(loadUsers, (state) => ({
    ...state,
    isLoaded: false,
    error: null
  })),

  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    userList: users,
    isLoaded: true,
    error: null
  })),

  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    isLoaded: true,
    error
  })),

  on(addUserSuccess, (state, { user }) => ({
    ...state,
    userList: [...state.userList, user]
  }))
);