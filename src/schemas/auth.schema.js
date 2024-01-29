import { z } from "zod";

export const registerSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  lastname: z.string({
    required_error: "Lastname is required",
  }),
  user: z.string({
    required_error: "User is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, { message: "Password must be at least 8 characters" }),
  role: z.string({
    required_error: "Role is required",
  }),
  departament: z.string({
    required_error: "Departament is required",
  }),
});

export const loginSchema = z.object({
  user: z.string({
    required_error: "User is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, { message: "Password must be at least 8 characters" }),
});
