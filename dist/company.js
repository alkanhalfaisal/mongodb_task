"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companySchema = void 0;
const mongoose_1 = require("mongoose");
exports.companySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
});
const company = (0, mongoose_1.model)("company", exports.companySchema);
exports.default = company;
//# sourceMappingURL=company.js.map