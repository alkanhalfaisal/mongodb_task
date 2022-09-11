import { Request, Response } from "express";
import Company from "./../company";

export let allCompanies = (_: Request, res: Response) => {
    // @ts-ignore
    let companies = Company.find((err: any, companies: any) => {
      if (err) {
        res.send(err.message);
      } else {
        res.send(companies);
      }
    });
  };

export let getUser = (req: Request, res: Response) => {
    // @ts-ignore
    let company = Company.findById(req.params.id, (err: any, company: any) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(company);
        }
    });
};

export let deleteCompany = (req: Request, res: Response) => {
    // @ts-ignore
    let company = Company.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send("Company Deleted");
        }
    });
};

export let updateCompany = (req: Request, res: Response) => {
    console.log(req.body);
    // @ts-ignore
    let company = Company.findByIdAndUpdate(
        req.params.id,
        req.body,
        // @ts-ignore
        (err: any, company: any) => {
            if (err) {
                res.send(err.message);
            } else {
                res.send("Company updated");
            }
        }
    );
};

export let addcompany = (req: Request, res: Response) => {
    var company = new Company(req.body);
    console.log(req.body);
    console.log(company);
    company.save((err: any) => {
        if (err) {
            console.log(err)
            res.send(err);
        } else {
            console.log(company);
            res.send(company);
        }
    });
};