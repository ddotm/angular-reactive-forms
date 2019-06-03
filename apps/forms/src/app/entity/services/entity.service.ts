import { forEach } from 'lodash';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Entity, IEntity } from '../models/entity';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private entityUrl = 'api/entities';

  constructor(private http: HttpClient) {
  }

  public get(id: number): Observable<Array<Entity>> {
    return this.http.get<Array<Entity>>(this.entityUrl)
      .pipe(
        tap((data: Array<Entity>) => console.log(JSON.stringify(data))),
        tap((data: Array<Entity>) => forEach(data, (item: Entity) => {
            // fake api service returns dates as strings for some reason
            item.endDate = new Date(item.endDate);
            item.startDate = new Date(item.startDate);
          })
        ),
        catchError(this.handleError)
      );
  }

  public save(data: Array<IEntity>): void {
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
