import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMovieComponent } from 'src/app/shared/components';
import { HomeComponent } from '../home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
      path:':id',
    component: CardMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
