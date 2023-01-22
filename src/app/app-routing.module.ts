import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './todo/component/addtodo/addtodo.component';
import { AlltodoComponent } from './todo/component/alltodo/alltodo.component';
import { UpdatetodoComponent } from './todo/component/updatetodo/updatetodo.component';
import { ViewtodoComponent } from './todo/component/viewtodo/viewtodo.component';

const routes: Routes = [
  {path:"alltodo",component:AlltodoComponent},
  {path:"addtodo",component:AddtodoComponent},
  {path:"updatetodo/:id",component:UpdatetodoComponent},
  {path:"viewtodo/:id",component:ViewtodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
