import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input() produtosListados:Produto;

  constructor() { }

  ngOnInit(): void {
  }

}
