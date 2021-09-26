import { Game } from '../components/game/game';
import { ImageCategoryModel } from '../models/image-category-model';
import '../indexedDB';

export class NewGame {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
  }

  async start(index = 1): Promise<void> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[index];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
    this.game.setID();
  }
}
