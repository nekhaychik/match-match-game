import { Header } from '../header';
import './navigation.scss';

export class Navigation extends Header {
  private nav: Navigation[] = [];

  constructor() {
    super('div', ['nav__list']);
    this.element.innerHTML = `
      <ul class="nav">
        <a href="#about-page" class="nav__li-background">
          <div class="nav__about-game">
            ?
          </div>
          <p class="nav__li-text">About Game</p>
        </a>
        <a href="#best-score" class="nav__li-background">
          <div class="nav__best-score">
            <img src="./star.svg" alt="">
          </div>
          <p class="nav__li-text">Best Score</p>
        </a>
        <a href="#game-settings" class="nav__li-background">
          <div class="nav__game-settings">
            <img src="./settings.svg" alt="">
          </div>
          <p class="nav__li-text">Game Settings</p>
        </a> 
      </ul>
    `;
  }

  async addNav(): Promise<void> {
    this.nav.forEach((navo) => this.element.appendChild(navo.element));
  }
}
