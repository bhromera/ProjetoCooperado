import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissaoCooperadoComponent } from './pages/cadastros/admissao-cooperado/admissao-cooperado.component';

const routes: Routes = [
  { path: '', redirectTo: 'admissao-cooperado', pathMatch: 'full' },
  { path: 'admissao-cooperado', component: AdmissaoCooperadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
