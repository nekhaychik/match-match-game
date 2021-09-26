import { BaseComponent } from '../base/base-component';
import { SettingsField } from '../settings-field/settings-field';

export class GameSettings extends BaseComponent {
  private readonly settingsField: SettingsField;

  constructor() {
    super();
    this.settingsField = new SettingsField();
    this.element.appendChild(this.settingsField.element);
  }

  async addGameSettingsPage(): Promise<void> {
    this.settingsField.addSettingsField();
  }
}
