import playwright, { Browser, Page } from 'playwright';
import { Context } from 'vm';
import { AddGoalPage } from '../Features/AddGoal.page';
import { GoalsPage } from '../Features/Goals.page';
import { HomePage } from '../Features/Home.page';

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
    const addGoalPage = new AddGoalPage(page);
    await addGoalPage.navigateHere();
    await page.screenshot({ path: `./src/E2E/addGoal.jpg` });
    await addGoalPage.verifyPage();
  });

  it('Adds the goal', async () => {
    const newGoalName = new Date().toISOString().substring(0, 20);

    const homePage = new HomePage(page);
    await homePage.navigateHere();
    await page.screenshot({ path: `./src/E2E/homepage.jpg` });
    await homePage.clickAddGoalTab();

    const addGoalPage = new AddGoalPage(page);
    await addGoalPage.fillNameField(newGoalName);
    await page.screenshot({ path: `./src/E2E/filledAddGoal.jpg` });
    await addGoalPage.submitForm();
    await addGoalPage.clickGoalsTab();

    const goalsPage = new GoalsPage(page);
    await goalsPage.waitForLoad();
    await goalsPage.assertGoalExists(newGoalName);
  });
});
