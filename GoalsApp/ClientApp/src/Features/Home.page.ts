import { Page } from 'playwright';
import { LayoutPage } from './Layout.page';

export class HomePage extends LayoutPage {
  constructor(page: Page) {
    super(page);
  }

  navigateHere = async () => {
    await this.page.goto('https://localhost:5001');
  };
}
