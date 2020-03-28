import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../subject.service';
import {Subject} from '../../subject'

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectlistComponent implements OnInit {
  subjectlst:Subject[]=[];
  nsb:Subject=new Subject();
  
  showAllsubject(){
     this.subserv.getAll().subscribe(
       a=>this.subjectlst=a
     )
  }
  AddNewsubject(){
    this.subserv.addSubject(this.nsb).subscribe(
      a=>this.subjectlst.push(a),
      err=>console.log(err)
    );
   // this.showAllsubject();
  }
  getsubjectData(id:number){
    console.log(id);
    this.subserv.getSubject(id).subscribe(
      a=>{
          this.nsb.Id=id;
          this.nsb.Name=a.Name;
          console.log(this.nsb.Id)
          console.log(this.nsb.Name)

      }
    )
  }
  editsubject()
  {
    this.subserv.editSubject(this.nsb.Id,this.nsb).subscribe(
      a=>
      {
        console.log("data updated");
        this.showAllsubject();
    
      }
    )
  }
  deletesubject(id:number)
  {
    console.log(id);
    this.subserv.deleteSubjectSer(id).subscribe(
      a=>{
        console.log("subject deleted");
        this.showAllsubject();
      }
    )
  }


  constructor(private subserv:SubjectService) { }
  


  ngOnInit() {

    
    
  }

}
