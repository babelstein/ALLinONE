import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Freight } from 'src/freights/Models/freight';

@Injectable({
  providedIn: 'root'
})
export class FreightsService {

  private freights: Freight[] = [
    {
      Id: 1,
      Description: "First row from collection",
      Name: "Row #1",
      ValidTo: new Date(2019, 12, 20),
      HideExtras: true
    },
    {
      Id: 2,
      Description: "Second row from collection",
      Name: "Row #2",
      ValidTo: new Date(2010, 1, 5),
      HideExtras: true
    },
    {
      Id: 3,
      Description: "Third row from collection",
      Name: "Row #3",
      ValidTo: new Date(2025, 7, 16),
      HideExtras: true
    },
    {
      Id: 4,
      Description: "Name it as you want",
      Name: "Another freight",
      ValidTo: new Date(2025, 7, 16),
      HideExtras: true
    },
    {
      Id: 5,
      Description: "I'm runing out of description ideas ;)",
      Name: "Yet another freight!",
      ValidTo: new Date(2025, 7, 16),
      HideExtras: true
    }
  ]

  public getRows() : Observable<Freight[]>{
    return of(this.freights);
  }

  public getRow(id:number) : Observable<Freight>{
    return of(this.freights.find(row => row.Id === id));
  }

  public updateFreight(freight : Freight){
    for(let i = 0; i < this.freights.length; i++)
    {
      if(this.freights[i].Id == freight.Id)
      {
        this.freights[i] = freight;
      }
    }
  }

  constructor() { }
}
