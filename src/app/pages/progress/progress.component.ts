import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progreso1: number = 20;
  progreso2: number = 50;

  getProgreso1() {
    return `${this.progreso1}%`
  }

  getProgreso2() {
    return `${this.progreso2}%`
  }

}
