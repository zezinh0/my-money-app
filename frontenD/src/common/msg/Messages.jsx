import React from "react";
import { ToastContainer, Bounce  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default props => {
    return (
    <ToastContainer position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
    shouldIgnoreToast={true}/>
)
}