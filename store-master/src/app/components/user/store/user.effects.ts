import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { loadUsers, loadUsersSuccess, loadUsersFailure, addUser, addUserSuccess } from './user.actions';
import { UserService } from '../../../components/user/service/user.service';
import { User } from '../../../components/user/models/user.model';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUsers),
            mergeMap(() =>
                this.userService.getUsers().pipe(
                    map((users: User[]) => loadUsersSuccess({ users })),
                    catchError(error => of(loadUsersFailure({ error: error.message })))
                )
            )
        )
    );

    addUser$ = createEffect(() =>
        this.actions$.pipe(
          ofType(addUser),
          mergeMap(({ user }) =>
            this.userService.createUser(user).pipe(
              map((newUser: User) => addUserSuccess({ user: newUser })),
              catchError(error => of({ type: '[User] Add User Failure', error: error.message }))
            )
          )
        )
      );
}