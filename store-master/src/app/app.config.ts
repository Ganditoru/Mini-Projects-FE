import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './global-store/app.reducer';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { UserEffects } from './user/store/user/user.effects';
import { AddressEffects } from './user/address/store/address.effects';
import { AddressService } from './user/address/service/address.service';
import { UserService } from './user/service/user.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers),
    provideEffects(UserEffects, AddressEffects), 
    provideStoreDevtools({ maxAge: 25 }),
    provideHttpClient(),
    AddressService,
    UserService
  ]
};
