// import React from 'react';
import React, { useState } from 'react';
import Avatar from '../Components/Avatar/Avatar';
import FormAbout from '../Components/Form/FormAbout';
import { useNavigate } from 'react-router-dom';
const EditProfile = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Hồ sơ');
    const handleTabClick = (tabName, path) => {
        setActiveTab(tabName); // Cập nhật tên tab khi nhấn
        navigate(path); // Điều hướng tới trang tương ứng
      };
    return (
        <div className="flex justify-center items-center ">
      <div className="w-full max-w-2xl p-6">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button className="px-4 py-2 text-white bg-black rounded-full">Hồ sơ</button>
          <button className="px-4 py-2 text-gray-600" onClick={() => handleTabClick('Thông báo', '/aboutnotification')}>Thông báo</button>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Cài đặt hồ sơ</h1>

        {/* Profile Image and Change Button */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Avatar props='P'></Avatar>
          <button className="px-4 py-2 bg-[#379d7d] text-white rounded-md">Thay đổi hình ảnh</button>
        </div>
        <FormAbout></FormAbout>
      </div>
    </div>
    );
};

export default EditProfile;