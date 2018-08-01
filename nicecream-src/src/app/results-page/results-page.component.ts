import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/list.model';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  public lists: Array<List>;
  constructor(private listServ: ListService) {

  }
  ngOnInit() {
    this.listServ.getAllLists().subscribe((res) => {
      this.lists = res;
    });
  }
}
