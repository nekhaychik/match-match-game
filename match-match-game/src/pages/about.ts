import { AboutGame } from '../components/about game/about-game';

export class AboutPage {
  private readonly modalWindow: AboutGame;

  private readonly aboutGame: AboutGame;

  constructor(private readonly rootElement: HTMLElement) {
    this.modalWindow = new AboutGame();
    this.aboutGame = new AboutGame();
    this.rootElement.appendChild(this.aboutGame.element);
  }

  async start(): Promise<void> {
    this.aboutGame.addAboutGamePage();
    this.aboutGame.setID();
  }
}
