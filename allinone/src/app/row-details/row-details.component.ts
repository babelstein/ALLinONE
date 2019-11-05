import { Component, OnInit } from '@angular/core';
import { MyRow } from '../Models/myRow';
import { CommonModule } from '@angular/common';
import { MyRowService } from '../Services/my-row.service';

@Component({
  selector: 'app-row-details',
  templateUrl: './row-details.component.html',
  styleUrls: ['./row-details.component.less']
})
export class RowDetailsComponent implements OnInit {
  public _myRow : MyRow = {
    Id : "00000000-0000-0000-0000-000000000000",
    Description: "Test description",
    Name : "Test Name",
    ValidTo: new Date(2019,12,20)
  }

  constructor(private myRowService : MyRowService) { }

  ngOnInit() {
    this.myRowService.getRows().subscribe(rows => this._myRow = rows[0]);
  }
}