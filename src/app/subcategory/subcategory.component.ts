import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  public categoryName: string

  constructor(public dialogRef: MatDialogRef<SubcategoryComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

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

      this.data['Sub_Category']['name'] = this.categoryName;
      this.data.children ? '' : this.data['children'] = [];
      this.data['Sub_Category']['id'] = uuid();

      this.data.children.push(this.data['Sub_Category'])
      delete this.data['Sub_Category'];

      result.status = 0;
      result.data = this.data;
    }

    response == 'Yes' ? this.dialogRef.close(result) : this.dialogRef.close(result);
  }

}
