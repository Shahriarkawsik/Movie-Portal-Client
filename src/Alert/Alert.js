import { toast } from "react-toastify";

export const Alert = (flag, message) => {
  flag ? toast.success(message) : toast.error(message);
};
