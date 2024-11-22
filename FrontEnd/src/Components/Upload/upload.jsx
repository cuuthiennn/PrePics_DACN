import React, { useState } from 'react';
import FormUpload from '../Form/FormUpload';
import Navbar from '../Navbar/Navbar';


const Upload = () => {

    return (
        <div>
        <Navbar></Navbar>   
        <div className='flex flex-col items-center justify-center mt-[150px]'>
        <h2 className='text-[40px] leading-[40px] tracking[-0.02em]'>Chia sẻ ảnh và video khiến cả thế giới yêu thích</h2>
        <p className='text-[22px] font-medium leading-[28px] mt-4'>Chia sẻ ảnh và 50 video của bạn để giới thiệu bản thân với hàng triệu người dùng PrePics</p>
        </div>
        <FormUpload></FormUpload>
        <div className='h-[300px]'></div>
        </div>
        
    );
};

export default Upload;
