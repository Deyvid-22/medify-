import { Request, Response } from "express";
import { ListDoctorService } from "../../services/doctor/listDoctorService";

export class ListDoctorController {
  async handle(request: Request, response: Response): Promise<any> {
    const listUserService = new ListDoctorService();
    const users = await listUserService.execute();
    return response.json(users);
  }
}
