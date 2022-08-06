import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexSampleComponent } from './flex-sample/flex-sample.component';
import { LudoComponent } from './ludo/ludo.component';
import { MatrixSampleComponent } from './matrix-sample/matrix-sample.component';
import { MatrixComponent } from './matrix/matrix.component';

const routes: Routes = [
  {path:'ludo', component: LudoComponent},
  {path:'matrix', component: MatrixComponent},
  {path:'flex', component: FlexSampleComponent},
  {path:'', component: MatrixSampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
