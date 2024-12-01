import React from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
const PersonalPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center gap-x-6 mt-[150px]'>
                <Avatar props='P'></Avatar>
            </div>
            <div>
                <h1 className='text-5xl mt-5'>Phạm Khắc</h1>
            </div>
            <div className=' mt-[100px] flex justify-center'>
                    <Button props='Sửa hồ sơ' bgcolor='bg-[#379d7d]' size='text-4xl' textcolor='text-white' onClick={() => navigate('/aboutprofile')}></Button>
                    
        </div>  
                    <div className='h-full mt-10 flex justify-center ml-[110px]' >
                        <a className='text-black text-2xl mr-6 flex flex-col items-center no-underline ' href=''>
                            <p className='text-gray-600'>Tổng lượt xem</p>
                            <h4 className='mt-3'>0</h4>
                        </a>
                        
                        <a className='h-full text-black text-2xl mr-6 flex flex-col items-center no-underline border-l border-black pl-6' href=''>
                            <p className='text-gray-600'>Thứ hạng từ trước đến nay</p>
                            <h4 className='mt-3'>677,5 nghìn</h4>
                        </a>
                    
                        <a className='h-full text-black text-2xl mb-6 flex flex-col items-center no-underline border-l border-black pl-6' href=''>
                            <p className='text-gray-600'>Thứ hạng trong 30 ngày qua</p>
                            <h4 className='mt-3'>18,8 nghìn</h4>
                        </a>
                    </div>
        </div>
        </div>
    );
};

export default PersonalPage;