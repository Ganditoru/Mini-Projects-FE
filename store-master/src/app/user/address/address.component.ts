import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../global-store/app.reducer';
import { selectAddressList, selectSelectedAddress } from './store/address.selector';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { ShowAddressComponent } from './components/show-address/show-address.component';
import { AddressActionsType } from './models/user-action-types.enum';
import { addAddress, loadAddresses, setAddress } from './store/address.actions';
import { AddAddressRequest } from './models/add-address-request.model';
import { Address } from './models/address.model';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, AddAddressComponent, ShowAddressComponent],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent implements OnInit {
  public addresses$ = this.store.select(selectAddressList);
  public selectedAddress$ = this.store.select(selectSelectedAddress);

  public visibleAction: AddressActionsType = AddressActionsType.None;
  public AddressActionsType = AddressActionsType;

  constructor(private readonly store: Store<AppState>) { }

  public ngOnInit(): void {
    this.store.dispatch(loadAddresses());
  }

  public showAddAddressForm() {
    this.visibleAction = AddressActionsType.AddAddress;
  }

    public selectAddress(address: Address) {
      this.store.dispatch(setAddress({ address }));
    }

  public onAddressAdd(address: AddAddressRequest) {
    this.store.dispatch(addAddress({ address }));
    this.visibleAction = AddressActionsType.None;
  }

  public showSelectedAddress() {
    this.visibleAction = AddressActionsType.ShowSelectedAddress;
  }

  public closeActionWindow() {
    this.visibleAction = AddressActionsType.None;
  }
}
