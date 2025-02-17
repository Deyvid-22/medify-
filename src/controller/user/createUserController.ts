import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/createUserService";
import { ICreateUser } from "../../services/user/createUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const {
      name,
      email,
      phone,
      birthDate,
      permission,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
    } = req.body as ICreateUser;

    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      email,
      phone,
      permission,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      birthDate,
    });

    res.status(201).json(user);
  }
}
