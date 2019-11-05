import { Injectable } from '@angular/core';
import { MyRow } from '../Models/myRow';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyRowService {

  private rows: MyRow[] = [
    {
      Id: "00000000-0000-0000-0000-000000000000",
      Description: "First row from collection",
      Name: "Row #1",
      ValidTo: new Date(2019, 12, 20)
    },
    {
      Id: "00000000-0000-0000-1111-000000000000",
      Description: "Second row from collection",
      Name: "Row #2",
      ValidTo: new Date(2010, 1, 5)
    },
    {
      Id: "00000000-0000-0000-2222-000000000000",
      Description: "Third row from collection",
      Name: "Row #3",
      ValidTo: new Date(2025, 7, 16)
    }
  ]

  public getRows() : Observable<MyRow[]>{
    return of(this.rows);
  }

  public updateRow(row : MyRow){
    for(let i = 0; i < this.rows.length; i++)
    {
      if(this.rows[i].Id == row.Id)
      {
        this.rows[i] = row;
      }
    }
  }

  constructor() { }
}
