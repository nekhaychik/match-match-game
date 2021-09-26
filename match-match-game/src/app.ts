import { Head } from './header/head/head';
import { AboutPage } from './pages/about';
import { NewGame } from './pages/newGame';
import { SettingsPage } from './pages/settings';
import { BestScorePage } from './pages/bestScore';
import './indexedDB';

export const enum PageIds {
  AboutPageID = 'about-page',
  GamePageID = 'new-game',
  SettingsPageID = 'game-settings',
  BestScorePageID = 'best-score',
}

export class App {
  private readonly head: Head;

  private static defaultPageId = 'current-page';

  private static elapsedTime = 0;

  private static timerInterval: NodeJS.Timeout;

  constructor(private readonly rootElement: HTMLElement) {
    this.head = new Head();
    this.rootElement.appendChild(this.head.element);
  }

  static deletePage(appElement: HTMLElement | null, idPage: string): void {
    if (!appElement) throw Error('App root element not found');
    const currentPageHTML = document.querySelector(`#${this.defaultPageId}`);

    if (currentPageHTML && idPage !== 'iw-modal' && idPage !== 'close') {
      currentPageHTML.remove();
    }
  }

  static setTypeOfGame(el: HTMLElement, idPage: string): void {
    let gameType: number;
    let page: NewGame | null = null;
    const btnTest = <HTMLButtonElement>document.getElementById('apply');
    btnTest.addEventListener('click', () => {
      const type = <HTMLSelectElement>document.getElementById('cards-type');
      const diffic = <HTMLSelectElement>document.getElementById('game-difficulty');
      const typeValue = type.options[type.selectedIndex].value;
      const difficValue = diffic.options[diffic.selectedIndex].value;

      if (difficValue === '6' && typeValue === 'nature') gameType = 3;
      else if (difficValue === '6' && typeValue === 'animals') gameType = 2;
      else if (difficValue === '4' && typeValue === 'nature') gameType = 1;
      else gameType = 0;

      this.deletePage(el, idPage);

      page = new NewGame(el);
      page.start(gameType);

      this.resetTime();
      const playButton = <HTMLElement>document.getElementById('btnStartGame');
      playButton.style.display = 'block';
      const pauseButton = <HTMLElement>document.getElementById('btnStopGame');
      pauseButton.style.display = 'none';
    });
  }

  static timeToString(time: number): string {
    const diffInHrs = time / 3600000;
    const hh = Math.floor(diffInHrs);

    const diffInMin = (diffInHrs - hh) * 60;
    const mm = Math.floor(diffInMin);

    const diffInSec = (diffInMin - mm) * 60;
    const ss = Math.floor(diffInSec);

    const formattedMM = mm.toString().padStart(2, '0');
    const formattedSS = ss.toString().padStart(2, '0');

    return `${formattedMM}:${formattedSS}`;
  }

  static printTime(txt: string): void {
    const clock = <HTMLElement>document.getElementById('display');
    clock.textContent = txt;
  }

  static startTime(): void {
    const startTime = Date.now() - App.elapsedTime;
    this.timerInterval = setInterval(() => {
      App.elapsedTime = Date.now() - startTime;
      App.printTime(App.timeToString(App.elapsedTime));
    }, 10);

    const playButton = <HTMLElement>document.getElementById('btnStartGame');
    playButton.style.display = 'none';
    const pauseButton = <HTMLElement>document.getElementById('btnStopGame');
    pauseButton.style.display = 'block';
  }

  static pauseTime(): void {
    clearInterval(App.timerInterval);
    <HTMLElement>document.getElementById('display');
    // console.log(clock.textContent);

    const playButton = <HTMLElement>document.getElementById('btnStartGame');
    playButton.style.display = 'block';
    const pauseButton = <HTMLElement>document.getElementById('btnStopGame');
    pauseButton.style.display = 'none';
  }

  static resetTime(): void {
    clearInterval(App.timerInterval);
    App.printTime('00:00');
    App.elapsedTime = 0;
  }

  static setTimerForGame(): void {
    // console.log('в обработчик заходит уже хорошо ......');
    const playButton = <HTMLElement>document.getElementById('btnStartGame');
    const pauseButton = <HTMLElement>document.getElementById('btnStopGame');

    playButton.addEventListener('click', App.startTime);
    pauseButton.addEventListener('click', App.pauseTime);
  }

