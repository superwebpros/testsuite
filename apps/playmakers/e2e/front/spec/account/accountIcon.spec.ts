import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("color change on login and logout", async ({ page }) => {
    await page.goto(url);
    await expect(page.getByTestId("nav")).toBeVisible();
    await page.getByTestId("accountButtonInactive").click();
    await page.waitForLoadState("domcontentloaded");
    await page.getByPlaceholder("Email address").fill("leandrosavat@gmail.com");
    await page.getByPlaceholder("Password").fill("Lea12345");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.waitForTimeout(1500);
    await expect(page.getByRole("button", { name: "Sign out" })).toBeVisible();
    await expect(page.getByTestId("accountButtonActive")).toBeVisible();
    await page.waitForTimeout(1500);
    await page.getByRole("button", { name: "Sign out" }).click();
    await page.waitForTimeout(1500);
    await expect(page.getByTestId("accountButtonInactive")).toBeVisible();
  });
}
