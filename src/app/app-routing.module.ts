import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';


const routes: Routes = [

  {
    path:"",
    redirectTo: "home",
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"sobre",
    component:SobreComponent
  },
  {
    path: "contato",
    component:ContatoComponent
  },
  {
    path: "novoproduto",
    component:NovoProdutoComponent
  },
  {
    path:"**",
    redirectTo: "home",
    pathMatch: "full"  //PRECISA SER A ULTIMA ROTA PARA CASO O USUARIO DIGITAR UMA ROTA DIFERENTE DO QUE JA EXISTE.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
