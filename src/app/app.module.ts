import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LudoComponent } from './ludo/ludo.component';
import { MatrixComponent } from './matrix/matrix.component';
import { MatrixSampleComponent } from './matrix-sample/matrix-sample.component';
import { LudoBoxComponent } from './ludo-box/ludo-box.component';
import { FlexSampleComponent } from './flex-sample/flex-sample.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LudoComponent,
    MatrixComponent,
    MatrixSampleComponent,
    LudoBoxComponent,
    FlexSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
