import React from 'react';
import Avatar from '../Avatar/Avatar';
import AvatarCard from '../Avatar/AvatarCard';

const CardUser = ({imageUrl, imageUrl2, }) => {
    return (
        <div>
           <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
      <div className='w-full h-48 object-cover'>
      {imageUrl2 ? (
                <img
                    className="w-full h-full object-cover"
                    src={imageUrl}
                    alt="Mountain Landscape"
                />
            ) : (
                <div className="w-full h-full bg-black"></div>
            )}
      </div>
        
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white overflow-hidden">
        {imageUrl ? (
        <img
          className="w-full h-full object-cover"
          src={imageUrl} // URL của ảnh đại diện nếu có
          alt="Profile"
        />
      ) : (
        <div className="w-full h-full bg-green-700 flex items-center justify-center">
        <span className="text-white font-bold text-lg">P</span>
        </div>
      )}

        </div>
      </div>
      <div className="pt-10 pb-6 text-center bg-gray-400">
        <h3 className="mt-3 text-white text-xl font-semibold">Phạm Khắc</h3>
          <button className="mt-3 bg-white text-teal-500 font-semibold py-2 px-4 rounded-full shadow">
          Theo dõi
        </button>
      </div>
      {/* <div className="pb-6 text-center">
      
      </div> */}
    </div>
        </div>
    );
};

export default CardUser;