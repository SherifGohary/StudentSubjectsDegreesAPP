import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:63892/api/students";

  getAll(){
    return this.http.get<Student[]>(this.baseUrl);
  }
  getId(id:number){
    return this.http.get<Student>(this.baseUrl+"/"+id);
  }
  addStd(std:Student){
    return this.http.post<Student>(this.baseUrl,std);
  }
  editStd(id:number,std:Student){
    return this.http.put(this.baseUrl+"/"+id,std);
  }
  deleteStd(id:number){
    return this.http.delete<Student>(this.baseUrl+"/"+id);
  }
}
