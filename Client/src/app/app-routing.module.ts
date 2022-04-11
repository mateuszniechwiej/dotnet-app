import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListComponent } from './components/add-list/add-list.component';
import { DisplayListsComponent } from './components/display-lists/display-lists.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';

const routes: Routes = [
  {path:'',redirectTo: 'lists', pathMatch: 'full'},
  {path:'lists',component: DisplayListsComponent},
  {path:'lists/:id',component: ListDetailsComponent},
  {path:'add',component: AddListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
