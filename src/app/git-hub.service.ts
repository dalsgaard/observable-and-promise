import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface User {
  login: string;
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  constructor(private http: HttpClient) {}

  public get baseUrl() {
    return 'https://api.github.com/users';
  }

  public async user(login: string): Promise<User | null> {
    const url = `${this.baseUrl}/${login}`;
    return this.http
      .get<User>(url)
      .pipe(
        catchError(err => {
          if (err.status === 404) {
            return Promise.resolve(null);
          } else {
            return throwError(err);
          }
        })
      )
      .toPromise();
  }
}
