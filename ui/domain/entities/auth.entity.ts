export interface LoginPayloadEntity {
  email: string;
  plainPassword: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
