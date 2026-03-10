export interface LoginPayloadEntity {
  email: string;
  plainPassword: string;
}

export interface RegisterPayloadEntity {
  fullname: string;
  email: string;
  phone: string;
  plainPassword: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}
