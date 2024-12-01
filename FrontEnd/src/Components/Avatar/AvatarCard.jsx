import React from 'react';

const AvatarCard = ({props}) => {
    return (
        <div>
            <div className="flex items-center space-x-2">
                        <div className='w-14 h-14 bg-green-700 text-white flex items-center justify-center rounded-full text-[30px] font-bold'>
                            {props}
                            P
                        </div>
                    </div>
        </div>
    );
};

export default AvatarCard;