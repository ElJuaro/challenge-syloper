import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMovieComponent, CardsComponent } from './shared/components';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movie/now/playing',
    pathMatch: 'full'  
  },
  {
    path: 'movie/now/playing', component: HomeComponent
  },
  {
    path: 'movie/:id', component: CardMovieComponent,
  }
 /*  {
    path: 'movie',
    loadChildren:() => import('./lazyload/models/lazy-loaded.module').then(m => m.LazyLoadModule)
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
