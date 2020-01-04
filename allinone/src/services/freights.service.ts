import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ILocalization, FreightType, Freight } from 'src/freights/models';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FreightsService {
  constructor(private httpClient : HttpClient) { }

  public getRows(): Observable<Freight[]> {
    return this.httpClient.get<Freight[]>('/api/freights')
      .pipe(catchError(this.handleError<Freight[]>("getFreights", [])));
  }

  private handleError<T>(operation = "operation", result? : T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  } 

  public Get(id: number): Observable<Freight> {
    return this.httpClient.get<Freight>('/api/freights/'+id)
      .pipe(catchError(this.handleError<Freight>("getFreightByID")));
  }

  public updateFreight(freight: Freight) {    
    return this.httpClient.put<Freight>('/api/freights/'+freight.id,freight)
      .pipe(catchError(this.handleError<Freight>("updateFreight")));
  }

  public addFreight(freight: Freight){
    return this.httpClient.post<Freight>("/api/freights", freight)
      .pipe(catchError(this.handleError<Freight>("addFreight")));
  }

  getFreightsSourceCountries(): Observable<string[]> {
    return this.getRows().pipe(map(freights => freights.map(freight => freight.source.country)));   
  }

  getFreightsDestinationCountries(): Observable<string[]> {
    return this.getRows().pipe(map(freights => freights.map(freight => freight.destination.country)));
  }
}
