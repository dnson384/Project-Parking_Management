import { RegisterUsecase } from "@/application/Auth/register.usecase";
import {
  RegisterPayloadEntity,
} from "@/domain/entities/auth.entity";
import { AuthRepositoryImpl } from "@/infrastructure/repositories/auth.repository.impl";
import { RegisterPayload } from "@/presentation/schemas/auth.schema";
import { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validated = RegisterPayload.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        {
          message: "Dữ liệu đầu vào không hợp lệ!",
          error: validated.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { fullname, email, phone, plainPassword } = validated.data;
    const domainPayload: RegisterPayloadEntity = {
      fullname: fullname,
      email: email,
      phone: phone,
      plainPassword: plainPassword,
    };

    const repo = new AuthRepositoryImpl();
    const usecase = new RegisterUsecase(repo);
    const response = await usecase.execute(domainPayload);

    const nextResponse = NextResponse.json({ success: true });
    nextResponse.cookies.set("accessToken", response.accessToken, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      maxAge: 1000 * 60 * 15,
    });
    nextResponse.cookies.set("refreshToken", response.refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return nextResponse;
  } catch (err: any) {
    if (isAxiosError(err)) {
      return NextResponse.json(
        { message: err.response?.data.message },
        { status: err.status },
      );
    }

    return NextResponse.json(
      { message: err.message || "Lỗi Server" },
      { status: err.status || 500 },
    );
  }
}
