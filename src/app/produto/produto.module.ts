import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListagemComponent } from './listagem/listagem.component';



@NgModule({
  declarations: [
    CadastrarComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule { }
