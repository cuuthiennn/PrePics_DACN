import React from 'react';

const ListGallery = () => {
    return (
        <div id='wrapper'>
        <div className='container-fluid'>
        <h1 className="h3 mb-2 text-gray-800">Phòng trưng bày</h1>
                        <p className="mb-4">Trang quản lý phòng trưng bày được quản lý bởi  nhân viên và admin có thể xóa, sửa bộ sưu tập.</p>
        
        <div class="card shadow mb-4">
        <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary mr-auto">Danh sách phòng trưng bày</h6>
        </div>
        <div className="card-body">
        <div className="table-responsive">
            <div class="flex items-center space-x-2 mb-3">
            <label htmlFor="searchInput" className="text-lg font-semibold mt-1">Search:</label>
            <input type="text" id="searchInput" className="w-1/5 h-10 p-2 border rounded" placeholder="Tìm kiếm..."/>
            </div>
        <table className="table table-bordered" id="dataCategoryTable" width="100%" cellSpacing="0">
        <thead>
            <tr>
                <th>Id</th>
                <th>Vị trí</th>
                <th>Ngày tải lên</th>
                <th>Lượt thích</th>
                <th>Chiều cao</th>
                <th>Chiều rộng</th>
                <th>Id người dùng</th>
                <th>Xóa</th>
                <td></td>
            </tr>
                </thead>
                <tbody>
                <tr>
                    <th>1</th>
                    <th>Hà Nội</th>
                    <th>2024-11-01</th>
                    <th>101</th>
                    <th>150</th>
                    <th>100</th>
                    <th>123</th>
                    <th><button type="submit" class="fa-solid fa-trash text-danger text-xl"></button></th>
                </tr>
                <tr>
                    <th>2</th>
                    <th>TP.HCM</th>
                    <th>2024-11-02</th>
                    <th>120</th>
                    <th>160</th>
                    <th>110</th>
                    <th>124</th>
                    <th><button type="submit" class="fa-solid fa-trash text-danger text-xl"></button></th>
                </tr>
                </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default ListGallery;