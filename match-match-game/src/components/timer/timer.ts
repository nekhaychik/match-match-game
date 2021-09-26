import { BaseComponent } from '../base/base-component';
import './timer.scss';

export class Timer extends BaseComponent {
  constructor() {
    super('div', ['timer-wrap']);
    this.element.innerHTML = `
      <button class="timer" id="display">00:00</button>
    `;
  }
}
