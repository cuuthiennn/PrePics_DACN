import React from 'react';

const Ranking = () => {
    return (
        <div>
             {/* <div className='p-[30px] border border-[#dfdfe0] rounded-[30px]'> */}
                <div className='flex justify-between items-center pb-5 mt-4'>
                    <div className='flex items-center'>
                    <a className='cursor-pointer no-underline transition-all duration-250 ease-linear' href=''>
                        <div className='block box-border'>
                            <div className='w-[80px] min-w-[80px] max-w-[80px] h-[80px] min-h-[80px] max-h-[80px] rounded-full'>
                            <img className='w-full h-full rounded-full' 
                            src='https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600' 
                            alt=''/>

                            </div>
                            
                        </div>
                    </a>
                    <div className='flex flex-col'>
                        <a className='cursor-pointer no-underline transition-filter duration-250 ease-in-out' href=''>
                            <h4 className='font-inherit text-inherit ml-4'>David</h4>
                        </a>
                        <p className='text-[18px] font-medium leading-[28px] text-[#7f7f7f] ml-4'>13,4 trieu nguoi theo doi</p>
                    </div>
                    </div>
                    <h4 className='font-semibold text-[21px] leading-[33px] tracking[-0.015em] text-[#2c343e]'>1</h4>
                </div>
             </div>
        // </div>
    );
};

export default Ranking; 