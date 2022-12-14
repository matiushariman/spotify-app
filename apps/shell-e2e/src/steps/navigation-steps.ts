import { Page, expect } from '@playwright/test';

import { ShellPage } from '../pages/shell-page';

export class NavigationSteps {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isNavigationAvailable() {
    const shellPage = new ShellPage(this.page);

    await expect(shellPage.navigation).toBeVisible();
  }
}
