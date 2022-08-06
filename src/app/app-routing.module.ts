import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LudoComponent } from './ludo/ludo.component';

const routes: Routes = [
  {path:'ludo', component: LudoComponent},
  {path:'matrix', component: LudoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
