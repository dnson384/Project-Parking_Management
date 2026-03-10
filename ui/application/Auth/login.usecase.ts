import {
  LoginPayloadEntity,
  LoginResponse,
} from "@/domain/entities/auth.entity";
import { IAuthRepository } from "@/domain/repositories/auth.repository";

export class LoginUsecase {
  constructor(private readonly repo: IAuthRepository) {}

  async execute(payload: LoginPayloadEntity): Promise<LoginResponse> {
    return await this.repo.login(payload);
  }
}
