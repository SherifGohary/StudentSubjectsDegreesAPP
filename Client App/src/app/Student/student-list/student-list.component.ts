import { Component, OnInit } from '@angular/core';
import { StudentsubjectService } from '../studentsubject.service';
import { SubjectService } from '../subject.service';
import { StudentSubject } from '../student-subject';
import { Subject } from '../subject';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private stdsubserv:StudentsubjectService,private stdserv:StudentService) { }
  studentSubjectlst:StudentSubject[];
  stdlist:Student[]=[];
  stdId:number;
  std:Student;
  subDegree:number;
  subId:number;
  getdegree(){
    this.subDegree=this.studentSubjectlst.find(a=>a.SubID==this.subId).Degree
  }
  getStudents(){
    this.stdserv.getId(this.stdId).subscribe(
      a=>{
        this.std=a
      }
    )
    this.stdsubserv.getdetails(this.stdId).subscribe(
      a=>{
        this.studentSubjectlst=a;
        if(a.length>0){
          this.subId=a[0].SubID;
          this.getdegree();
        }else{
          this.subDegree=null;
        }   
        
      }
    )
  }

  ngOnInit() {
    this.stdserv.getAll().subscribe(
      a=>{
        this.stdlist=a;
        this.std=this.stdlist[0];
        this.stdId=this.std.ID;
        this.getStudents()
      }
    )    
  }

}
