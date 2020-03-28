import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Student/student/student.component';
import { AddStudentComponent } from './Student/add-student/add-student.component';
import {HttpClientModule} from "@angular/common/http"
import { from } from 'rxjs';
import { StudentListComponent } from './Student/student-list/student-list.component';
import {SubjectDropComponent} from './Student/subject/subject-drop/subject-drop.component'
import {SubjectlistComponent} from './Student/subject/subjectlist/subjectlist.component'
import {StudentSubjectComponent } from './Student/student-subject/student-subject.component';
import { ErrorComponent } from './error/error.component';
import{CustomFormsModule}from 'ng2-validation';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddStudentComponent,
    StudentListComponent,
    SubjectDropComponent,
    SubjectlistComponent,
    StudentSubjectComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,CustomFormsModule,BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
