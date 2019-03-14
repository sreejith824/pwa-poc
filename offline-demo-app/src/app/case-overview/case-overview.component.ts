import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from "@angular/router";

import { LocalStorage } from '@ngx-pwa/local-storage';
import { CaseService } from '../case.service'
import { CaseDetails } from '../case-details'

@Component({
  selector: 'app-case-overview',
  templateUrl: './case-overview.component.html',
  styleUrls: ['./case-overview.component.css']
})
export class CaseOverviewComponent implements OnInit {

  caseDetails: CaseDetails;

  constructor(
    public route: ActivatedRoute,
    public localStorage: LocalStorage,
    public caseService: CaseService
  ) {

  }
  ngOnInit() {
    console.log('Inside overview');
    this.route.paramMap.forEach(x => {
      console.log(x["params"].id);
      this.getCaseDetails(x["params"].id);
    });
  }

  getCaseDetails(id: string) {
    console.log("Trying to get data from online API!!!");
    this.caseService.fetch(id).subscribe((data: CaseDetails) => {
      console.log("Data retrieved from online API!!!");
      console.log(data);
      this.caseDetails = data;
      this.localStorage.setItem(id, data).subscribe(() => {
        console.log("Data saved into localstorage !!!");
      });

    }, (err) => {
      console.log("Error occured while fetching data online, so getting from localstorage.");
      console.log(err);
      this.localStorage.getItem(id).subscribe((data: CaseDetails) => {
        console.log("Data fetched from localstorage.");
        console.log(data);
        this.caseDetails = data;
      });
    });
  }
}
