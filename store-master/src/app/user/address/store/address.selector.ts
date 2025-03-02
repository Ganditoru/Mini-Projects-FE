import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserModuleState } from "../../store/user-module.reducer";
import { Address } from "../models/address.model";


export const selectUserModuleState = createFeatureSelector<UserModuleState>('userModule');

export const selectAllAddresses = createSelector(
    selectUserModuleState,
    (userState) => userState.user.userList.map(user => user.address).filter(address => address !== undefined) as Address[]
);

export const selectIsUserListLoaded  = createSelector(
    selectUserModuleState,
    (userState) => userState.user.isLoaded
);

export const selectAddressState = createSelector(
    selectUserModuleState,
    (state) => state.address
);

export const selectSelectedAddress = createSelector(
    selectAddressState,
    (state) => state.selectedAddress
);

export const selectAddressList = createSelector(
    selectAddressState,
    (state) => state.addressList
)