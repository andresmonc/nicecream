import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import List from '../models/list.model';
@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  private newList :List;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getList();
  }
  getList(){
    this.listService.getList().subscribe(l => this.newList = l)
  }
}
