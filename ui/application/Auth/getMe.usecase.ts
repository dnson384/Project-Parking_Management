import { IAuthRepository } from "@/domain/repositories/auth.repository";

export class GetMeUseCase {
  constructor(private repo: IAuthRepository) {}

  async execute(refreshToken: string, accessToken?: string) {
    if (accessToken) {
      try {
        const user = await this.repo.getMe(accessToken);
        return { user: user, newAccessToken: null };
      } catch (err: any) {
        if (err.status !== 401) throw err;
      }
    }

    try {
      const newAT = await this.repo.regenerateAT(refreshToken);

      const user = await this.repo.getMe(newAT);

      return { user: user, newAccessToken: newAT };
    } catch (err) {
      throw err;
    }
  }
}
