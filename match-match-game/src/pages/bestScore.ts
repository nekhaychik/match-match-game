import { BestScore } from '../components/scoreP/BestScore';

export class BestScorePage {
  private readonly score: BestScore;

  constructor(private readonly rootElement: HTMLElement) {
    this.score = new BestScore();
    this.rootElement.appendChild(this.score.element);
  }

  async start(): Promise<void> {
    this.score.addScorePage();
    this.score.setID();
  }
}
