import { Page } from 'playwright';

export class LayoutPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  clickHomeTab = async () => {
    await this.page.click('"Home"');
  };

  clickAddGoalTab = async () => {
    await this.page.click('"Add Goal!"');
    // I'd like to return a new AddGoalPage here, but I think that'd be a circular dependency
  };

  clickGoalsTab = async () => {
    await this.page.click('"Goals"');
  };
}
