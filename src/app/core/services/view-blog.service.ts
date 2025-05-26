import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewBlogComponent } from '../components/view-blog/view-blog.component';

@Injectable({
  providedIn: 'root'
})
export class ViewBlogService {
  constructor(private matDialog: MatDialog) { }
  /**
   * Opens a confirmation dialog with a specified message.
   * @param message The message to be displayed in the confirmation dialog.
   * @returns A reference to the dialog instance, which can be used to subscribe to the dialog's close event.
   */
  openBlogDialog(blogDetails: any) {
    const dialogRef = this.matDialog.open(ViewBlogComponent, {
      data: blogDetails,
      autoFocus: false
    });
    return dialogRef;
  }
}
