import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  projects: any;

  constructor(private projectService: ProjectService) {}

  
  array = [
    { title: 'Gallery', imageUrl: '../../../../assets/LittleBook.jpg'}
  ]

  ngOnInit(): void {
      this.projectService.getAllProjects().subscribe((res: any) => {
        if(res) {
          console.log('get project', res);
          this.projects = res;
        }
      })
  }
}
