import { BaseComponent } from '../base/base-component';
import { InstrField } from '../instr-field/instr-field';
import { ModalWindowWrapper } from '../modal win wrap/mw-wrap';

export class AboutGame extends BaseComponent {
  private readonly instrField: InstrField;

  private readonly modWinWrap: ModalWindowWrapper;

  constructor() {
    super();
    this.modWinWrap = new ModalWindowWrapper();
    this.element.appendChild(this.modWinWrap.element);
    this.instrField = new InstrField();
    this.element.appendChild(this.instrField.element);
  }

  async addAboutGamePage(): Promise<void> {
    this.instrField.addCards();
  }

  async addModalWindow(): Promise<void> {
    this.modWinWrap.addForm();
  }
}
