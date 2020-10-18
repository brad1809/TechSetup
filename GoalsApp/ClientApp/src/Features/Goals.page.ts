import { Page } from 'playwright';
import { LayoutPage } from './Layout.page';

export class GoalsPage extends LayoutPage {
  constructor(page: Page) {
    super(page);
  }

  navigateHere = async () => {
    await this.page.goto('https://localhost:5001/goals');
    await this.waitForLoad();
  };

  waitForLoad = async () => {
    await this.page.waitForResponse('**/api/goals');
  };

  assertGoalExists = async (goalName: string) => {
    const createdGoal = await this.page.$(`"${goalName}"`);
    expect(createdGoal).not.toBeNull();
  };
}
