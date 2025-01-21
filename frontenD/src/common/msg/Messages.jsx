import React from "react";
import { ToastContainer, Bounce  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default props => {
    return (
    <ToastContainer position="top-right"
    autoClose={3000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition={Bounce}
    shouldIgnoreToast={true}
    limit={3}/>
)
}