import { BaseComponent } from '../base/base-component';
import { ScoreField } from '../score-field/score-field';

export class BestScore extends BaseComponent {
  private readonly scoreField: ScoreField;

  constructor() {
    super();
    this.scoreField = new ScoreField();
    this.element.appendChild(this.scoreField.element);
  }

  async addScorePage(): Promise<void> {
    this.scoreField.addScoreField();
  }
}
