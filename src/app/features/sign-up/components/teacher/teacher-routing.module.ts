import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';

const TeacherRoutes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(TeacherRoutes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
