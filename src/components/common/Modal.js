import React, { useState, useEffect } from 'react';

const Modal = ({ loginError, setLoginError }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (loginError) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setLoginError(null);
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [loginError]);

  return (
    <div className={`fixed inset-0 flex h-20 justify-center transition-opacity duration-500 mt-5 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
        <p className="text-pink-600">{loginError}</p>
      </div>
    </div>
  );
};

export default Modal;
