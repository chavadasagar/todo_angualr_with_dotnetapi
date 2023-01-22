import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  constructor(private todo:TodoService) { }

  ngOnInit(): void {
  }

  public addtodo(todo:Todo){
    todo.isactive = false;
    todo.createddate = new Date();
    this.todo.addtodo(todo).subscribe();
  }

}
