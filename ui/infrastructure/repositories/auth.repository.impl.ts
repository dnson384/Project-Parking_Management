import {
  LoginPayloadEntity,
  LoginResponse,
} from "@/domain/entities/auth.entity";
import { IAuthRepository } from "@/domain/repositories/auth.repository";

import { mockUsers } from "@/mocks/users.mock";
import { comparePassword } from "../services/auth.service";
import jwt from "jsonwebtoken";

export class AuthRepositoryImpl implements IAuthRepository {
  private readonly baseUrl: string;
  private readonly SECRET: string;

  constructor() {
    this.baseUrl = "";
    this.SECRET = "JWT_SECRET";
  }

  async login(payload: LoginPayloadEntity): Promise<LoginResponse> {
    const curUser = mockUsers.find((user) => user.email === payload.email);

    if (!curUser) {
      throw {
        status: 404,
        message: "Không tìm thấy người dùng trong mock",
      };
    }

    const isCorrectPassword = comparePassword(
      payload.plainPassword,
      curUser.hashedPassword,
    );

    if (!isCorrectPassword) {
      throw {
        status: 400,
        message: "Mật khẩu không chính xác",
      };
    }

    const accessToken = jwt.sign(
      {
        id: curUser.id,
        role: curUser.role,
      },
      this.SECRET,
      { expiresIn: "15m" },
    );
    const refreshToken = jwt.sign({ id: curUser.id }, this.SECRET, {
      expiresIn: "7d",
    });

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }
}
