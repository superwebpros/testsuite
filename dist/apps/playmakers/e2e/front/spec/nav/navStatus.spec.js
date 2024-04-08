"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("nav, search and account buttons are visible", async ({ page }) => {
        await page.goto(frontUrl_1.default);
        await (0, test_1.expect)(page.getByTestId("nav")).toBeVisible();
        await (0, test_1.expect)(page.getByTestId("favoriteButton")).toBeVisible();
    });
}
exports.default = createTest;
