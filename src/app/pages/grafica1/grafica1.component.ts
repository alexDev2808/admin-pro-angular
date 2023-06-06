import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels: string[] = ['Equipo Medico', 'Equipo Sin Utilizar', 'Equipo Desechable' ];
  public data = [150, 150, 100];

}
