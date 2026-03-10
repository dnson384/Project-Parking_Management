import axios from "axios";
import { LoginPayload, RegisterPayload } from "../schemas/auth.schema";
import { UserResponseEntity } from "@/domain/entities/user.entity";

export async function LoginService(payload: LoginPayload) {
  const response = await axios.post<Record<string, boolean>>(
    `/api/auth/login`,
    payload,
  );
  return response.data;
}

export async function RegisterService(payload: RegisterPayload) {
  const response = await axios.post<Record<string, boolean>>(
    `/api/auth/register`,
    payload,
  );
  return response.data;
}

export async function GetMeService() {
  const response = await axios.get<UserResponseEntity>(`/api/auth/me`, {
    withCredentials: true,
  });

  return response.data;
}
