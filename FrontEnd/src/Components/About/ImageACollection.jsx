import React from 'react';

const ImageACollection = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-2 w-80 h-80 rounded-lg overflow-hidden">
      {/* Hình lớn bên trái */}
      <div className="col-span-1 row-span-2">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Dogs"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Hình bên phải trên */}
      <div className="col-span-1 row-span-1">
        <img
          src="https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Cat 1"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Hình bên phải dưới */}
      <div className="col-span-1 row-span-1">
        <img
          src="https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Cat 2"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
        </div>
    );
};

export default ImageACollection;