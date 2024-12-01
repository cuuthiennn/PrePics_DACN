    import React from 'react';

    const ListUser = () => {
        return (
            <div id='wrapper'>
        <div className='container-fluid'>
        <h1 className="h3 mb-2 text-gray-800">Tài khoản người dùng</h1>
                        <p className="mb-4">Trang quản lý tài khoản người dùng dành cho nhân viên và admin có thể xóa, sửa tài khoản account.</p>
        
        <div class="card shadow mb-4">
        <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary mr-auto">Danh sách người dùng</h6>
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
                <th>User Name</th>
                <th>NormalizedUserName</th>
                <th>Email</th>
                <th>NormalizedEmail</th>
                <th>EmailConfirmed</th>
                <th>PasswordHash</th>
                <th>SecurityStamp</th>
                <th>ConcurrencyStamp</th>
                <th>PhoneNumber</th>
                <th>PhoneNumberConfirmed</th>
                <th>TwoFactorEnabled</th>
                <th>LockoutEnd</th>
                <th>LockoutEnabled</th>
                <th>AccessFailedCount</th>
                <th>Xóa</th>
                <td></td>
            </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>john_doe</td>
                    <td>JOHN_DOE</td>
                    <td>john@example.com</td>
                    <td>JOHN@EXAMPLE.COM</td>
                    <td>Yes</td>
                    <td>ABC123HASH</td>
                    <td>XYZ789STAMP</td>
                    <td>CONCURRENCY001</td>
                    <td>1234567890</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>0</td>
                    <td><button type="submit" className="fa-solid fa-trash text-danger text-xl"></button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>john_doe</td>
                    <td>JOHN_DOE</td>
                    <td>john@example.com</td>
                    <td>JOHN@EXAMPLE.COM</td>
                    <td>Yes</td>
                    <td>ABC123HASH</td>
                    <td>XYZ789STAMP</td>
                    <td>CONCURRENCY001</td>
                    <td>1234567890</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>0</td>
                    <td><button type="submit" className="fa-solid fa-trash text-danger text-xl"></button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>john_doe</td>
                    <td>JOHN_DOE</td>
                    <td>john@example.com</td>
                    <td>JOHN@EXAMPLE.COM</td>
                    <td>Yes</td>
                    <td>ABC123HASH</td>
                    <td>XYZ789STAMP</td>
                    <td>CONCURRENCY001</td>
                    <td>1234567890</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>0</td>
                    <td><button type="submit" className="fa-solid fa-trash text-danger text-xl"></button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>john_doe</td>
                    <td>JOHN_DOE</td>
                    <td>john@example.com</td>
                    <td>JOHN@EXAMPLE.COM</td>
                    <td>Yes</td>
                    <td>ABC123HASH</td>
                    <td>XYZ789STAMP</td>
                    <td>CONCURRENCY001</td>
                    <td>1234567890</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>0</td>
                    <td><button type="submit" className="fa-solid fa-trash text-danger text-xl"></button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>john_doe</td>
                    <td>JOHN_DOE</td>
                    <td>john@example.com</td>
                    <td>JOHN@EXAMPLE.COM</td>
                    <td>Yes</td>
                    <td>ABC123HASH</td>
                    <td>XYZ789STAMP</td>
                    <td>CONCURRENCY001</td>
                    <td>1234567890</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>0</td>
                    <td><button type="submit" className="fa-solid fa-trash text-danger text-xl"></button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>john_doe</td>
                    <td>JOHN_DOE</td>
                    <td>john@example.com</td>
                    <td>JOHN@EXAMPLE.COM</td>
                    <td>Yes</td>
                    <td>ABC123HASH</td>
                    <td>XYZ789STAMP</td>
                    <td>CONCURRENCY001</td>
                    <td>1234567890</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>0</td>
                    <td><button type="submit" className="fa-solid fa-trash text-danger text-xl"></button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>john_doe</td>
                    <td>JOHN_DOE</td>
                    <td>john@example.com</td>
                    <td>JOHN@EXAMPLE.COM</td>
                    <td>Yes</td>
                    <td>ABC123HASH</td>
                    <td>XYZ789STAMP</td>
                    <td>CONCURRENCY001</td>
                    <td>1234567890</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>0</td>
                    <td><button type="submit" className="fa-solid fa-trash text-danger text-xl"></button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>john_doe</td>
                    <td>JOHN_DOE</td>
                    <td>john@example.com</td>
                    <td>JOHN@EXAMPLE.COM</td>
                    <td>Yes</td>
                    <td>ABC123HASH</td>
                    <td>XYZ789STAMP</td>
                    <td>CONCURRENCY001</td>
                    <td>1234567890</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>0</td>
                    <td><button type="submit" className="fa-solid fa-trash text-danger text-xl"></button></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>john_doe</td>
                    <td>JOHN_DOE</td>
                    <td>john@example.com</td>
                    <td>JOHN@EXAMPLE.COM</td>
                    <td>Yes</td>
                    <td>ABC123HASH</td>
                    <td>XYZ789STAMP</td>
                    <td>CONCURRENCY001</td>
                    <td>1234567890</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>-</td>
                    <td>Yes</td>
                    <td>0</td>
                    <td><button type="submit" className="fa-solid fa-trash text-danger text-xl"></button></td>
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

    export default ListUser;