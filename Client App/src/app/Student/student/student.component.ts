import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  stdlist:Student[]=[];
  std:Student=new Student(0,"",22,"");
  constructor(private stdserv:StudentService) { 
  }
  showImage(yy){

  }
add(std:Student){
  this.stdlist.push(std);
  this.std=new Student(0,"",22,"");
  this.ngOnInit();
  }
  delete(id:number){
    this.stdserv.deleteStd(id).subscribe(
      a=>this.stdlist.splice(this.stdlist.findIndex(a=>a.ID==id),1)
    )
  }
  editevent(std:Student){
    let ostd:Student=this.stdlist.find(a=>a.ID==std.ID)
    ostd=std;
    this.std=new Student(0,"",22,"");
    this.ngOnInit();

  }
  edit(id){
    console.log(id)
    this.stdserv.getId(id).subscribe(
      a=>this.std=new Student(a.ID,a.Name,a.Age,a.Adress)
    )
    console.log(this.std)
  }
  ngOnInit() {
    this.stdserv.getAll().subscribe(
      a=>this.stdlist=a,
    )
    
  }

}
