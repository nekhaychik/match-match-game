import { BaseComponent } from '../base/base-component';
import './settings-value.scss';

export class CardsType extends BaseComponent {
  private cardsType: CardsType[] = [];

  constructor() {
    super('div', ['game-cards']);
    this.element.innerHTML = `
      <p class="settings__title">
        Game cards
      </p>
      <p class="settings__subtitle">
        select game type
      </p>
      <select name="menu" id="cards-type" size="1">
        <option value="animals">Animals</option>
        <option selected value="nature">Nature</option>
      </select>
      </br>
      <button id="apply" class="btn__apply">Apply selected option</button>
    `;
  }

  async addCardsType(): Promise<void> {
    this.cardsType.forEach((type) => this.element.appendChild(type.element));
  }
}
