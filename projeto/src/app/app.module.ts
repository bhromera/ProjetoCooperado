import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissaoCooperadoComponent } from './pages/cadastros/admissao-cooperado/admissao-cooperado.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    AdmissaoCooperadoComponent
  ],
  imports: [
    FormsModule,
    NgxMaskDirective, NgxMaskPipe,
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
