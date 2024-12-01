import React from 'react';
import ImageACollection from '../Components/About/ImageACollection';
import PersonalPage from '../Components/About/PersonalPage';
import Button from '../Components/Button/Button';
import Navbar from '../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
const AboutCollection = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white min-h-screen'>
        <Navbar></Navbar>
        <PersonalPage></PersonalPage>
        <div className='flex justify-center mt-[100px] mr-[900px]'>
            <Button props ='Mục nổi bật'  onClick={() => navigate('/')}></Button>
            <Button props ='Bộ sưu tập ' textcolor='text-white' bgcolor='bg-black' onClick={() => navigate('/aboutcollection')}></Button>
            <Button props ='Số liệu thống kê ' onClick={() => navigate('/aboutdata')} ></Button>
            <Button props ='Người theo dõi ' onClick={() => navigate('/aboutfollower')}></Button>
            <Button props ='Đang theo dõi ' onClick={() => navigate('/aboutwatching')}></Button>
        </div>
        <div className='grid grid-cols-4 gap-5 p-5' >
            <ImageACollection></ImageACollection>
            <ImageACollection></ImageACollection>
            <ImageACollection></ImageACollection>
            <ImageACollection></ImageACollection>
            </div>
        </div>
    );
};

export default AboutCollection;