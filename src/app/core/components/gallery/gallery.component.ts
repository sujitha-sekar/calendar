import { Component, OnInit} from '@angular/core';
import { BlogList } from '../../models/gallery.modle';
import { HttpClient } from '@angular/common/http';
import { ViewBlogService } from '../../services/view-blog.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  blogList: BlogList[] = [];
  constructor(private http: HttpClient,
    private viewBlogService: ViewBlogService
  ) { }

  ngOnInit(): void {
    this.http.get<BlogList[]>('assets/blogs.json').subscribe((data) => {
       this.blogList = data;
    });
  };

  
onNavigate(data: any): void {
  this.viewBlogService.openBlogDialog(data);
}

}
