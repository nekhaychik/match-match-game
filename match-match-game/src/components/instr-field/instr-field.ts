import { BaseComponent } from '../base/base-component';
import { InstrCards } from '../instr cards/instr-cards';

export class InstrField extends BaseComponent {
  private readonly cards: InstrCards;

  constructor() {
    super('div', ['about-game']);
    this.cards = new InstrCards();
    this.element.appendChild(this.cards.element);
  }

  addCards(): void {
    this.cards.addInstrCards();
  }
}
