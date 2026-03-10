import z from "zod";

export const LoginPayload = z.object({
  email: z.email(),
  plainPassword: z.string(),
});

export const RegisterPayload = z.object({
  email: z.email(),
  plainPassword: z.string(),
});

export type LoginPayload = z.infer<typeof LoginPayload>;
