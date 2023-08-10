import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { StudentComponent } from './student/student.component';
// import { GradeComponent } from './grade/grade.component';
// import { CourseComponent } from './course/course.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { BackgroundComponent } from './background/background.component';

export const routing = RouterModule.forRoot([
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'background', component: BackgroundComponent },
      {
        path: 'departments',
        component: DepartmentsComponent,
        outlet: 'studentMain',
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        outlet: 'studentMain',
      },
    ],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
]);
