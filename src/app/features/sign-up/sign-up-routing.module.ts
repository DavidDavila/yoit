import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { ChooseRoleComponent } from './components/choose-role/choose-role.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
    children: [
      {
        path: '',
        component: ChooseRoleComponent,
      },
      {
        path: 'teacher',
        loadChildren: () =>
          import('./components/teacher/teacher.module').then(
            (m) => m.TeacherModule
          ),
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./components/student/student.module').then(
            (m) => m.StudentModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
