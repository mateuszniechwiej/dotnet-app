import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/model/list.model';
import { ListService } from 'src/app/service/list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-display-lists',
  templateUrl: './display-lists.component.html',
  styleUrls: [],
})
export class DisplayListsComponent implements OnInit {
  lists?: List[];
  currentList: List = {};
  currentIndex = -1;
  itemList = '';
  constructor(private listService: ListService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.displayLists();
  }
  displayLists(): void {
    this.listService.getAll().subscribe({
      next: (data) => {
        this.lists = data;
        console.log(data);
      },
      error: (err) => console.error(err),
    });
  }
  refreshList(): void {
    this.displayLists();
    this.currentList = {};
    this.currentIndex = -1;
  }
  setActiveList(list: List, index: number): void {
    this.currentList = list;
    this.currentIndex = index;
  }
  removeAllLists(): void {
    this.listService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
        this.toastr.error('All lists deleted', 'Deleted');
      },
      error: (e) => console.error(e),
    });
  }
}
