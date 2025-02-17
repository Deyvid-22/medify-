import { Router } from "express";

import { ListDoctorController } from "./controller/doctor/listDoctorController";

const router = Router();

router.get("/doctors", new ListDoctorController().handle);

export default router;
