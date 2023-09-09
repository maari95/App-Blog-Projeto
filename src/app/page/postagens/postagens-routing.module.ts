import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostagensPage } from './postagens.page';

const routes: Routes = [
  {
    path: '',
    component: PostagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostagensPageRoutingModule {}
