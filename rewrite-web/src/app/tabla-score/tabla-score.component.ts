import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-score',
  templateUrl: './tabla-score.component.html',
  styleUrls: ['./tabla-score.component.css']
})
export class TablaScoreComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() { }

  ngOnInit() {
  }

}
