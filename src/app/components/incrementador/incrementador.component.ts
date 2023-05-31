import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input() progreso : number = 50;
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  progresoActual: number = 0;

  cambiarValor(valor: number) {

    if(this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;

    }

    if(this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);  
      return this.progreso = 0;

    }
    
    this.progresoActual = this.progreso + valor;
    this.valorSalida.emit(this.progresoActual);
    return this.progresoActual;
  }

}
