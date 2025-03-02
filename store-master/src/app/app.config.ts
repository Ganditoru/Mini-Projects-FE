import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './global-store/app.reducer';

import { routes } from './app.routes';
import { UserService } from './components/user/service/user.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { UserEffects } from './components/user/store/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideStore(reducers),
    provideEffects(UserEffects), 
    provideStoreDevtools({ maxAge: 25 }),
    UserService,
    provideHttpClient()
  ]
};
