import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';  
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterComponent } from './register/register.component';
import { NewCharComponent } from './new-char/new-char.component';
import { EditCharComponent } from './edit-char/edit-char.component';
import { ListCharComponent } from './list-char/list-char.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    RegisterComponent,
    NewCharComponent,
    EditCharComponent,
    ListCharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,  
    MatButtonModule,  
    MatSelectModule,
    
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,

    MatGridListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
