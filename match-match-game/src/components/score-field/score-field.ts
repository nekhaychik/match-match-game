import { BaseComponent } from '../base/base-component';
import { BestPlayers } from '../score-players/score-players';
import './score-field.scss';

export class ScoreField extends BaseComponent {
  private readonly players: BestPlayers;

  constructor() {
    super('div', ['score-field']);
    this.element.innerHTML = `
      <h2 class="best-players__title">
        Best Players
      </h2>
    `;
    this.players = new BestPlayers();
    this.element.appendChild(this.players.element);
  }

  addScoreField(): void {
    this.players.addBestPlayers();
  }
}
