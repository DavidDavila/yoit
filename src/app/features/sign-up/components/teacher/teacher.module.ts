import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { SharedSignUpModule } from '../shared/shared-sign-up.module';

@NgModule({
  imports: [CommonModule, TeacherRoutingModule, SharedSignUpModule],
  declarations: [TeacherComponent],
})
export class TeacherModule {}
