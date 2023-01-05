import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {path:'home', component: ArticlesComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', component: ArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
