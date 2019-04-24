import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface DateTime {
  time: string;
  date: string;
  milliseconds: number;
}

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {
  constructor(private http: HttpClient) {}

  public async now(): Promise<DateTime> {
    const url = 'http://time.jsontest.com/';
    return this.http
      .get<DateTime>(url)
      .pipe(
        catchError(err => {
          return throwError(new Error(err));
        })
      )
      .toPromise();
  }
}
