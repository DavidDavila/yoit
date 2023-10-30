import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student-routing.module';
import { SharedSignUpModule } from '../shared/shared-sign-up.module';
import { ChildComponent } from './child/child.component';
import { AgeComponent } from './age/age.component';
import { TutorComponent } from './tutor/tutor.component';
import { AdultComponent } from './adult/adult.component';

@NgModule({
  imports: [StudentRoutingModule, SharedSignUpModule, CommonModule],
  declarations: [
    StudentComponent,
    AgeComponent,
    ChildComponent,
    TutorComponent,
    AdultComponent,
  ],
})
export class StudentModule {}
