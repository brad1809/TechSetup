import { Page } from 'playwright';
import { LayoutPage } from './Layout.page';

// I'm wondering if this should be where all the common fields are defined
// Things like the header for the add goal page.
// If defined in the .tsx file, I hit errors about jest not being able to load react from styled components or something
// But if we define it here then the problem would be the frontend needing to load from this test file that references playwright
// I really don't want a separate "common fields" file they can both reference
// So maybe I just have to work out why jest was complaining

export class AddGoalPage extends LayoutPage {
  constructor(page: Page) {
    super(page);
  }

  navigateHere = async () => {
    await this.page.goto('https://localhost:5001/addgoal');
  };

  verifyPage = async () => {
    expect(await this.page.$(`"Add Goal"`)).not.toBeNull();
  };

  fillNameField = async (value: string) => {
    await this.page.fill('[name=name]', value);
  };

  submitForm = async () => {
    await Promise.all([this.page.waitForResponse('**/api/goals'), this.page.click('button[type=submit]')]);
  };
}
