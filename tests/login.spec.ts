import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('user can login successfully', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
});