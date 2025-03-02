import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-show-address-list',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule],
  templateUrl: './show-address-list.component.html',
  styleUrl: './show-address-list.component.scss'
})
export class ShowAddressListComponent {
  @Input() public addressList: Address[] = [];
  @Input() public selectedAddress?: Address;
  @Output() public selectAddress = new EventEmitter<Address>();

  public onAddressSelect(address: Address) {
    this.selectAddress.emit(address);
  }
}
