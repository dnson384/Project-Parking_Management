import axios from "axios";
import { LoginPayload } from "../schemas/auth.schema";

export async function LoginService(payload: LoginPayload) {
  const response = await axios.post<Record<string, boolean>>(
    `/api/auth/login`,
    payload,
  );
  return response.data;
}
