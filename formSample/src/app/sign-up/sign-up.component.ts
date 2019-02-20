import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: any = {};
  constructor(private service: TodoService, private router: Router) { }

  ngOnInit() {
  }

  signup()
  {
    this.service.signUp(this.model).subscribe((data) => {
      console.log('updated todo')
      console.log(data);
      this.router.navigate(['/']);
    })
  }
}
