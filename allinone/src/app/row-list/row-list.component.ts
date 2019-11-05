import { Component, OnInit } from '@angular/core';
import { MyRow } from '../Models/myRow';
import { MyRowService } from '../Services/my-row.service'

@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.less']
})
export class RowListComponent implements OnInit {

  public myRows : MyRow[];

  constructor(private myRowService : MyRowService) { }

  ngOnInit() {
    this.myRowService.getRows().subscribe(rows => this.myRows = rows);
  }

}
