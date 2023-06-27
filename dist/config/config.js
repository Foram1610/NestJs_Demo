"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
require("reflect-metadata");
const path = process.env.NODE_ENV === "test" ? ".env.test" : ".env";
const { error, parsed } = (0, dotenv_1.config)({ path });
if (error) {
    throw error;
}
const config = parsed;
exports.default = config;
//# sourceMappingURL=config.js.map