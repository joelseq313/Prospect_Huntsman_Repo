import { Request, Response } from "express";

let userData: any = [];

export const createUser = async (req: Request, res: Response) => {
  try { // validation not did
    const newUser = req.body;
    newUser.id = userData.length + 1;
    console.log(newUser);

    userData.push(newUser);

    return res.status(200).json({
      success: true,
      data: newUser,
      message: "user created!!",
    });
  } catch (err) {
    return res.status(404).json({ success: false, msg: err });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    let user = userData.find((item: any) => item.id == req.params.userId);
    if (!user || user == undefined) {
      return res.status(404).json({ success: false, msg: "user not found" });
    }

    for (let i = 0; i < userData.length; i++) {
      if (userData[i].id == req.params.userId) {
        userData[i] = { ...userData[i], ...req.body };
        break;
      }
    }
    
    return res.status(200).json({
      success: true,
      msg: "user updated!!",
    });
  } catch (err) {
    return res.status(404).json({ success: false, msg: err });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = userData.find((item: any) => item.id == req.params.userId);
    if (!user || user == undefined) {
      return res.status(404).json({ success: false, msg: "user not found" });
    }

    return res.status(200).json({
      success: true,
      data: user,
      msg: "get user",
    });
  } catch (err) {
    return res.status(404).json({ success: false, msg: err });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {

    const user = userData.find((item: any) => item.id == req.params.userId);
    if (!user || user == undefined) {
      return res.status(404).json({ success: false, msg: "user not found" });
    }

    let data: any = userData.filter(
      (item: any) => item.id !== parseInt(req.params.userId)
    );

    userData = data;

    return res.status(200).json({
      success: true,
      msg: `user id = ${req.params.userId} is deleted`,
    });
  } catch (err) {
    return res.status(404).json({ success: false, msg: err });
  }
};
