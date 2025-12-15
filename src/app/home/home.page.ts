import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';         
import { FormsModule } from '@angular/forms';            

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],                 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  currentStep = 1;
  answer = '';

  nextStep() {
    this.currentStep++;
  }

  checkAnswer() {
    if (this.answer === 'correct') {
      this.currentStep = 4;
    } else {
      alert('Dica: Ganhar tem motivo! Tenta de novo ⚡');
    }
  }

  restartMission() {
  this.currentStep = 1;
  this.answer = '';
}
}