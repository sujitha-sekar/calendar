import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { BlogList, GetAllBlogsResponse } from '../../models/gallery.modle';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  blogList: BlogList[] = [];
  subscriptionObject = new Subscription();

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.subscriptionObject.add(this.projectService.getAllBlogs().subscribe((res: GetAllBlogsResponse) => {
      if (res?.blogList?.length > 0) {
        this.blogList = res.blogList;
      }
    }));
  };

  ngOnDestroy(): void {
    if (this.subscriptionObject) this.subscriptionObject.unsubscribe();
  }
}
