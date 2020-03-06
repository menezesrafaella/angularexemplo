import { Component, OnInit, ViewChild } from '@angular/core';
import {Grupo} from 'src/app/models/Grupo';
import { ListadeprodutosComponent } from '../listadeprodutos/listadeprodutos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('listaProd') lista: ListadeprodutosComponent

  constructor() { }

  listarGrupo(grupo:Grupo){
    this.lista.listarDoGrupo(grupo.cod);
    console.log(this.lista.produtosListados)
    
  }

  ngOnInit(): void {
  }

}
