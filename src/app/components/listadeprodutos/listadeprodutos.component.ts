import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-listadeprodutos',
  templateUrl: './listadeprodutos.component.html',
  styleUrls: ['./listadeprodutos.component.css']
})

export class ListadeprodutosComponent implements OnInit {

  public produtos: Produto[] = [];
  public produtosListados: Produto[] = [];
  constructor(private http:HttpService) {

    this.http.getProdutos().subscribe(
    (data) => {
      this.produtos = data
      this.produtosListados = data
    }
    );
   }


   listarDoGrupo(codGrupo: number){
     if (codGrupo == 0){
       return this.produtosListados = this.produtos
     }else{
     this.produtosListados = this.produtos.filter( produtos => {
       return produtos._COD_GRUPO == codGrupo;
     })
   }

  }
  ngOnInit(): void {
  }

}
