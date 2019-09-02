import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseSearchComponent } from './case-search/case-search.component';
import { CaseOverviewComponent } from './case-overview/case-overview.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

    {
        path: "search/:userId",
        component: CaseSearchComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "overview/:id",
        component: CaseOverviewComponent
    },
    {
        path: '',
        redirectTo: "/login",
        pathMatch: 'full'
    }
];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )
export class AppRoutingModule { }
