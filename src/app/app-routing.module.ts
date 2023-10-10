import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/environments/auth.guard';

const routes: Routes = [
  {
    path: '',

    redirectTo: 'home',

    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./page/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'envio-post',
    loadChildren: () => import('./page/envio-post/envio-post.module').then( m => m.EnvioPostPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'sobre',
    loadChildren: () => import('./page/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },   
  {
    path: 'cadastro',
    loadChildren: () => import('./page/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./page/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'view-pub',
    loadChildren: () => import('./page/view-pub/view-pub.module').then( m => m.ViewPubPageModule)
  },


 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
