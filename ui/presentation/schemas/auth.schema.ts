import z from "zod";

export const LoginPayload = z.object({
  email: z.email(),
  plainPassword: z.string(),
});

export const RegisterPayload = z.object({
  fullname: z.string(),
  email: z.string(),
  phone: z.string(),
  plainPassword: z.string(),
});

export type LoginPayload = z.infer<typeof LoginPayload>;
export type RegisterPayload = z.infer<typeof RegisterPayload>;
