import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component'; //import the component here and make object
//import {SignUp} from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';



const routes: Routes = [
  { path: '', component: HomeComponent }, //here declare the routing 
  //{ path: '', component: TodoListComponent },
  { path: 'create', component: TodoCreateComponent },
  { path: 'create/:id', component: TodoCreateComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
