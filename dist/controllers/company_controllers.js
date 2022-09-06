"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addcompany = exports.updateCompany = exports.deleteCompany = exports.getUser = exports.allCompanies = void 0;
const company_1 = __importDefault(require("./../company"));
let allCompanies = (req, res) => {
    let companies = company_1.default.find((err, companies) => {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(companies);
        }
    });
};
exports.allCompanies = allCompanies;
let getUser = (req, res) => {
    let company = company_1.default.findById(req.params.id, (err, company) => {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(company);
        }
    });
};
exports.getUser = getUser;
let deleteCompany = (req, res) => {
    let company = company_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send("Company Deleted");
        }
    });
};
exports.deleteCompany = deleteCompany;
let updateCompany = (req, res) => {
    console.log(req.body);
    let company = company_1.default.findByIdAndUpdate(req.params.id, req.body, (err, company) => {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send("Company updated");
        }
    });
};
exports.updateCompany = updateCompany;
let addcompany = (req, res) => {
    var company = new company_1.default(req.body);
    console.log(req.body);
    console.log(company);
    company.save((err) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(company);
            res.send(company);
        }
    });
};
exports.addcompany = addcompany;
//# sourceMappingURL=company_controllers.js.map