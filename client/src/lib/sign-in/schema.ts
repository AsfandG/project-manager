import { z } from "zod";

export const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
});

export const signUpSchema = z
  .object({
    name: z.string().min(3, "Name must be atleast 3 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be 8 characters long"),
    confirmPassword: z.string().min(8, "password must be 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
