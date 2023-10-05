import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPubPage } from './view-pub.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPubPageRoutingModule {}
