import { test, expect } from '@playwright/test'

test.describe('Smoke Tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/')

    // Verify the page title contains REmail
    await expect(page).toHaveTitle(/REmail|Direct Mail/)

    // Verify main content is visible
    await expect(page.locator('main')).toBeVisible()
  })

  test('navigation links are present', async ({ page }) => {
    await page.goto('/')

    // Check that navigation exists
    const nav = page.locator('nav, header')
    await expect(nav).toBeVisible()
  })
})
