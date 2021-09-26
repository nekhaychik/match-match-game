import { BaseComponent } from '../base/base-component';

export class BestPlayers extends BaseComponent {
  private players: BestPlayers[] = [];

  constructor() {
    super('div', ['best-players']);
    this.element.innerHTML = `
      <div class="player">
        
      </div>
    `;
  }

  async addBestPlayers(): Promise<void> {
    this.players.forEach((player) => this.element.appendChild(player.element));
  }
}
