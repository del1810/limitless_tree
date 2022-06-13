import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: any

  constructor(public data: DataService) { }

  ngOnInit() {
    this.list = this.data.getTreeData();
  }

}
