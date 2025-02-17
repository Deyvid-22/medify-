import { Router } from "express";

import { ListDoctorController } from "./controller/doctor/listDoctorController";
import { CreateUserController } from "./controller/user/createUserController";

const router = Router();

router.get("/doctors", new ListDoctorController().handle);

router.post("/user", new CreateUserController().handle);

export default router;
