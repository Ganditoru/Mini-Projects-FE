import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addAddress, addAddressSuccessful, loadAddresses, loadAddressesFailed, loadAddressesSuccessful } from "./address.actions";
import { AddressService } from "../service/address.service";
import { catchError, filter, map, mergeMap, of, switchMap, take, withLatestFrom } from "rxjs";
import { Address } from "../models/address.model";
import { Store, select } from '@ngrx/store';
import { selectAllAddresses, selectIsUserListLoaded } from "./address.selector";




@Injectable()
export class AddressEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly addressService: AddressService,
        private readonly store: Store
    ) { }

    loadAddressList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadAddresses),
            switchMap((_) =>
                this.store.pipe(
                    select(selectIsUserListLoaded),
                    filter(isUserLoaded => !!isUserLoaded),
                    withLatestFrom(this.store.pipe(select(selectAllAddresses)))
                )
            ),
            map(([_, addressList]) => {
                return addressList.length > 0
                    ? loadAddressesSuccessful({ addressList })
                    : loadAddressesFailed({ error: 'No addresses found in store' });
            }),
            catchError(error => of(loadAddressesFailed({ error: error.message })))
        )
    );

    addUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addAddress),
            mergeMap(({ address }) =>
                this.addressService.createAddress(address).pipe(
                    map((newAddress: Address) => addAddressSuccessful({ address: newAddress }))
                )
            )
        )
    );

}