import { Component } from '@angular/core';

@Component({
  selector: 'app-calculdora',
  templateUrl: './calculdora.component.html',
  styleUrls: ['./calculdora.component.css']
})
export class CalculdoraComponent {
    num1 :      number = 0;
    num2 :      number = 0;
    resultado : number = 0;
    operacao : string = "";

    calcular(){
      if(this.operacao == "+")
        this.resultado = this.num1 + this.num2;
      else if (this.operacao == "-")
        this.resultado = this.num1 - this.num2;
      else if (this.operacao == "*")
        this.resultado = this.num1 * this.num2;
      else
        this.resultado = this.num1 / this.num2;
    }
}
