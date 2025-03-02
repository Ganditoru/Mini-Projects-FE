import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { Address } from "../models/address.model";
import { AddAddressRequest } from "../models/add-address-request.model";

@Injectable()
export class AddressService {

    public getAddresses(): Observable<Address[]> {
        return of([]).pipe(delay(2000));
    }

    public createAddress(address: AddAddressRequest): Observable<Address> {
        return of(<Address>{ ...address })
    }

}