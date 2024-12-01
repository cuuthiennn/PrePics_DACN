import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Button from '../Components/Button/Button';
import Avatar from '../Components/Avatar/Avatar';
import LineChart from '../Components/Chart/LineChart'
import Ranking from '../Components/Table/Ranking';
import PersonalPage from '../Components/About/PersonalPage';
import Data from '../Components/Table/Data';
import { useNavigate } from 'react-router-dom';
const AboutData = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white min-h-screen'>
        <Navbar></Navbar>
        <PersonalPage></PersonalPage>
        <div className='flex justify-center mt-[100px] mr-[900px]'>
            <Button props ='Mục nổi bật'  onClick={() => navigate('/')}></Button>
            <Button props ='Bộ sưu tập ' onClick={() => navigate('/aboutcollection')}></Button>
            <Button props ='Số liệu thống kê ' textcolor='text-white' bgcolor='bg-black' onClick={() => navigate('/aboutdata')} ></Button>
            <Button props ='Người theo dõi ' onClick={() => navigate('/aboutfollower')}></Button>
            <Button props ='Đang theo dõi ' onClick={() => navigate('/aboutwatching')}></Button>
        </div>
        {/* ******************************************
        ******************************************
        ****************************************** */}
        <div className='p-[15px] rounded-[30px] border border-[#dfdfe0] mt-12 mr-6 ml-6'>
            <div className='text-[25px] mt-3'>
                <h4>Tổng quan</h4>
            </div>
            <div className='mt-5'>
                <Data></Data>
            </div>
            <div className='mt-5'>
                <LineChart></LineChart>
            </div>
        </div>
        {/* ******************************************
        ******************************************
        ****************************************** */}
        <div className="flex mt-10 space-x-4 px-4">
            <div className='mt-10 w-1/2'>
           
            </div>
            <div className='mt-10 w-1/2  rounded-[30px] border border-[#dfdfe0] overflow-auto'>
            <div className='mt-10 p-8 flex flex-col justify-between'>
                <h4 className='leading-none font-semibold text-[23px] tracking[-0.015em]'>Bảng xếp hạng</h4>
                <div className='flex justify-between mt-9'>
                    <p className='text-[14px] font-medium leading-[22px]'>Nhiếp ảnh gia</p>
                    <p className='text-[14px] font-medium leading-[22px]'>Vị trí</p>
                </div>
                <Ranking></Ranking>
                <Ranking></Ranking>
                <Ranking></Ranking>
                <Ranking></Ranking>
             </div>
             
            </div>
        </div>
        <div className='h-[500px]'/>
        
        </div>
    );
};

export default AboutData;