import type { Page, Locator } from '@playwright/test';

export class ShellPage {
  private readonly page: Page;
  readonly navigation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigation = page.getByTestId('navigation');
  }
}
