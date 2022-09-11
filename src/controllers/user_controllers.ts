import { Request, Response } from "express";
import User from "./../user";
import bcrypt from "bcrypt";

export let allUsers = (req: Request, res: Response) => {
    let users = User.find((err: any, users: any) => {
      if (err) {
        res.send(err.message);
      } else {
        res.send(users);
      }
    });
  };

export let getUser = (req: Request, res: Response) => {
    let user = User.findById(req.params.id, (err: any, user: any) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(user);
        }
    });
};

export let deleteUser = (req: Request, res: Response) => {
    let user = User.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send("user Deleted");
        }
    });
};

export let updateUser = (req: Request, res: Response) => {
    console.log(req.body);
    let user = User.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err: any, user: any) => {
            if (err) {
                res.send(err.message);
            } else {
                res.send("User updated");
            }
        }
    );
};

export let addUser = async (req: Request, res: Response) : Promise<void> => {
    var user = new User();
    const salt = await bcrypt.genSalt()
    
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.password = await bcrypt.hash(req.body.password,salt)

    console.log(req.body);
    console.log(user);
    user.save((err: any) => {
        if (err) {
            console.log(err)
            res.send(err);
        } else {
            console.log(user);
            res.send(user);
        }
    });
};