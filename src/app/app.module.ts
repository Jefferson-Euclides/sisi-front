import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { HomeComponent } from './home/home.component';
import { FormOccurrenceComponent } from './form-occurrence/form-occurrence.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FormComplaintComponent } from './form-complaint/form-complaint.component';
import { ListOccurrenceComponent } from './list-occurrence/list-occurrence.component';

// Services
import { TokenInterceptor } from './services/token/token.interceptor';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { UserService } from './services/user.service';
import { OccurrenceService } from './services/occurrence.service';
import { AlertService } from './services/alert.service';

// Libraries
import {
  MatButtonModule,
  MatCardModule,
  MatRadioModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatCheckboxModule,
  MatSelectModule,
  MatTabsModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {NotifierModule} from 'angular-notifier';
import { HttpModule } from '@angular/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormRegisterComponent,
    LoginComponent,
    HomeComponent,
    FormOccurrenceComponent,
    ListUserComponent,
    FormComplaintComponent,
    ListOccurrenceComponent,
    FormComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    NotifierModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CommonModule,
    AgmCoreModule.forRoot({ //Key
      apiKey: 'AIzaSyBeNmjjr1hYj-sHr7QdLbWSXvvuWjjZkiY'
    })
  ],
  providers: [
    AuthGuardService,
    UserService,
    OccurrenceService,
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
