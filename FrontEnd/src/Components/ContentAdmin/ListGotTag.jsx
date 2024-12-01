import React from 'react';

const ListGotTag = () => {
    return (
        <div id='wrapper'>
        <div className='container-fluid'>
        <h1 className="h3 mb-2 text-gray-800">GotTag</h1>
                        <p className="mb-4">Trang quản lý hình ảnh trên Gottag cho phép người dùng quản lý bộ sưu tập hình ảnh của mình. Các nhân viên và admin có quyền thực hiện các thao tác như xóa hoặc sửa các bộ sưu tập trong hệ thống, đảm bảo tính bảo mật và sự thuận tiện cho người dùng khi thao tác với các hình ảnh cá nhân.</p>
        
        <div class="card shadow mb-4">
        <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary mr-auto">Danh sách GotTag</h6>
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
                <th>Id nhãn</th>
                <th>Id gallery</th>
                <th>Xóa</th>
                <td></td>
            </tr>
                </thead>
                <tbody>
                <tr>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <th><button type="submit" className="fa-solid fa-trash text-danger text-xl"></button></th>
                </tr>
                <tr>
                    <th>2</th>
                    <th>2</th>
                    <th>2</th>
                    <th><button type="submit" className="fa-solid fa-trash text-danger text-xl"></button></th>
                </tr>
                <tr>
                    <th>3</th>
                    <th>3</th>
                    <th>3</th>
                    <th><button type="submit" className="fa-solid fa-trash text-danger text-xl"></button></th>
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

export default ListGotTag;