import React from 'react';
const DropdownButton = () => {
    return (
        <div className="btn-group">
            <button 
                type="button" 
                className="btn btn-secondary dropdown-toggle" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
            >
                Tải xuống miễn phí
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button className="inline-block m-0 border-none dropdown-item">
                    <span className="text-black">Lớn:</span>
                    <span className="text-gray-500"> 1920x1680</span>
                    </button>
                </li>
                <li>
                <button className="inline-block m-0 border-none dropdown-item">
                    <span className="text-black">Trung bình:</span>
                    <span className="text-gray-500"> 1280x835</span>
                    </button>
                </li>
                <li><a className="dropdown-item" href="#">Kích thước mặc định</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item " href="#">
                    <p>Kích thước tùy chọn</p>
                    <input className='w-[45%] inline-block border-2 border-black '/>
                    <span className='text-black inline-block mx-2'> X </span>
                    <input className='w-[45%] inline-block border-2 border-black'/>
                </a></li>
            </ul>
        </div>  
    );
};

export default DropdownButton;