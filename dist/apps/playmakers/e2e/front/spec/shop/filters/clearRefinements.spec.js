"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("appears when filter is selected", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.getByRole("button", { name: "Gender" }).click();
        await page.getByRole("button", { name: "Women" }).click();
        await (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).toBeVisible();
    });
    (0, test_1.test)("disappears when clic on it", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await page.getByRole("button", { name: "Gender" }).click();
        await page.getByRole("button", { name: "Women" }).click();
        await (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).toBeVisible();
        await page.getByRole("button", { name: "Clear refinements" }).click();
        await (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).not.toBeVisible();
    });
    (0, test_1.test)("disappears when filters is deselected", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await page.getByRole("button", { name: "Gender" }).click();
        await page.getByRole("button", { name: "Women" }).click();
        await (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).toBeVisible();
        await page.getByRole("button", { name: "Women" }).click();
        await (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).not.toBeVisible();
    });
}
exports.default = createTest;
