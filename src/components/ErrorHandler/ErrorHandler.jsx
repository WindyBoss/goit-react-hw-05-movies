import { useEffect } from 'react';
import toast from 'react-hot-toast';

const ErrorHandler = ({ errorMessage, toastErrorMessage }) => {
  useEffect(() => {
    console.log(toastErrorMessage)
    toast.error(toastErrorMessage);
  }, [toastErrorMessage]);

  return <div>{errorMessage}</div>;
};

export default ErrorHandler;
