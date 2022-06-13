import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categoryName: string

  constructor(public dialogRef: MatDialogRef<CategoryComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    // console.log(this.data)
    this.categoryName = '';
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

      result.status = 0;
      this.data['name'] = this.categoryName
      result.data = this.data;
    }

    response == 'Yes' ? this.dialogRef.close(result) : this.dialogRef.close(result);
  }

}
