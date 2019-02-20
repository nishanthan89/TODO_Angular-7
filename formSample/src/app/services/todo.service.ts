import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  // getAllList() {
  //   return this.http.get<any>('http://localhost/SampleAPI/api/GetEmployees')
  // }
  
  // getTodo(id){
  //   return this.http.get<any>('http://localhost/SampleAPI/api/GetEmployee?id=' + id)
  // }

  createToDo(data){
    return this.http.post<any>('http://localhost/SampleAPI/api/AddTask', data)
  }

  deleteToDo(id: Number){
    return this.http.delete<any>('http://localhost/SampleAPI/api/DeleteEmployee?id=' + id)
  }

  updateTodo(id: Number, data: any){
    return this.http.put<any>('http://localhost/SampleAPI/api/PutEmployee?id=' + id, data)
  }


  signUp(data: any){
    return this.http.post<any>('http://localhost/SampleAPI/api/Signup', data)
  }

  Login(data: any){
    return this.http.post<any>('http://localhost/SampleAPI/api/Login', data)
  }

  getUserList() {
    return this.http.get<any>('http://localhost/SampleAPI/api/GetAllResource')
  }

  getAllTask() {
    return this.http.get<any>('http://localhost/SampleAPI/api/GetAllTasks')
  }
  GetTaskByID(id){
    return this.http.get<any>('http://localhost/SampleAPI/api/GetTaskByID?id=' + id)
  }

}
