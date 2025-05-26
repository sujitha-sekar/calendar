import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlogList } from '../../models/gallery.modle';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent{

  constructor(@Inject(MAT_DIALOG_DATA) public data: BlogList) {}

}
