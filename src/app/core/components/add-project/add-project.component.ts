import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { AngularEditorConfig, UploadResponse } from '@kolkov/angular-editor';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent {

  constructor(private http: HttpClient, private renderer: Renderer2, private el: ElementRef,
    private projectService: ProjectService
  ) { }
  htmlContent = '';

  setupConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '17rem',
    minHeight: '5rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    upload: (file: File) => {
      const formData = new FormData();
      formData.append('image', file);
      return this.http.post<UploadResponse>('v1/image', formData, { observe: 'events' });
    },
    uploadWithCredentials: true,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  }

  qualityImg: string[] = [];


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
    if (this.htmlContent) {
      this.projectService.createProjects(this.htmlContent).subscribe((res: any) => {
        if (res) {
          console.log('create: ', res);
        }
      })
    }
  }
}
