import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type APIResponse =
  | { message: string }
  | { errors: { path: string; message: string }[] };

export const extractErrorMessage = (error: APIResponse): string => {
  if ("message" in error && error.message) return error.message;
  else if ("errors" in error && error.errors) return error.errors[0].message;

  return "Terjadi kesalahan tidak terduga!";
};
