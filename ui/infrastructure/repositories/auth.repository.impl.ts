import jwt from "jsonwebtoken";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import {
  LoginPayloadEntity,
  AuthResponse,
  RegisterPayloadEntity,
} from "@/domain/entities/auth.entity";
import { UserEntity, UserResponseEntity } from "@/domain/entities/user.entity";
import { IAuthRepository } from "@/domain/repositories/auth.repository";
import { RefreshTokenEntity } from "@/domain/entities/refreshToken.entity";

import {
  comparePassword,
  decodeAccessToken,
  decodeRefreshToken,
  generateToken,
  hashPlainPassword,
} from "../services/auth.service";

export class AuthRepositoryImpl implements IAuthRepository {
  private readonly baseUrl: string;
  private readonly SECRET: string;

  constructor() {
    this.baseUrl = "http://localhost:4000";
    this.SECRET = "JWT_SECRET";
  }

  async login(payload: LoginPayloadEntity): Promise<AuthResponse> {
    const { data: user } = await axios.get<UserEntity[]>(
      `${this.baseUrl}/users?email=${payload.email}`,
    );

    if (!user || user.length === 0) {
      throw {
        status: 404,
        message: "Không tìm thấy người dùng trong mock",
      };
    }

    const curUser = user[0];

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

    const accessToken = generateToken(
      {
        userId: curUser.id,
        role: curUser.role,
      },
      this.SECRET,
      "15m",
    );

    const rtPayload = { jti: uuidv4(), userId: curUser.id };
    const refreshToken = generateToken(rtPayload, this.SECRET, "7d");

    await axios.post<UserEntity>(`${this.baseUrl}/refresh_tokens`, {
      ...rtPayload,
      token: refreshToken,
    });

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async register(payload: RegisterPayloadEntity): Promise<AuthResponse> {
    const { data: curUser } = await axios.get<UserEntity[]>(
      `${this.baseUrl}/users?email=${payload.email}`,
    );

    if (curUser.length > 0) {
      throw {
        status: 400,
        message: "Tài khoản đã tồn tại",
      };
    }

    const hashedPassword = await hashPlainPassword(payload.plainPassword);

    const newUserPayload = {
      email: payload.email,
      fullname: payload.fullname,
      phoneNumber: payload.phone,
      hashedPassword: hashedPassword,
      role: "CUSTOMER",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const { data: newUser } = await axios.post<UserEntity>(
      `${this.baseUrl}/users`,
      newUserPayload,
    );

    const accessToken = generateToken(
      {
        userId: Number(newUser.id),
        role: newUser.role,
      },
      this.SECRET,
      "15m",
    );

    const rtPayload = { jti: uuidv4(), userId: newUser.id };
    const refreshToken = generateToken(rtPayload, this.SECRET, "7d");

    await axios.post<UserEntity>(`${this.baseUrl}/refresh_tokens`, {
      ...rtPayload,
      token: refreshToken,
    });

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async getMe(accessToken: string): Promise<UserResponseEntity> {
    const tokenPayload = decodeAccessToken(accessToken);
    if (!tokenPayload) {
      throw {
        status: 401,
        message: "Không thể giải mã token",
      };
    }

    const { userId } = tokenPayload;
    const { data: users } = await axios.get<UserEntity[]>(
      `${this.baseUrl}/users?id=${userId}`,
    );

    if (!users || users.length === 0) {
      throw { status: 404, message: "Người dùng không tồn tại" };
    }
    const curUser = users[0];

    return {
      id: curUser.id,
      email: curUser.email,
      fullname: curUser.fullname,
      phoneNumber: curUser.phoneNumber,
      role: curUser.role,
    };
  }

  async regenerateAT(refreshToken: string): Promise<string> {
    const tokenPayload = decodeRefreshToken(refreshToken);
    if (!tokenPayload) {
      throw {
        status: 401,
        message: "Không thể giải mã token",
      };
    }

    const { jti } = tokenPayload;

    const { data: rt } = await axios.get<RefreshTokenEntity[]>(
      `${this.baseUrl}/refresh_tokens?jti=${jti}`,
    );
    if (!rt || rt.length === 0) {
      throw {
        status: 404,
        message: "Không tồn tại refresh token",
      };
    }
    const curRt = rt[0];

    const { data: user } = await axios.get<UserEntity[]>(
      `${this.baseUrl}/users?id=${curRt.userId}`,
    );
    if (!user || user.length === 0) {
      throw {
        status: 404,
        message: "Người dùng không tồn tại",
      };
    }
    const curUser = user[0];

    const newAccessToken = generateToken(
      {
        userId: curUser.id,
        role: curUser.role,
      },
      this.SECRET,
      "15m",
    );

    return newAccessToken;
  }
}
