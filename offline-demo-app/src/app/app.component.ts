
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Item } from './api.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'offline-demo-app';
    items: Item[] = [];
    constructor(private apiService: ApiService, private localStorage: LocalStorage) {
    }
    ngOnInit() {
        //this.fetchData();
    }
    fetchData() {
        console.log("Trying to get data from online API!!!");
        this.apiService.fetch().subscribe((data: Item[]) => {
            console.log("Data retrieved from online API!!!");
            console.log(data);
            this.items = data;
            this.localStorage.setItem('data', data).subscribe(() => {
                console.log("Data saved into localstorage !!!");
             });
            
        }, (err) => {
            console.log("Error occured while fetching data online, so getting from localstorage.");
            console.log(err);
            this.localStorage.getItem('data').subscribe((data: Item[]) => {
                console.log("Data fetched from localstorage.");
                console.log(data);
                this.items = data;
            });
        });
    }
}
