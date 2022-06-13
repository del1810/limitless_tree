import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { DialogComponent } from './dialog/dialog.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { ListComponent } from './list/list.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { DataService } from './data.service';
import {MatMenuModule} from '@angular/material/menu';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ListComponent,
    TreeviewComponent,
    SubcategoryComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatTreeModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
