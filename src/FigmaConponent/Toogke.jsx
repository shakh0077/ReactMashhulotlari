import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

export default function Toogle(){
  const notify = () => toast.error("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}