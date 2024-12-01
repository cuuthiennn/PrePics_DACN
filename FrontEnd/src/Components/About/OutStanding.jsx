import React from 'react';

const OutStanding = () => {
    return (
        <div className='bg-white min-h-screen'>
            <div className='justify-center flex'>
                <div className='w-full max-w-[830px]  bg-[#f7f7f7] rounded-[20px]'>
                    <h3 className='text-center font-semibold text-[23px] leading-[36px] tracking-[-0.015em] mt-[30px]'>Tùy chỉnh nội dung theo cách của bạn</h3>
                    <p className="text-center font-medium text-[16px] leading-[26px] max-w-2xl mx-auto mt-[30px]">
                        Tạo ấn tượng ban đầu hoàn hảo bằng cách đưa nội dung bạn yêu thích vào tiêu điểm. Hiển thị tối đa
                        40 phần hay nhất của nội dung và sắp xếp những phần đó theo thứ tự bạn muốn. 
                        Tiếp tục - chọn Mục nổi bật và cho cộng đồng thấy những bức ảnh mà bạn tự hào nhất!
                    </p>
                    <div className="flex justify-center mb-[50px] mt-[30px]">
                        <a className="text-white bg-black px-6 py-3 rounded-lg no-underline" href="#">
                            <span className="inline-flex justify-center items-center w-full">
                                Chọn Mục nổi bật
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-3 gap-1 max-w-3xl mx-auto">
                        <div className="rounded-lg overflow-hidden">
                            <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" className="w-full h-auto"/>
                        </div>
                        <div className="rounded-lg overflow-hidden opacity-70">
                            <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" className="w-full h-auto"/>
                        </div>
                        <div className="rounded-lg overflow-hidden opacity-50">
                            <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" className="w-full h-auto"/>
                        </div>
                    </div>
                    <div className='h-[100px]'/>
                </div>
            </div>
        </div>
    );
};

export default OutStanding;