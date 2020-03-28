import { Injectable } from '@angular/core';
import {Subject} from '../Student/subject'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  baseurl:string="http://localhost:63892/Api/subjects";

  getAll(){
    return this.http.get<Subject[]>(this.baseurl);
    //.subscribe( a=>console.log(a),
    
    //return this.students;
  }
  getSubject(id:number){
    return this.http.get<Subject>(this.baseurl+"/"+id);
  }
  addSubject(sb:Subject){
    return this.http.post<Subject>(this.baseurl,sb);
    //this.students.push(new Subject(std.Id,std.Name,std.Age));
  }
  editSubject(id:number,sb:Subject){
    //console.log(id);
    return this.http.put<Subject>(this.baseurl+"/"+id,sb);
  }
  deleteSubjectSer(id:number){
    return this.http.delete<Subject>(this.baseurl+"/"+id);
  }
  constructor(private http:HttpClient) { }
}

