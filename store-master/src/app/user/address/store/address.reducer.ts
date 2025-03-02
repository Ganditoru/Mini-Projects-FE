import { createReducer, on } from '@ngrx/store';
import { addAddressSuccessful, loadAddressesSuccessful, setAddress } from './address.actions';
import { Address } from '../models/address.model';

export interface AddressState {
  selectedAddress: Address | null;
  addressList: Address[];
}

const initialAddressState: AddressState = {
  selectedAddress: null,
  addressList: []
};

export const addressReducer = createReducer(
  initialAddressState,

  on(setAddress, (state, { address }) => ({ ...state, selectedAddress: address })),

  on(loadAddressesSuccessful, (state, { addressList }) => ({ ...state, addressList })),


  on(addAddressSuccessful, (state, { address }) => ({ ...state, addressList: [...state.addressList, address] }))

);
