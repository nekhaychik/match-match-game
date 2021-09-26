import { HeaderButtonStopGame } from '../buttons/btn-stopGame';
import { HeaderButtonStartGame } from '../buttons/btn-startGame';
import { HeaderButton } from '../buttons/buttons';
import { Header } from '../header';
import { Logo } from '../logo/logo';
import { Navigation } from '../navigation/navigation';
import './wrapper.scss';

export class HeaderWrapper extends Header {
  private readonly nav: Navigation;

  private readonly button: HeaderButton;

  private readonly buttonStopGame: HeaderButtonStopGame;

  private readonly buttonStartGame: HeaderButtonStartGame;

  private readonly logo: Logo;

  constructor() {
    super('div', ['header__wrapper']);
    this.nav = new Navigation();
    this.button = new HeaderButton();
    this.buttonStopGame = new HeaderButtonStopGame();
    this.buttonStartGame = new HeaderButtonStartGame();
    this.logo = new Logo();
    this.element.appendChild(this.logo.element);
    this.element.appendChild(this.nav.element);
    this.element.appendChild(this.button.element);
    this.element.appendChild(this.buttonStopGame.element);
    this.element.appendChild(this.buttonStartGame.element);
  }

  async addHeaderElements(): Promise<void> {
    this.logo.addLogo();
    this.nav.addNav();
    this.button.addButton();
    this.buttonStopGame.addButton();
    this.buttonStartGame.addButton();
  }
}
