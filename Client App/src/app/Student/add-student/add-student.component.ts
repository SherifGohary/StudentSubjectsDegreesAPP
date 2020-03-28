import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import {StudentService} from "../student.service"
import { Student } from '../student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Output()
  addeve:EventEmitter<Student>=new EventEmitter()
  @Output()
  editeve:EventEmitter<Student>=new EventEmitter()
  @Input()
  nstd:Student=new Student(0,"",18,"")
  selectedFile;
  constructor(private stdserv:StudentService) { }
  addstudent(form:NgForm){
    console.log(form.form.value.ID)
    this.nstd=form.form.value
    if(this.nstd.ID==0){
      this.nstd.Image=this.selectedFile
      console.log(this.selectedFile)
      this.stdserv.addStd(this.nstd).subscribe(
        a=>this.addeve.emit(new Student(this.nstd.ID,this.nstd.Name,this.nstd.Age,this.nstd.Adress,this.nstd.Image))
      )
    }
    else{
      this.nstd.Image=this.selectedFile
      console.log(this.selectedFile)
      let id:number=this.nstd.ID;
      this.stdserv.editStd( id,this.nstd).subscribe(
        a=>this.editeve.emit(new Student(this.nstd.ID,this.nstd.Name,this.nstd.Age,this.nstd.Adress,this.nstd.Image))
      )
    }
   
  }
  upload(e){
    console.log(e.target.files[0])
    var file=e.target.files[0]
    var reader  = new FileReader();

  reader.addEventListener("load", ()=> {
    this.selectedFile = reader.result;
   // console.log(this.selectedFile)
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }

  }
  ngOnInit() {
  }

}
