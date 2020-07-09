import { AuthGuardService } from './app/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'inside',
    loadChildren: './pages/inside/inside.module#InsidePageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-song',
    loadChildren: () => import('./app/pages/add-song/add-song.module').then( m => m.AddSongPageModule)
  },
  {
    path: 'edit-song/:id',
    loadChildren: () => import('./app/pages/edit-song/edit-song.module').then( m => m.EditSongPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./app/pages/home/home.module').then( m => m.HomePageModule)
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


