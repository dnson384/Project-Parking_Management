import {
  AuthResponse,
  RegisterPayloadEntity,
} from "@/domain/entities/auth.entity";
import { IAuthRepository } from "@/domain/repositories/auth.repository";

export class RegisterUsecase {
  constructor(private readonly repo: IAuthRepository) {}

  async execute(payload: RegisterPayloadEntity): Promise<AuthResponse> {
    return await this.repo.register(payload);
  }
}
