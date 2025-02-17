import { prismaClient } from "../../database/prisma";
import { User } from "@prisma/client";

export interface ICreateUser
  extends Omit<User, "id" | "appointments" | "created_at"> {}

export class CreateUserService {
  async execute({
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
  }: ICreateUser) {
    if (!email) {
      throw new Error("Email is required");
    }

    if (
      !name ||
      !permission ||
      !city ||
      !phone ||
      !birthDate ||
      !addressLine1 ||
      !addressLine2 ||
      !postalCode
    ) {
      throw new Error("fill in all fields ");
    }

    const userExists = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) {
      throw new Error("user is exists");
    }

    const createUser = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        phone: phone,
        birthDate: birthDate,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        state: state,
        city: city,
        permission: permission,
        postalCode: postalCode,
      },
    });
    return createUser;
  }
}
