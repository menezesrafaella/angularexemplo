import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

interface iItem {
  label: string;
  route: string;
  ativo: boolean;
}


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {



  itens: iItem[] = [
    {ativo: true,
    label: "Home",
    route: "/"
    },

    {
      ativo: false,
      label:"Sobre",
      route:"/sobre"

    },
    {
      ativo:false,
      label:"Contato",
      route: "/contato"
    }
  ]

  constructor() { 

  }

//fazendo com que todos os itens fiquem inativos

  destacar(item:iItem){
    this.itens.forEach(
    (item) => 
      {item.ativo = false}
    )

//ativo o item

  item.ativo = true;
    }

  ngOnInit(): void {
  }

}
