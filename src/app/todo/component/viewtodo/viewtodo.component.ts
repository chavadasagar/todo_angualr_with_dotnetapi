import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-viewtodo',
  templateUrl: './viewtodo.component.html',
  styleUrls: ['./viewtodo.component.css']
})
export class ViewtodoComponent implements OnInit {
  
  todo!:Todo
  constructor(private router:ActivatedRoute,private http:TodoService) {
    debugger
   }

  ngOnInit(): void {
    debugger
    this.http.getidbytodo(this.router.snapshot.params['id']).subscribe(data => {
      debugger
      this.todo = data;
    });  
  }

  deletetodo(id:number)
  {
    
    if(confirm("are you sure you want to delete this todo ?"))
    {
      this.http.deletetodo(id).subscribe(data => {
        console.log(data)
      });
    }
  }

}
