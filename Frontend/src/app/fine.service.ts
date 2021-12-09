import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FineService {
  readonly URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public post(url: string, payload: any) {
    return this.http.post(`${this.URL}/${url}`, payload);
  }

  public get(url: string) {
    return this.http.get(`${this.URL}/api/${url}`);
  }
}
