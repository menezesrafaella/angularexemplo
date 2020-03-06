export class Produto{
    constructor(public COD_PRODUTO?:number, 
        public _DESC?: string, public _REG_ANVISA?: string, 
        public _FL_CONTROLADO?: boolean, public _COD_GRUPO?: number) { //INTERROGAÇÃO SERVE PARA PREENCHIIMENTO OPTATIVO
    
    }
    public get DESC() : string {
        return this._DESC;
    }
    
    public get REG_ANVISA() : string {
        return this._REG_ANVISA;
    }

    public get FL_CONTROLADO() : boolean {
        return this.FL_CONTROLADO;
    }
    
    public get COD_GRUPO() : number {
        return this.COD_GRUPO;
    }
}