import {
  Component, Input, ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { CategoryComponent } from '../category/category.component';
import { DataService } from '../data.service';
import { DialogComponent } from '../dialog/dialog.component';
import { SubcategoryComponent } from '../subcategory/subcategory.component';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent {
  @Input() list = [];
  public opened = new Set();
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;
  subscription: any;

  constructor(public dialog: MatDialog, public dataservice: DataService) { }

  addedNewItem(item, stages) {
    // console.log(item)

    if (stages == 'edit')
      this.openDialog(item)

    if (stages == 'main_category') {
      this.openDialogCategory()
    }

    if (stages == 'act_deact') {
      (item['status'] == 0 || !item['status']) ? item['status'] = 1 : item['status'] = 0;
      console.log(this.dataservice.getTreeData(), this.list);
      this.dataservice.reassignLocalStorage(this.list);
    }

  }

  openDialog(category: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      disableClose: true,
      data: category ? category : { status: 0, name: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('Edit Category / Sub Category', result);
      if (result.status == 0) {
        console.log(this.dataservice.getTreeData(), this.list);
        this.dataservice.reassignLocalStorage(this.list);
      }

    });
  }

  openDialogCategory(): void {
    const dialogRef = this.dialog.open(CategoryComponent, {
      width: '250px',
      disableClose: true,
      data: { status: 0, name: '' }
    });

    dialogRef.afterClosed().subscribe(result => {

      // console.log('Category result', result);
      if (result.status == 0) {
        // console.log(result.data)
        // console.log(this.contextMenu.menuData.list)

        let formData = result.data;
        formData['id'] = uuid()

        this.contextMenu.menuData.list.push(formData);
        console.log(this.dataservice.getTreeData(), this.list);
        this.dataservice.reassignLocalStorage(this.list);
      }

    });
  }

  openDialogSubCategoryCreate(category: any): void {
    if (category) {
      category['Sub_Category'] = { status: 0, name: '' }
    }
    const dialogRef = this.dialog.open(SubcategoryComponent, {
      width: '250px',
      disableClose: true,
      data: category
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('Sub Category result', result);
      if (result.status == 0) {
        console.log(this.dataservice.getTreeData(), this.list);
        this.dataservice.reassignLocalStorage(this.list);
      }

    });
  }

  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(event: MouseEvent, item: any = {}, list: any = []) {
    // console.log(event, item, list)
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item, 'list': list };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
    // console.log(this.contextMenu.menuData)
  }

}
