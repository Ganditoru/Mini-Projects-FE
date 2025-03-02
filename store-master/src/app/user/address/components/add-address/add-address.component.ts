import { Component, EventEmitter, Output } from '@angular/core';
import { AddAddressRequest } from '../../models/add-address-request.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-add-address',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FlexLayoutModule],
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.scss'
})
export class AddAddressComponent {
  @Output() public userAdded = new EventEmitter<AddAddressRequest>();
  @Output() public close = new EventEmitter<void>();


  addressForm = new FormGroup({
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zipcode: new FormControl('', Validators.required)
  });

  public submitForm() {
    if (!this.addressForm.valid) {
      this.addressForm.markAllAsTouched();
      return;
    }

    this.userAdded.emit(this.addressForm.value as AddAddressRequest);
    this.addressForm.reset();
  }

  public clearUser() {
    this.close.emit();
  }
}
