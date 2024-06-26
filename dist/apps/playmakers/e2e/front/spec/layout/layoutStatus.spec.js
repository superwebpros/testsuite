"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("loads", async ({ page }) => {
        await page.goto(frontUrl_1.default, { waitUntil: "networkidle" });
        await (0, test_1.expect)(page.getByTestId("infoBanner")).toBeVisible();
        await (0, test_1.expect)(page.getByTestId("nav")).toBeVisible();
        await (0, test_1.expect)(page.getByTestId("preFooter")).toBeVisible();
        await (0, test_1.expect)(page.getByTestId("flowbite-footer")).toBeVisible();
        await page.waitForLoadState("networkidle");
        await page.evaluate(() => window.scrollTo(0, 5000));
        await page.waitForLoadState("networkidle");
        await page.close();
    });
}
exports.default = createTest;
