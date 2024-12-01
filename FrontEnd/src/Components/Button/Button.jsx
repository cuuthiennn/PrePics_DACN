import React from 'react';

const Button = ({props, bgcolor, size,textcolor, onClick }) => {
    return (
        <div >
          <button className={`text-xl ${textcolor} px-4 py-2 rounded hover:bg-black mx-2 ${bgcolor} ${size}`}
          onClick={onClick}>
                {props}
          </button>
        </div>
    );
};

export default Button;