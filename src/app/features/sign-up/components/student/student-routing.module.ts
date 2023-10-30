import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { AgeComponent } from './age/age.component';
import { ChildComponent } from './child/child.component';
import { TutorComponent } from './tutor/tutor.component';
import { AdultComponent } from './adult/adult.component';

const RoutesStudent: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: '',
        component: AgeComponent,
      },
      { path: 'child', component: ChildComponent },
      { path: 'tutor', component: TutorComponent },
      { path: 'adult', component: AdultComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(RoutesStudent)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
