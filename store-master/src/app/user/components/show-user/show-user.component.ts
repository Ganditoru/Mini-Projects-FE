import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-show-user',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule],
  templateUrl: './show-user.component.html',
  styleUrl: './show-user.component.scss'
})
export class ShowUserComponent {
  @Input() public user: User | null = null;
  @Output() public close = new EventEmitter<void>();

  public clearUser() {
    this.close.emit();
  }
}
