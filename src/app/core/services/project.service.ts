import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';
import { GetAllBlogsResponse } from '../models/gallery.modle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpRouting: HttpRoutingService) { }

  createProjects(data: any) {
    return this.httpRouting.postMethod('createProjects', data);
  }

  getAllBlogs(): Observable<GetAllBlogsResponse> {
    return this.httpRouting.getMethod<GetAllBlogsResponse>('getAllBlogs');
  }
}
