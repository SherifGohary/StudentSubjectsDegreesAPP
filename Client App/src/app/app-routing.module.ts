import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { StudentComponent } from './Student/student/student.component';
import { SubjectlistComponent } from './Student/subject/subjectlist/subjectlist.component';
import { SubjectDropComponent } from './Student/subject/subject-drop/subject-drop.component';
import {StudentSubjectComponent} from './Student/student-subject/student-subject.component';
import { StudentListComponent} from './Student/student-list/student-list.component'

const routes: Routes = [

   {path:"home/index",component:StudentComponent},
   {path:"home/subject",component:SubjectlistComponent},
   {path:"student/subject",component:SubjectDropComponent},
   {path:"studentsubject/add",component:StudentSubjectComponent},
   {path:"student/details",component:StudentListComponent},


   {path:"",redirectTo:"home/index",pathMatch:"full"},  
   {path:"**",component:ErrorComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
