import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/app/model/list.model';
import { ListService } from 'src/app/service/list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styles: [],
})
export class ListDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentList: List = {
    id: '',
    listItem: '',
  };


  constructor(
    private toastr: ToastrService,
    private listService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.getList(this.route.snapshot.params['id']);
    }
  }

  getList(id: any): void {
    this.listService.get(id).subscribe({
      next: (data) => {
        this.currentList = data;
        console.log(data);
      },
      error: (err) => console.error(err),
    });
  }

  updateList(): void {
    this.listService.update(this.currentList.id, this.currentList)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success('This country was updated successfully!', 'Updated!');
        },
        error: (err) => console.error(err)
      });
  }

  deleteList(): void {
    this.listService.delete(this.currentList.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.warning('This List was deleted', 'Delete Confirmed')
          this.router.navigate(['/lists']);
        },
        error: (err) => console.error(err)
      });
  }
}