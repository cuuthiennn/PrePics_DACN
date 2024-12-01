import React from 'react';

const FormNotification = () => {
    return (
        <div className="">
        <h3 className='font-semibold text-[33px] leading-[40px] tracking-[-0.02em] text-black'>Phản hồi về nội dung</h3>
        <div className='flex items-center mt-4'>
            <input type='checkbox' className='h-6 w-6 mr-4'/>
            <label className='mt-3 text-xl text-black'>Tôi sẵn sàng nhận email để chia sẻ về cách tôi sử dụng ảnh và video</label>
        </div>

        <div className='flex items-center mt-4'>
            <input type='checkbox' className='h-6 w-6 mr-4'/>
            <label className='mt-3 text-xl text-black'>Tôi sẵn sàng nhận email khi có người chia sẻ về cách sử dụng ảnh hoặc video của tôi</label>
        </div>
        <h3 className='font-semibold text-[33px] leading-[40px] tracking-[-0.02em] text-black mt-3'>Email</h3>

        <div className='flex items-center mt-4'>
            <input type='checkbox' className='h-6 w-6 mr-4'/>
            <label className='mt-3 text-xl text-black'>Nhận email hàng tháng kèm số liệu thống kê về ảnh của bạn</label>
        </div>

        <div className='flex items-center mt-4'>
            <input type='checkbox' className='h-6 w-6 mr-4'/>
            <label className='mt-3 text-xl text-black'>Nhận tin tức liên quan đến nhiếp ảnh gia</label>
        </div>

        <div className='flex items-center mt-4'>
            <input type='checkbox' className='h-6 w-6 mr-4 '/>
            <label className='mt-3 text-xl text-black'>Nhận email khi đạt mốc mới</label>
        </div>
        <button className="w-full bg-[#379d7d] text-white p-2 rounded">Lưu hồ sơ</button>
        </div>
    );
};

export default FormNotification;