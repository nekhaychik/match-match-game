import { BaseComponent } from '../base/base-component';
import './instr-cards.scss';

export class InstrCards extends BaseComponent {
  private instrCards: InstrCards[] = [];

  constructor() {
    super('div', ['instr']);
    this.element.innerHTML = `
      <div class="instr__title">
        How to play?
      </div>
      <div class="instr__p1">
        <p class="instr__text"><strong class="instr__num">1</strong>Register new player in game</p>
      </div>
      <div class="instr__p2">
        <p class="instr__text"><strong class="instr__num">2</strong>Configure your game settings</p>
      </div>
      <div class="instr__p3">
        <p class="instr__text"><strong class="instr__num">3</strong>Start you new game! 
          Remember card positions and match it before times up.</p>
      </div>
      <div class="instr__registr">
        <img src="./instr__registr.svg" alt="instruction for registration" class="instr__registr-img">
      </div>
      <div class="instr__game-settings">
        <img src="./instr__game-settings.svg" alt="Game Settings button" class="instr__game-settings-img">
      </div>
      <div class="instr__cards-field">
        <img src="./cards-field.svg" alt="Cards field" class="instr__cards-field-img">
      </div>
    `;
  }

  async addInstrCards(): Promise<void> {
    this.instrCards.forEach((card) => this.element.appendChild(card.element));
  }
}
