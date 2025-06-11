import React from 'react';

const Button: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div >
      <button 
        onClick={handleClick} 
        className="items-center border-[2px] border-[#333333] p-[16px] shadow-lg rounded-md hover:bg--blue-500 transition-colors"
      >
        Click Here
      </button>
    </div>
  );
};

export default Button;