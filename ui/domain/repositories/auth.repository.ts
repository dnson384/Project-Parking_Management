import { LoginPayloadEntity, LoginResponse } from "../entities/auth.entity";

export interface IAuthRepository {
  login(payload: LoginPayloadEntity): Promise<LoginResponse>;
}