  static formValidation(): void {
    const nameStyle = <HTMLInputElement>document.getElementById('First_Name');
    const surnameStyle = <HTMLInputElement>document.getElementById('Last_Name');
    const emailInput = <HTMLInputElement>document.getElementById('E-mail');

    const btnSubmit = <HTMLInputElement>document.getElementById('addUser');
    btnSubmit.onclick = function validation() {
      if (App.allLetter(nameStyle, 'name')) {
        if (App.allLetter(surnameStyle, 'surname')) {
          if (App.ValidateEmail()) {
            const addUserOKBTN = <HTMLElement>document.getElementById('addUserOK');
            addUserOKBTN.style.display = 'block';
            const addUserValidationBTN = <HTMLElement>document.getElementById('addUser');
            addUserValidationBTN.style.display = 'none';
            const cancleBtn = <HTMLElement>document.getElementById('cancle');
            cancleBtn.style.display = 'none';
            return true;
          } return false;
        } return false;
      } return false;
    };

    const btnCancle = <HTMLElement>document.getElementById('cancle');
    btnCancle.addEventListener('click', () => {
      nameStyle.value = '';
      surnameStyle.value = '';
      emailInput.value = '';
    });
  }

  static allLetter(nameStyle: HTMLInputElement, name: string): boolean {
    const textName = <HTMLElement>document.getElementById(`${name}Message`);
    if (nameStyle.value.length === 0 || nameStyle.value.length > 30) {
      nameStyle.style.border = '1px solid red';
      textName.textContent = `${name} should not be empty / length be between 1 to 30`;
      textName.style.color = 'red';
      return false;
    }
    const letters = /^[A-Za-zА-яа-я]+$/;
    if (nameStyle.value.match(letters)) {
      nameStyle.style.border = '1px solid green';
      textName.textContent = 'correct!';
      textName.style.color = 'green';
      return true;
    }
    nameStyle.style.border = '1px solid red';
    textName.textContent = `${name} must have alphabet characters only`;
    textName.style.color = 'red';
    nameStyle.focus();
    return false;
  }

  static ValidateEmail(): boolean {
    const emailInput = <HTMLInputElement>document.getElementById('E-mail');
    const textEmail = <HTMLElement>document.getElementById('emailMessage');
    const mailformat = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    if (emailInput.value.length === 0 || emailInput.value.length > 30) {
      emailInput.style.border = '1px solid red';
      textEmail.textContent = 'E-mail should not be empty / length should not be more than 30';
      textEmail.style.color = 'red';
      return false;
    }
    if (emailInput.value.match(mailformat)) {
      emailInput.style.border = '1px solid green';
      textEmail.textContent = 'correct!';
      textEmail.style.color = 'green';
      return true;
    }
    emailInput.style.border = '1px solid red';
    textEmail.textContent = 'You have entered an invalid email address!';
    textEmail.style.color = 'red';
    emailInput.focus();
    return false;
  }

  static renderNewPage(idPage: string): void {
    const btn = <HTMLElement>document.getElementById('btnStartGame');
    const appElement = document.getElementById('app');
    if (!appElement) throw Error('App root element not found');

    const gameSets = 0; // настройки игры по умолчанию

    App.deletePage(appElement, idPage);

    let page: AboutPage | NewGame | SettingsPage | BestScorePage | null = null;

    switch (idPage) {
      case PageIds.AboutPageID:
        page = new AboutPage(appElement);
        App.formValidation();
        break;
      case PageIds.GamePageID:
        btn.removeAttribute('href');
        page = new NewGame(appElement);
        App.setTimerForGame();
        break;
      case PageIds.SettingsPageID:
        page = new SettingsPage(appElement);
        App.setTypeOfGame(appElement, idPage);
        break;
      case PageIds.BestScorePageID:
        page = new BestScorePage(appElement);
        break;
      default:
        // console.log('error. page did not found');
        break;
    }

    if (page) {
      if (typeof (page) === typeof (NewGame)) {
        page.start(gameSets);
      }
      page.start();
    }
  }

  static enableRouteChange(): void {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      // console.log(hash);
      App.renderNewPage(hash);
    });
  }

  async start(): Promise<void> {
    this.head.addHeader();
    App.renderNewPage('about-page');
    // console.log('после сабмита');
    App.enableRouteChange();
  }
}
