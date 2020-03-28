import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../subject.service';
import {Subject} from '../../subject'
import {StudentsubjectService} from'../../studentsubject.service';
import { Student } from '../../student';
import {StudentSubject} from '../../student-subject';

@Component({
  selector: 'app-subject-drop',
  templateUrl: './subject-drop.component.html',
  styleUrls: ['./subject-drop.component.css']
})
export class SubjectDropComponent implements OnInit {

  constructor(private stdSubSer:StudentsubjectService ,  private subSer:SubjectService) { }
  studentSubjectlst:StudentSubject[];
  subjectlst:Subject[]=[];
  subId:number=0;

  show(){
    console.log(this.subId)
  }

  getStudents()
  {
    this.stdSubSer.getStudents(this.subId).subscribe(
      a=>{
        this.studentSubjectlst=a
        console.log(this.studentSubjectlst)
      }
    )
  }
  submit()
  {
    this.studentSubjectlst.forEach(element => {
      this.stdSubSer.setDegrees(element.StID,element).subscribe(a=>{console.log("data modifided successfully")})
    });
    
  }



  ngOnInit() {
    this.subSer.getAll().subscribe(a=>this.subjectlst=a)
  }

}
