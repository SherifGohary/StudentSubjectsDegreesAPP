import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {Subject} from '../subject';
import { StudentSubject } from '../student-subject';
import { StudentsubjectService } from '../studentsubject.service';
import { StudentService } from '../student.service';
import { SubjectService } from '../subject.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-student-subject',
  templateUrl: './student-subject.component.html',
  styleUrls: ['./student-subject.component.css']
})
export class StudentSubjectComponent implements OnInit {
  students:Student[]=[];
  subjects:Subject[]=[];
  studentSubjects:StudentSubject[]=[];



  newstds:number[]=[];
  newsubs:number[]=[];
  nstdsub:StudentSubject=new StudentSubject(2,2,0);


  showAllStudentSubject(){
    this.stdserv.getAll().subscribe(
      a=>this.students=a
    );
    this.subserv.getAll().subscribe(a=>this.subjects=a);
 }


 AddStudentSubject(){
    this.stdsubser.addStudentSubject(this.newstds.join(','),this.newsubs.join(',')).subscribe();
    this.R.navigate(['/student/subject']);

 }

 show(){
  this.stdsubser.getAllStudentSubjects().subscribe(a=>this.studentSubjects=a);
 }
  constructor(private stdsubser:StudentsubjectService,private stdserv:StudentService,private subserv:SubjectService,private R:Router) { }

  ngOnInit() {
    this.showAllStudentSubject();
  }

}
