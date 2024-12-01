// import React from 'react';
import React, { useState } from 'react';
import FormNotification from '../Components/Form/FormNotification';
import { useNavigate } from 'react-router-dom';
const EditNotification = () => {
    const navigate = useNavigate(); // Khai báo hàm navigate
  const [activeTab, setActiveTab] = useState('Hồ sơ'); // State để lưu tên tab đang được chọn
  const handleTabClick = (tabName, path) => {
    setActiveTab(tabName); // Cập nhật tên tab khi nhấn
    navigate(path); // Điều hướng tới trang tương ứng
  };
    return (
        <div className="flex justify-center items-center ">
            <div className="w-full max-w-2xl p-6">
                {/* Tabs */}
                <div className="flex justify-center mb-6">
                <button className="px-4 py-2 text-gray-600 "  onClick={() => handleTabClick('Hồ sơ', '/aboutprofile')}>Hồ sơ</button>
                <button className="px-4 py-2 text-white bg-black rounded-full">Thông báo</button>
                </div>

                {/* Header */}
                <h1 className="text-4xl font-bold text-center text-black mb-8">Thông báo</h1>
                <FormNotification></FormNotification>
            </div>
           
    </div>
    );
};

export default EditNotification;