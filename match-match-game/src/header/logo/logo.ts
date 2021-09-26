import { Header } from '../header';
import './logo.scss';

export class Logo extends Header {
  private logo: Logo[] = [];

  constructor() {
    super('div', ['logo']);
    this.element.innerHTML = `
      <p class="logo__top">MATCH</p>
      <p class="logo__bottom">MATCH</p>
    `;
  }

  async addLogo(): Promise<void> {
    this.logo.forEach((logoo) => this.element.appendChild(logoo.element));
  }
}
