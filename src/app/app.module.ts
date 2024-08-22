import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { NgSelectModule } from '@ng-select/ng-select'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoginComponent } from './login/login.component'
import { TextInputComponent } from './generic-components/text-input/text-input.component';
import { ButtonComponent } from './generic-components/button/button.component';
import { CheckboxComponent } from './generic-components/checkbox/checkbox.component'

@NgModule({
  declarations: [AppComponent, LoginComponent, TextInputComponent, ButtonComponent, CheckboxComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    NgSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
