import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent {

  htmlContent = '';

  setupConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '17rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
  };

  qualityImg: string[] = [];

  constructor(private http: HttpClient, private renderer: Renderer2, private el: ElementRef,
    private projectService: ProjectService
  ) {}

  ngAfterViewChecked(): void {
    const viewContent = this.el.nativeElement.querySelector('.inner');
    if (viewContent) {
      const images = viewContent.querySelectorAll('img');
      images.forEach((img: HTMLElement) => {
        this.renderer.setStyle(img, 'max-width', '100%');
        this.renderer.setStyle(img, 'max-height', '300px');
        this.renderer.setStyle(img, 'object-fit', 'contain');
        this.renderer.setStyle(img, 'display', 'block');
        this.renderer.setStyle(img, 'margin', '0 auto');
      });
    }
  }


  ngOnInit(): void {
    this.http.get<string[]>('assets/images.json').subscribe((data) => {
      this.qualityImg = data.map((filename) => `assets/${filename}`);
    });
  }

  onSave() {
    if(this.htmlContent) {
      this.projectService.createProjects(this.htmlContent).subscribe((res: any) => {
        if(res) {
          console.log('create: ', res);
        }
      })
    }
  }
}
