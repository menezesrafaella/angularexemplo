import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms"
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {
  formProduto: FormGroup

  constructor() { }

  createForm(produto: Produto) {
    this.formProduto = new FormGroup({
      cod: new FormControl(produto.COD_PRODUTO),
      desc: new FormControl(produto.DESC),
      regAnvisa: new FormControl(produto.REG_ANVISA),
      controlado: new FormControl(produto.FL_CONTROLADO),
      codGrupo: new FormControl(produto.COD_GRUPO)

    });
  }

  ngOnInit(): void {
    this.createForm (new Produto())
  }


}
