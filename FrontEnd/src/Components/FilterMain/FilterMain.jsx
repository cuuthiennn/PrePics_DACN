import React from 'react';
import { useNavigate } from 'react-router-dom';
const FilterMain = () => {
    const navigate = useNavigate();
    return (
        <>
          <div className="flex flex-col items-center justify-center h-[calc(80vh-150px)] bg-black text-white text-center">
            <h1 className="text-4xl font-bold mb-4">
                Choose <span className="bg-accent text-green-500">PrePics </span>to have beautiful photos
            </h1>
            <p className="text-lg text-muted-foreground mb-6">Provides a variety of photos and photo quality. Brings a good experience to users.</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600" onClick={() =>{navigate('/')}}>Bắt Đầu Nào!!!</button>
        </div>
        </>
    );
};

export default FilterMain;
