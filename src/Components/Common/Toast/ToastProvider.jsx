import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Reusable functions
export const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    theme: "light",
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    theme: "light",
  });
};

// Provider Component
const ToastProvider = () => {
  return <ToastContainer />;
};

export default ToastProvider;
