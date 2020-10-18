import { assert } from 'console';
import playwright, { Browser, Page } from 'playwright';
import { Context } from 'vm';

describe('Adding a goal', () => {
  let browser: Browser;
  let context: Context;
  let page: Page;

  beforeAll(async () => {
    jest.setTimeout(35 * 1000);
    browser = await playwright['chromium'].launch();
    context = await browser.newContext();
    page = await context.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('Loads the add goal page', async () => {
    await page.goto('https://localhost:5001/addgoal');
    await page.screenshot({ path: `./src/E2E/addGoal.jpg` });
    await page.$('"Add Goals"');
  });

  it('Adds the goal', async () => {
    const newGoalName = new Date().toISOString().substring(0, 20);

    await page.goto('https://localhost:5001');
    await page.screenshot({ path: `./src/E2E/homepage.jpg` });
    await page.click('"Add Goal!"');

    await page.fill('[name=name]', newGoalName);
    await page.screenshot({ path: `./src/E2E/filledAddGoal.jpg` });

    await Promise.all([page.waitForResponse('**/api/goals'), page.click('button[type=submit]')]);

    await Promise.all([page.waitForResponse('**/api/goals'), page.click('"Goals"')]);

    const createdGoal = await page.$(`"${newGoalName}"`);
    expect(createdGoal).not.toBeNull();
  });
});
