import { JsonPipe } from '@angular/common';
import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-updatetodo',
  templateUrl: './updatetodo.component.html',
  styleUrls: ['./updatetodo.component.css']
})
export class UpdatetodoComponent implements OnInit {
  todo!:any
  constructor(private http:TodoService,private route:ActivatedRoute) {
    this.http.getidbytodo(this.route.snapshot.params['id']).subscribe(data => {
      this.todo = data;
    });
    console.log(this.todo);
   }

  ngOnInit(): void {
  }

  updatetodo(todo:Todo)
  {
    
    this.http.updatetodo(todo,todo.id).subscribe(data => {
      console.log(data)
    }); 
  }

}
