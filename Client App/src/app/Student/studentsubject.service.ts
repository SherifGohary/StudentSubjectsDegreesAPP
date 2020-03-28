import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import {StudentSubject} from './student-subject';
@Injectable({
  providedIn: 'root'
})
export class StudentsubjectService {
  baseurl:string="http://localhost:63892/Api/StudentSubjects";


  getStudents(id:number){
    return this.http.get<StudentSubject[]>(this.baseurl+"/"+id);
  }

  getdetails(id:number){
    return this.http.get<StudentSubject[]>(this.baseurl+"/GetStudentDetails/"+id);
  }
  setDegrees(id:number,stdSub:StudentSubject)
  {
    return this.http.put<StudentSubject[]>(this.baseurl+"/"+id,stdSub)
  }
  getAllStudentSubjects(){
    return this.http.get<StudentSubject[]>(this.baseurl);
  }

  addStudentSubject(std:string,sub:string){
    return this.http.post<StudentSubject>(this.baseurl+"/PostStudentSubjectMany?stdIds="+std+"&subIds="+sub,null);
    //this.students.push(new Student(std.Id,std.Name,std.Age));
  }

  
  constructor(private http:HttpClient) { }
}

