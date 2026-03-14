import React from 'react';

const LoadingButton = ({ 
  children, 
  isLoading = false, 
  disabled = false, 
  className = "", 
  onClick, 
  type = "button",
  ...props 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`flex items-center justify-center gap-3 transition-all duration-200 ${className} ${isLoading || disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      {...props}
    >
      {children}
      {isLoading && (
        <div className="loader" style={{ width: '16px', height: '16px', borderWidth: '3px' }}></div>
      )}
    </button>
  );
};

export default LoadingButton;
