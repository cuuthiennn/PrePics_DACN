import React from 'react';

const Avatar = ({props}) => {
    return (
        <div>
             <div className="flex items-center space-x-2">
                        <div className='w-40 h-40 bg-green-700 text-white flex items-center justify-center rounded-full text-[100px] font-bold'>
                            {props}
                        </div>
                    </div>
        </div>
    );
};

export default Avatar;