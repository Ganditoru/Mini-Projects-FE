import { createAction, props } from "@ngrx/store"
import { Address } from "../models/address.model";
import { AddAddressRequest } from "../models/add-address-request.model";

  export const setAddress = createAction('[Address] Set selected Address', props<{ address: Address}>());

  export const loadAddresses = createAction('[Address] Load addresses');
  export const loadAddressesSuccessful = createAction('[Address] Load addresses successful', props<{ addressList: Address[]}>());
  export const loadAddressesFailed = createAction('[Address] Load addresses failed', props<{ error: string }>());

  export const addAddress = createAction('[Address] Add address', props<{ address: AddAddressRequest }>())
  export const addAddressSuccessful = createAction('[Address] Add address successful', props<{ address: Address }>())