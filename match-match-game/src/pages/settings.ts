import { GameSettings } from '../components/settingsP/GameSettings';

export class SettingsPage {
  private readonly gameSettings: GameSettings;

  constructor(private readonly rootElement: HTMLElement) {
    this.gameSettings = new GameSettings();
    this.rootElement.appendChild(this.gameSettings.element);
  }

  async start(): Promise<void> {
    this.gameSettings.addGameSettingsPage();
    this.gameSettings.setID();
  }
}
