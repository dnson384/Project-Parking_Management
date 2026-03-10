import { GetMeUseCase } from "@/application/Auth/getMe.usecase";
import { AuthRepositoryImpl } from "@/infrastructure/repositories/auth.repository.impl";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const at = req.cookies.get("accessToken")?.value;
  const rt = req.cookies.get("refreshToken")?.value;

  const repo = new AuthRepositoryImpl();
  const useCase = new GetMeUseCase(repo);

  try {
    const { user, newAccessToken } = await useCase.execute(rt!, at);

    const response = NextResponse.json(user);

    if (newAccessToken) {
      response.cookies.set("accessToken", newAccessToken, {
        httpOnly: true,
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 15,
      });
    }

    return response;
  } catch (err) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}
