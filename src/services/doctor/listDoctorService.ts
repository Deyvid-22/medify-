import { prismaClient } from "../../database/prisma";

export class ListDoctorService {
  async execute() {
    const doctors = await prismaClient.doctor.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return doctors;
  }
}
