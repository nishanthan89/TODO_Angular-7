import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { TodoService } from '../services/todo.service';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  model: any = { DueDate: new Date };
  resourceList: any = {};
  isCreated = false;
  //errorMessage = '';

  constructor(private service: TodoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getUserList().subscribe((data) => {
      this.resourceList = data;
      // this.router.navigate(['/dashboard']);
    })
  //this is for edit part, to launch data to that same screen
    //api/GetAllResource
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.GetTaskByID(id).subscribe((data) => {
        this.model = data;
      })
    }
  }

  save() {

    if (this.model.ID) {
      console.log(this.model);
      this.service.updateTodo(this.model.ID, this.model).subscribe((data) => {
        console.log('updated todo')
        console.log(data);
        this.router.navigate(['/dashboard']);
      })
    } else {
      this.service.createToDo(this.model).subscribe((data) => {
        console.log('created todo')
        console.log(data);


        this.isCreated = true;
       // this.errorMessage  = data;

        setTimeout(() => {
          this.isCreated = false;
          this.router.navigate(['/dashboard']);
        }, 3000);


      })
    }



  }

}
