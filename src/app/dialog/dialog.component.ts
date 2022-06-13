import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public categoryName: string

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    // console.log(this.data)
    this.categoryName = this.data['name'];
  }

  onNoClick(response): void {
    let result = {
      status: 1,
      data: {}
    }

    if (response == 'Yes') {

      if (this.categoryName == '') {
        return;
      }
      result['status'] = 0

      this.data['name'] = this.categoryName;
      result['data'] = this.data

    }


    response == 'Yes' ? this.dialogRef.close(result) : this.dialogRef.close(result);
  }
}
