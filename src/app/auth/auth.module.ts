import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './auth-interceptor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return{
      ngModule: AuthModule,
      providers: [
        AuthService, {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true,
        }
      ],
    };
  }
}
