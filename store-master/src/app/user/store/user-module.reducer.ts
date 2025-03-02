import { createReducer, on, combineReducers } from '@ngrx/store';
import { userReducer, UserState } from './user/user.reducer';
import { addressReducer, AddressState } from '../address/store/address.reducer';

export interface UserModuleState { 
    user: UserState; 
    address: AddressState; 
}

export const userModuleReducer = combineReducers({
    user: userReducer,
    address: addressReducer
})