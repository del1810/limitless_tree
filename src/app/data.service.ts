import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable()
export class DataService {

  public sampleData: any = [];

  constructor() { }

  getTreeData() {

    this.sampleData = [
      {
        name: 'Events',
        id: uuid(),
        children: []
      },
      {
        name: 'Health Care',
        id: uuid(),
        children: []
      },
      {
        name: 'Shopping',
        id: uuid(),
        children: []
      },
      {
        name: 'Business',
        id: uuid(),
        children: []
      }]

    if (localStorage.getItem('treedata')) {
      this.sampleData = JSON.parse(localStorage.getItem('treedata'));
    } else {
      localStorage.setItem('treedata', JSON.stringify(this.sampleData))
    }

    return this.sampleData
  }

  reassignLocalStorage(data) {
    localStorage.removeItem('treedata');
    localStorage.setItem('treedata', JSON.stringify(data));
    this.sampleData = JSON.parse(localStorage.getItem('treedata'));
  }

}