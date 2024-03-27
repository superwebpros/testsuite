"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.layout = exports.home = void 0;
var home_spec_1 = require("./home.spec");
Object.defineProperty(exports, "home", { enumerable: true, get: function () { return __importDefault(home_spec_1).default; } });
var layout_spec_1 = require("./layout.spec");
Object.defineProperty(exports, "layout", { enumerable: true, get: function () { return __importDefault(layout_spec_1).default; } });
__exportStar(require("./shop"), exports);
__exportStar(require("./nav"), exports);