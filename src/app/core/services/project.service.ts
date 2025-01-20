import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpRouting: HttpRoutingService) { }

  createProjects(data: any) {
    return this.httpRouting.postMethod('createProjects', data);
  }

  getAllProjects() {
    return this.httpRouting.getMethod('getAllProjects');
  }
}
