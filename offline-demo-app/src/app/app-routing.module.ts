import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseSearchComponent } from './case-search/case-search.component';
import { CaseOverviewComponent } from './case-overview/case-overview.component';

const routes: Routes = [
  {
    path: "search",
    component: CaseSearchComponent
  },
  {
    path: "overview/:id",
    component: CaseOverviewComponent
  },
  {
    path: '',
    redirectTo: "/search",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
