import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-alltodo',
  templateUrl: './alltodo.component.html',
  styleUrls: ['./alltodo.component.css']
})
export class AlltodoComponent implements OnInit {

  alltodo: any

  constructor(private todo: TodoService) {
    todo.getAlltodo().subscribe(data => {
      this.alltodo = data;
    });
  }

  deletetodo(id: number) {
    debugger
    if (confirm("are you sure you want to delete this todo ?")) {
      this.todo.deletetodo(id).subscribe(data => {
        console.log(data)
      });
    }
  }

  ngOnInit(): void {
  }
  formatdate(date: any) {

    if (date == null) {
      return null;
    }
    else {


      let newdt = new Date(date);
      debugger
      let result = "[dd]/[mm]/[yyyy] [lt]";
      return result
        .replace("[dd]", newdt.getDate().toString())
        .replace("[mm]", newdt.getMonth().toString())
        .replace("[yyyy]", newdt.getFullYear().toString())
        .replace("[lt]",newdt.toLocaleString())
    }
  }
}
