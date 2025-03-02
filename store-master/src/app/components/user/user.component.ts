import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../global-store/app.reducer';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { UserService } from './service/user.service';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { selectIsLoading, selectSelectedUser, selectUserList } from './store/user.selector';
import { addUser, loadUsers, setUser } from './store/user.actions';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddUserRequest } from './models/add-user-request.model';
import { ActionsType } from './models/action-types.enum';
import { ShowUserComponent } from './components/show-user/show-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, AddUserComponent, ShowUserComponent],
  providers: [UserService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  public users$: Observable<User[]> = this.store.select(selectUserList);
  public selectedUsers$: Observable<User | null> = this.store.select(selectSelectedUser);
  public isLoadingUsers$: Observable<boolean> = this.store.select(selectIsLoading);

  public visibleAction: ActionsType = ActionsType.None;
  public ActionsType = ActionsType;

  constructor(private readonly store: Store<AppState>) { }

  public ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  public showAddUserForm() {
    this.visibleAction = ActionsType.AddUser;
  }

  public showSelectedUser() {
    this.visibleAction = ActionsType.ShowSelectedUser;
  }

  public onUserAdded(user: AddUserRequest) {
    this.store.dispatch(addUser({ user }));
    this.visibleAction = ActionsType.None;
  }

  public selectUser(user: User) {
    this.store.dispatch(setUser({ user }));
  }

  public closeActionWindow() {
    this.visibleAction = ActionsType.None;
  }
}
