import { DEFAULT_ERROR_MESSAGE } from "constants/messages/error";

export const toastStatusMap: Record<"error" | "success", string> = {
  error: DEFAULT_ERROR_MESSAGE,
  success: "",
};
