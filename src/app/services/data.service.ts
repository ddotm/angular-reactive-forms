import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  public getData(): Observable<any> {
    return of([
      {},
      {},
      {}
    ]);
  }
}
