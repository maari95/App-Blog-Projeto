import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvioPostPage } from './envio-post.page';

const routes: Routes = [
  {
    path: '',
    component: EnvioPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvioPostPageRoutingModule {}
