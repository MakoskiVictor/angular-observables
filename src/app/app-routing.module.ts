import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent, HomeComponent } from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'selected', component: FavouritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
