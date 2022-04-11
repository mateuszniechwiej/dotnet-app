import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/model/list.model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styles: [
  ]
})
export class AddListComponent implements OnInit {
  list: List = {
    listItem: '',
  }
  created = false;
  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }
  saveList(): void {
    const data = {
      listItem: this.list.listItem
    };
  this.listService.create(data)
  .subscribe({
    next: (res) => {
      console.log(res)
      this.created = true;
    },
    error: (err) => console.log(err)
  });
}
newList(): void {
  this.created = false;
  this.list = {
    listItem: ''
  };
}
}
