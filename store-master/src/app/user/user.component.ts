import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { selectIsLoaded, selectSelectedUser, selectUserList } from './store/user/user.selector';
import { addUser, loadUsers, setUser } from './store/user/user.actions';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddUserRequest } from './models/add-user-request.model';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { AppState } from '../global-store/app.reducer';
import { AddressComponent } from './address/address.component';
import { UserActionsType } from './models/user-action-types.enum';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, AddUserComponent, ShowUserComponent, AddressComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  public users$: Observable<User[]> = this.store.select(selectUserList);
  public selectedUsers$: Observable<User | null> = this.store.select(selectSelectedUser);
  public areUsersLoaded$: Observable<boolean> = this.store.select(selectIsLoaded);

  public visibleAction: UserActionsType = UserActionsType.None;
  public UserActionsType = UserActionsType;

  constructor(private readonly store: Store<AppState>) { }

  public ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  public showAddUserForm() {
    this.visibleAction = UserActionsType.AddUser;
  }

  public showSelectedUser() {
    this.visibleAction = UserActionsType.ShowSelectedUser;
  }

  public onUserAdded(user: AddUserRequest) {
    this.store.dispatch(addUser({ user }));
    this.visibleAction = UserActionsType.None;
  }

  public selectUser(user: User) {
    this.store.dispatch(setUser({ user }));
  }

  public closeActionWindow() {
    this.visibleAction = UserActionsType.None;
  }
}
