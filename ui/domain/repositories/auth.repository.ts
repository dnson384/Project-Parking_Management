import {
  LoginPayloadEntity,
  AuthResponse,
  RegisterPayloadEntity,
} from "../entities/auth.entity";
import { UserResponseEntity } from "../entities/user.entity";

export interface IAuthRepository {
  login(payload: LoginPayloadEntity): Promise<AuthResponse>;
  register(payload: RegisterPayloadEntity): Promise<AuthResponse>;
  getMe(accessToken: string): Promise<UserResponseEntity>;
  regenerateAT(refreshToken: string): Promise<string>;
}
