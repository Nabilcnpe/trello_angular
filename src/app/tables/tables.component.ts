import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  tableName =  "";
  tables = [];

  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {
    if (this.tableName.length > 0)
      this.tables.push(this.tableName)
      this.tableName = "";
  }

}
