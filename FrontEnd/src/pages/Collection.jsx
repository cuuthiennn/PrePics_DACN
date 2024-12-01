import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import SearchBar from "../Components/SearchBar/SearchBar";
import SectionImage from '../Components/SectionImage/SectionImage';
import Main from '../Components/Main/Main';
const Collection = () => {


    const imageUrls = [
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600',
        // Thêm nhiều URL khác nếu bạn muốn
    ];
    return (
        <div className='bg-white min-h-screen'>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
            {/* Phần trên - Tiêu đề */}
            <div className="container mx-auto px-4 py-4 mt-[60px]">
                <h1 className="text-center text-[70px] font-semibold">
                    Bộ sưu tập của bạn
                </h1>
            </div>

            {/* Phần dưới - Thông tin người dùng và số kết quả */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Bên trái - Ảnh đại diện và tên người dùng */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-green-700 text-white flex items-center justify-center rounded-full text-lg font-bold">
                            P
                        </div>
                        <span className="text-2xl font-medium">Phạm Khắc</span>
                    </div>

                    {/* Chính giữa - Khoảng trống linh động */}
                    <div className="flex-grow"></div>

                    {/* Bên phải - Số kết quả */}
                    <span className="text-2xl">17 kết quả</span>
                </div>
            </div>
            <div>
            {/* <div className='grid grid-cols-4 gap-5 p-5' >     */}
            {/* {imageUrls.map((url, index) => (
                <div key={index} className='p-3 bg-white shadow-md rounded-lg'>
                    <img src={url} alt='' className='w-full h-full object-cover rounded-lg' />
                </div>
            ))} */}
            <Main></Main>
                  
    {/* </div> */}
            </div>
        </div>
    );
};

export default Collection;