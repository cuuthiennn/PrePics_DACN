import React from 'react';
import CardUser from '../Components/Card/CardUser';
import Button from '../Components/Button/Button';
import Navbar from '../Components/Navbar/Navbar';
import PersonalPage from '../Components/About/PersonalPage';
import { useNavigate } from 'react-router-dom';
const AboutFollower = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white min-h-screen'>
        <Navbar></Navbar>
        <PersonalPage></PersonalPage>
        <div className='flex justify-center mt-[100px] mr-[900px]'>
            <Button props ='Mục nổi bật'  onClick={() => navigate('/')}></Button>
            <Button props ='Bộ sưu tập ' onClick={() => navigate('/aboutcollection')}></Button>
            <Button props ='Số liệu thống kê ' onClick={() => navigate('/aboutdata')} ></Button>
            <Button props ='Người theo dõi ' textcolor='text-white' bgcolor='bg-black' onClick={() => navigate('/aboutfollower')}></Button>
            <Button props ='Đang theo dõi ' onClick={() => navigate('/aboutwatching')}></Button>
        </div>
        <div className='grid grid-cols-4 gap-5 p-5' >    
                    <CardUser></CardUser>
                    <CardUser></CardUser>
                    <CardUser></CardUser>
                    <CardUser></CardUser>
        </div>
        </div>
    );
};

export default AboutFollower;