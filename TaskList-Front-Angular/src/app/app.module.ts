import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPruebasComponent } from './components/form-pruebas/form-pruebas.component';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorInterceptor } from './service/security/jwt-interceptor.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { AccountComponent } from './components/account/account.component';
import { ProbandoBindingsComponent } from './components/probando-bindings/probando-bindings.component';
import { BindingsServiceService } from './components/probando-bindings/bindings-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FormPruebasComponent,
    AccountComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    NewAccountComponent,
    ProbandoBindingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true,
    },
    BindingsServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
