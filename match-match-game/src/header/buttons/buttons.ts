import { Header } from '../header';
import './buttons.scss';

export class HeaderButton extends Header {
  private button: HeaderButton[] = [];

  constructor() {
    super('a', ['button__register']);
    this.element.setAttribute('href', '#iw-modal');
    this.element.textContent = 'Register new player';
    this.element.setAttribute('id', 'btnReg');
  }

  async addButton(): Promise<void> {
    this.button.forEach((buttono) => this.element.appendChild(buttono.element));
  }
}
