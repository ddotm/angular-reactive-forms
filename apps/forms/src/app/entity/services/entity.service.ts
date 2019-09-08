import _ from 'lodash';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  forkJoin,
  Observable,
  throwError
} from 'rxjs';
import {Entity} from '../models/entity';
import {
  catchError,
  mergeMap,
  tap
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private entityUrl = 'api/entities';

  constructor(private httpClient: HttpClient) {
  }

  public get(id: number): Observable<Array<Entity>> {
    return this.httpClient.get<Array<Entity>>(this.entityUrl)
               .pipe(
                 tap((data: Array<Entity>) => console.log(JSON.stringify(data))),
                 tap((data: Array<Entity>) => _.forEach(data, (item: Entity) => {
                     // fake api service returns dates as strings for some reason
                     item.endDate = new Date(item.endDate);
                     item.startDate = new Date(item.startDate);
                   })
                 ),
                 catchError(this.handleError)
               );
  }

  public getById(id) {
    return this.httpClient.get(`${this.entityUrl}/${id}`)
               .pipe(
                 tap((data: Entity) => {
                   // fake api service returns dates as strings for some reason
                   data.endDate = new Date(data.endDate);
                   data.startDate = new Date(data.startDate);
                 })
               );
  }

  public addEntity(data: Entity): Observable<Entity> {
    return this.httpClient.post(`${this.entityUrl}`, data)
               .pipe(
                 mergeMap(() => {
                   return this.getById(1);
                 })
               );
  }

  public updateEntity(data: Entity): Observable<Entity> {
    return this.httpClient.put(`${this.entityUrl}/${data.id}`, data)
               .pipe(
                 mergeMap(() => {
                   return this.getById(data.id);
                 })
               );
  }

  public save(data: Array<Entity>) {
    const obs: Array<Observable<any>> = new Array<Observable<any>>();
    _.forEach(data, (dataItem: Entity) => {
      if (dataItem.id !== 0) {
        obs.push(this.updateEntity(dataItem));
      } else {
        obs.push(this.addEntity(dataItem));
      }
    });
    return forkJoin(obs);
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
