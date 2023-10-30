import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { ChooseRoleComponent } from './components/choose-role/choose-role.component';

@NgModule({
  imports: [CommonModule, SignUpRoutingModule],
  declarations: [SignUpComponent, LandingComponent, ChooseRoleComponent],
})
export class SignUpModule {}
