import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface AccessTokenPayload {
  userId: number;
  role: "CUSTOMER" | "ADMIN";
}

interface RefreshTokenPayload {
  jti: string;
  userId: number;
}

export async function hashPlainPassword(plainPassword: string) {
  return await bcrypt.hash(plainPassword, 10);
}

export function comparePassword(plainPassword: string, hashedPassword: string) {
  return bcrypt.compare(plainPassword, hashedPassword);
}

export function generateToken(
  payload: AccessTokenPayload | RefreshTokenPayload,
  key: string,
  expiresIn: "15m" | "7d",
): string {
  return jwt.sign(payload, key, { expiresIn: expiresIn });
}

export function decodeAccessToken(token: string): AccessTokenPayload | null {
  try {
    return jwt.decode(token) as AccessTokenPayload;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
}

export function decodeRefreshToken(token: string): RefreshTokenPayload | null {
  try {
    return jwt.decode(token) as RefreshTokenPayload;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
}
