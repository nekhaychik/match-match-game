import { BaseComponent } from '../base/base-component';
import { CardsType } from '../settings-value/cardsType';
import { SettingDifficulty } from '../settings-value/difficulty';
import './settings-field.scss';

export class SettingsField extends BaseComponent {
  private readonly difficulty: SettingDifficulty;

  private readonly cardsType: CardsType;

  constructor() {
    super('div', ['settings-field']);
    this.difficulty = new SettingDifficulty();
    this.cardsType = new CardsType();
    this.element.appendChild(this.difficulty.element);
    this.element.appendChild(this.cardsType.element);
  }

  addSettingsField(): void {
    this.difficulty.addDifficulty();
    this.cardsType.addCardsType();
  }
}
