import { createAction, props } from '@ngrx/store';
import { User } from '../../../components/user/models/user.model';
import { AddUserRequest } from '../models/add-user-request.model';

export const setUser = createAction('[User] Set User', props<{ user: User }>());

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());

export const addUser = createAction('[User] Add User', props<{ user: AddUserRequest }>());
export const addUserSuccess = createAction('[User] Add User Success', props<{ user: User }>());
