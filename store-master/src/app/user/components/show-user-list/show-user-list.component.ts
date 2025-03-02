import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-user-list',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule],
  templateUrl: './show-user-list.component.html',
  styleUrl: './show-user-list.component.scss'
})
export class ShowUserListComponent {
  @Input() public userList: User[] = [];
  @Input() public selectedUser?: User;
  @Output() public selectUser = new EventEmitter<User>();

  public onUserSelect(user: User) {
    this.selectUser.emit(user);
  }
}
