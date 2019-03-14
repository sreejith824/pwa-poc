import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CaseDetails } from './case-details'

export interface Item {
    name: string;
    description: string;
    url: string;
    html: string;
    markdown: string;
}

@Injectable({
    providedIn: 'root'
})

export class CaseService {
    private dataURL: string = "http://localhost:3000/case/";
    constructor(private httpClient: HttpClient) { }
    fetch(id:string): Observable<CaseDetails> {
        return <Observable<CaseDetails>>this.httpClient.get(this.dataURL + id);
    }
}
