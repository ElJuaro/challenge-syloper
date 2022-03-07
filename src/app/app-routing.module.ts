import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMovieComponent, CardsComponent } from './shared/components';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movie',
    pathMatch: 'full'  
  },
  {
     path: 'movie',
     loadChildren:() => import('./home/models/home.module').then(m => m.HomeModule)
  },
  /* {
    path: 'movie', component: HomeComponent
  },
  {
    path: 'movie/:id', component: CardMovieComponent,
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
