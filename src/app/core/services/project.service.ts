import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';
import { GetAllBlogsResponse } from '../models/gallery.modle';
import { Observable } from 'rxjs';
import { CreateBlogInput, CreateBlogResponse } from '../models/add-blog.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpRouting: HttpRoutingService) { }

  createBlog(data: CreateBlogInput): Observable<CreateBlogResponse> {
    return this.httpRouting.postMethod<CreateBlogResponse>('createBlog', data);
  }

  getAllBlogs(): Observable<GetAllBlogsResponse> {
    return this.httpRouting.getMethod<GetAllBlogsResponse>('getAllBlogs');
  }
}
