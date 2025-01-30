import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | false | undefined)[]) {
  return twMerge(clsx(inputs));
}
