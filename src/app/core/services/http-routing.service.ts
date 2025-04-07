import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpRoutingService {

  constructor(private http: HttpClient) { }
  
  apiUrl = environment.apiUrl;

  getMethod<T>(url: string): Observable<T> {
    return this.http.get<T>(this.apiUrl + 'v1/' + url);
  }

  postMethod<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(this.apiUrl + 'v1/' + url, data);
  }
}
