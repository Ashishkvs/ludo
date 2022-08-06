import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LudoComponent } from './ludo/ludo.component';
import { MatrixComponent } from './matrix/matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    LudoComponent,
    MatrixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
