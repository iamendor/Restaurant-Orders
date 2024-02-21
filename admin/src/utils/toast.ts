import { Slide, ToastContainerProps, toast } from "react-toastify";

export const toastSuccess = (message: string, config?: ToastContainerProps) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    transition: Slide,
  });
};
