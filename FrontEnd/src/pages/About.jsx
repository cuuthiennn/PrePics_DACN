import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Button from '../Components/Button/Button';
import Avatar from '../Components/Avatar/Avatar';
import PersonalPage from '../Components/About/PersonalPage';
import OutStanding from '../Components/About/OutStanding';
import { useNavigate } from 'react-router-dom';

const About = ({image}) => {
    const navigate = useNavigate();

    return (
        <div className='bg-white min-h-screen'>
        <Navbar></Navbar>
    <PersonalPage></PersonalPage>
    <div className='flex justify-center mt-[100px] mr-[900px]'>
            <Button props ='Mục nổi bật' textcolor='text-white' bgcolor='bg-black' onClick={() => navigate('/')}></Button>
            <Button props ='Bộ sưu tập ' onClick={() => navigate('/aboutcollection')}></Button>
            <Button props ='Số liệu thống kê ' onClick={() => navigate('/aboutdata')} ></Button>
            <Button props ='Người theo dõi ' onClick={() => navigate('/aboutfollower')}></Button>
            <Button props ='Đang theo dõi ' onClick={() => navigate('/aboutwatching')}></Button>
    </div>
    <div className='mt-[100px]'>
        {image ? (
            <div className='grid grid-cols-4 gap-5 p-5' >
            <img
                src={image}
                alt="Mountain Landscape"
            />
            </div>
        ) : (
            <OutStanding></OutStanding>
        ) }
    </div>
    </div>
    );
};

export default About;