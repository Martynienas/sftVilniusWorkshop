const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  const duckLogo = await page.isVisible('#logo_homepage_link')
  
  expect(duckLogo).toBe(true);
});

test('test nr2', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  const duckLogo = await page.isVisible('#logo_homepage_link')
  
  expect(duckLogo).toBe(true);
});