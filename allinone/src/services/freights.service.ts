import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Freight } from 'src/freights/models/freight';
import { FreightType } from 'src/freights/models/freightType';

@Injectable({
  providedIn: 'root'
})
export class FreightsService {

  private freights: Freight[] = [
    {
      Id: 1,
      Description: "First row from collection",
      Name: "Row #1",
      Type: FreightType.WalkingFloor,
      ValidTo: new Date(2019, 12, 20),
      UserId: 1,
      Destination: {
        Country: "PL",
        PostCode: "40-000",
        Addres1: "Jana Pawła 2",
        Addres2: "12/2",
        Description: "Za figuro w prawo"
      },
      Source: {
        Country: "DE",
        PostCode: "1239F",
        Addres1: "RazingerStrasse",
        Addres2: "5",
        Description: ""
      }
    },
    {
      Id: 2,
      Description: "Second row from collection",
      Name: "Row #2",
      Type: FreightType.Cooler,
      ValidTo: new Date(2010, 1, 5),
      UserId: 1,
      Destination: {
        Country: "NO",
        PostCode: "2608",
        Addres1: "Lillehammer",
        Addres2: "Ravnumsvegen 4",
        Description: ""
      },
      Source: {
        Country: "RU",
        PostCode: "1239F",
        Addres1: "Moscow Oblast",
        Addres2: "Davydovskoye 25a",
        Description: "Shinomontazh"
      }
    },
    {
      Id: 3,
      Description: "Third row from collection",
      Name: "Row #3",
      Type: FreightType.Isotherm,
      ValidTo: new Date(2025, 7, 16),
      UserId: 2,
      Destination: {
        Country: "IT",
        PostCode: "67035",
        Addres1: "Pratola Peligna",
        Addres2: "Jana Pawła 2 12/2",
        Description: "Carducci & D'Andrea"
      },
      Source: {
        Country: "UA",
        PostCode: "87500",
        Addres1: "Donetsk",
        Addres2: "Karpova Ave 14",
        Description: ""
      }
    },
    {
      Id: 4,
      Description: "Name it as you want",
      Name: "Another freight",
      Type: FreightType.DumpTruck,
      ValidTo: new Date(2025, 7, 16),
      UserId: 2,
      Destination: {
        Country: "SK",
        PostCode: "841 06",
        Addres1: "Záhorská Bystrica",
        Addres2: "Na Holom vrchu 12",
        Description: ""
      },
      Source: {
        Country: "CZ",
        PostCode: "360 20",
        Addres1: "Drahovice",
        Addres2: "Krokova 339/37",
        Description: "Autoškola Jan Duspiva"
      }
    },
    {
      Id: 5,
      Description: "I'm runing out of description ideas ;)",
      Name: "Yet another freight",
      Type: FreightType.Curtainsider,
      ValidTo: new Date(2025, 7, 16),
      UserId: 1,
      Destination: {
        Country: "GR",
        PostCode: "57V2+94",
        Addres1: "Petrilia",
        Addres2: "Πετρίλια 350",
        Description: ""
      },
      Source: {
        Country: "MD",
        PostCode: "1239F",
        Addres1: "Bălți",
        Addres2: "str-la Heciului 32",
        Description: "Magazin APINORD"
      }
    }
  ]

  public getRows() : Observable<Freight[]>{
    return of(this.freights);
  }

  public Get(id:number) : Observable<Freight>{
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
