import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSignUpComponent } from './header-sign-up/header-sign-up.component';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { GoogleButtonComponent } from './google-button/google-button.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    HeaderSignUpComponent,
    RegisterFormComponent,
    GoogleButtonComponent,
  ],
  exports: [
    HeaderSignUpComponent,
    RegisterFormComponent,
    GoogleButtonComponent,
  ],
})
export class SharedSignUpModule {}
