import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IList } from '../inrerfaces/list.interface';

@Injectable({
  providedIn: 'root',
})
export class MockedService {
  constructor() {}

  public getLists(): Observable<IList[]> {
    return of([
      {
        id: 1,
        items: [],
        date: new Date(2024, 8),
        sum: 300,
      },
    ]);
  }
}
