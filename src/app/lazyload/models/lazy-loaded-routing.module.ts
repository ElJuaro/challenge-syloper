import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardMovieComponent } from 'src/app/shared/components';

const routes: Routes = [
  {
        path: '',
        children: [
            {path: 'movie', component: CardMovieComponent}
        ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadRoutingModule { }
