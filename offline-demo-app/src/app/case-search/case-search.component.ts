import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router';

import { CaseDetails } from '../case-details'

@Component({
  selector: 'app-case-search',
  templateUrl: './case-search.component.html',
  styleUrls: ['./case-search.component.css']
})
export class CaseSearchComponent implements OnInit {

   public case: CaseDetails;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.case = new CaseDetails();
  }

  goToCaseDetails(id: string) {
    this.router.navigate(["overview", id]);
  }

}
