import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/model/list.model';
import { ListService } from 'src/app/service/list.service';
import { ToastrService } from 'ngx-toastr';

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
  
  constructor(private listService: ListService,
    private toastr: ToastrService) { }

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
      this.toastr.success('List created', 'Successfully Added')
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
