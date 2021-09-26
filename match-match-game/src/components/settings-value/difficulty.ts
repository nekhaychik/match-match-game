import { BaseComponent } from '../base/base-component';
import './settings-value.scss';

export class SettingDifficulty extends BaseComponent {
  private difficulty: SettingDifficulty[] = [];

  constructor() {
    super('div', ['difficulty']);
    this.element.innerHTML = `
      <p class="settings__title">
        Difficulty
      </p>
      <p class="settings__subtitle">
        select game type
      </p>
      <select name="menu" id="game-difficulty" size="1">
        <option id="4x4"value="4">4x4</option>
        <option id="6x6" value="6">6x6</option>
      </select>
  `;
  }

  async addDifficulty(): Promise<void> {
    this.difficulty.forEach((diff) => this.element.appendChild(diff.element));
  }
}
