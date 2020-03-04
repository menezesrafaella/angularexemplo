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
  constructor(private http:HttpService) {

    this.http.getProdutos().subscribe(
    (data) => {
      this.produtos = data
    }
    );
   }

  ngOnInit(): void {
  }

}
