import React from 'react';
import Button from '../Button/Button';

const FormAbout = () => {
    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Thông tin cá nhân</h2>
          
          {/* Tên và Họ */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium">Tên</label>
              <input type="text" className="w-full border rounded p-2" placeholder="Phạm Khắc" />
              <p className="text-xs text-gray-500">
                Chúng tôi mong mọi người sẽ dùng tên thật trong cộng đồng để chúng ta có thể nhận ra nhau.
              </p>
            </div>
            <div>
              <label className="block font-medium">Họ</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
          </div>
          
          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium">Email</label>
            <input type="email" className="w-full border rounded p-2" placeholder="phamkhac2003@gmail.com" />
            <p className="text-xs text-gray-500">Lưu ý rằng email này sẽ được công khai.</p>
          </div>
          
          {/* Mật khẩu */}
          <div className="mb-4">
            <label className="block font-medium">Mật khẩu</label>
            <button className="text-white px-4 py-2 bg-[#379d7d] rounded">Thay đổi mật khẩu</button>
          </div>
          
          {/* Giới thiệu về bạn */}
          <h2 className="text-xl font-semibold mb-4">Giới thiệu về bạn</h2>
          <div className="mb-4">
            <label className="block font-medium">Tiêu đề ngắn gọn</label>
            <input type="text" className="w-full border rounded p-2" placeholder="Tiêu đề ngắn gọn" />
            <p className="text-xs text-gray-500">Mô tả ngắn gọn hồ sơ của bạn.</p>
          </div>
          
          {/* Thông tin liên kết */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium">Địa điểm</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">Trang web</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">X</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">Instagram</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">YouTube</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">TikTok</label>
              <input type="text" className="w-full border rounded p-2" />
            </div>
      </div>
      
      {/* Nhắn tin */}
      <h2 className="text-xl font-semibold mb-4">Nhắn tin</h2>
      <div className="mb-4 flex items-center">
        <input type="checkbox" className="mr-2" />
        <label className='mt-2'>Hiển thị nút "Tin nhắn" trên hồ sơ của tôi</label>
      </div>
      
      <p className="text-xl text-black cursor-pointer">Xóa tài khoản và toàn bộ dữ liệu</p>
      <p className="text-xl text-black cursor-pointer mb-4">Xóa tài khoản</p>
      
      {/* Lưu hồ sơ */}
      <button className="w-full bg-[#379d7d] text-white p-2 rounded">Lưu hồ sơ</button>
    </div>
    );
};

export default FormAbout;