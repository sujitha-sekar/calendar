import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

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
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
   
  };

  // demoMessage: string = '';

  // dragStart(event: DragEvent) {
  //   if (event.target instanceof HTMLElement) {
  //     event.dataTransfer?.setData("text", event.target.id);
  //   }
  // }

  // dragging(event: DragEvent) {
  //   this.demoMessage = "The p element is being dragged";
  // }

  // allowDrop(event: DragEvent) {
  //   event.preventDefault();
  // }

  // drop(event: DragEvent) {
  //   event.preventDefault();
    
  //   const data = event.dataTransfer?.getData("text");
  
  //   if (data) {  // Check if data is not undefined
  //     const draggedElement = document.getElementById(data);
  
  //     if (draggedElement && event.target instanceof HTMLElement) {
  //       event.target.appendChild(draggedElement);
  //     }
  
  //     this.demoMessage = "The p element was dropped";
  //   } else {
  //     console.error('No data found in the drag event.');
  //   }
  // }
  
}
