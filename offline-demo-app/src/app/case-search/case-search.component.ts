import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { CaseDetails } from '../case-details'
import { Case } from '../case'
import { LocalStorage } from '@ngx-pwa/local-storage';
import { CaseService } from '../case.service'

@Component({
  selector: 'app-caseDetails-search',
  templateUrl: './case-search.component.html',
  styleUrls: ['./case-search.component.css']
})
export class CaseSearchComponent implements OnInit {

   public caseDetails: CaseDetails;
   public case: Case;
   private userId: string;
   private caseErrorMessage: string;
   values = '';
   
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public localStorage: LocalStorage,
    public caseService: CaseService
  ) {}

  ngOnInit() {
    this.caseDetails = new CaseDetails();
    this.case = new Case();
    this.caseDetails.case = this.case;
    console.log('Inside search');
    this.route.paramMap.forEach(x => {
      console.log(x["params"].userId);
      this.caseDetails.userId = (x["params"].userId);
    });
  }
  
  getCaseDetails(id: string) {
      console.log('Inside goToCaseDetails : caseDetails id : ' + id + " userid : " + this.caseDetails.userId);
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
          if(data == null) {
              this.caseErrorMessage = "Case description does not exists, please add!";
          } else {
              console.log(data);
              this.caseDetails = data;   
          }
        }, (err) => {
            this.caseErrorMessage = "Case description does not exists, please add!";
        });
      });
    }
  
  saveCaseDescription() {
      console.log("Save caseDetails description for caseDetails : " + this.caseDetails.id + " for userid : " + this.caseDetails.userId);
      console.log("Save caseDetails description for caseDetails : " + this.caseDetails.case.caseDescription);
      this.localStorage.setItem(this.caseDetails.id, this.caseDetails).subscribe(() => {
          console.log("Data saved into localstorage !!!");
        });
    }
  
  onKey(data){
      console.log("Value",data.target.value)
      this.caseDetails.case.caseDescription =  data.target.value;
      console.log("Save caseDetails description for caseDetails : " + this.caseDetails.id + " for userid : " + this.caseDetails.userId);
      console.log("Save caseDetails description for caseDetails : " + this.caseDetails.case.caseDescription);
      this.localStorage.setItem(this.caseDetails.id, this.caseDetails).subscribe(() => {
          console.log("Data saved into localstorage !!!");
        });
   }
  


}
