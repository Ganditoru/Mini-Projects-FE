import { createReducer, on } from '@ngrx/store';
import { addUserSuccess, loadUsers, loadUsersFailure, loadUsersSuccess, setUser } from './user.actions';
import { User } from '../../../components/user/models/user.model';

export interface UserState {
  selectedUser: User | null;
  userList: User[];
  error: string | null;
  isLoading: boolean;
}

const initialState: UserState = {
  selectedUser: null,
  userList: [],
  error: null,
  isLoading: false
};

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => ({ ...state, selectedUser: user })),

  on(loadUsers, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    userList: users,
    isLoading: false,
    error: null
  })),

  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  on(addUserSuccess, (state, { user }) => ({
    ...state,
    userList: [...state.userList, user]
  }))
);