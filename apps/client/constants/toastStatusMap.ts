const DEFAULT_ERROR_MESSAGE = "에러가 발생했어요.";

export const toastStatusMap: Record<"error" | "success", string> = {
  error: DEFAULT_ERROR_MESSAGE,
  success: "",
};
