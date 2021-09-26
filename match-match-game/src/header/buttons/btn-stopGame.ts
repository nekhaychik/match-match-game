import { Header } from '../header';
import './buttons.scss';

export class HeaderButtonStopGame extends Header {
  private button: HeaderButtonStopGame[] = [];

  constructor() {
    super('button', ['button__stop-game']);
    this.element.textContent = 'STOP GAME';
    this.element.setAttribute('id', 'btnStopGame');
  }

  async addButton(): Promise<void> {
    this.button.forEach((buttono) => this.element.appendChild(buttono.element));
  }
}
