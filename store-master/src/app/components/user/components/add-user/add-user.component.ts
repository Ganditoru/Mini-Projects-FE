import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { AddUserRequest } from '../../models/add-user-request.model';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FlexLayoutModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  @Output() public userAdded = new EventEmitter<AddUserRequest>();
  @Output() public close = new EventEmitter<void>();


  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10,15}$/)])
  });

  public submitForm() {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.userAdded.emit(this.userForm.value as AddUserRequest);
    this.userForm.reset();
  }

  public clearUser() {
    this.close.emit();
  }
}
