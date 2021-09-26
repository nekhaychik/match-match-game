import { Header } from '../header';
import './buttons.scss';

export class HeaderButtonStartGame extends Header {
  private button: HeaderButtonStartGame[] = [];

  constructor() {
    super('a', ['button__start-game']);
    this.element.textContent = 'START GAME';
    this.element.setAttribute('id', 'btnStartGame');
    this.element.setAttribute('href', '#new-game');
  }

  async addButton(): Promise<void> {
    this.button.forEach((buttono) => this.element.appendChild(buttono.element));
  }
}
