import React, { useState } from 'react';
import { Grid2 , Paper  } from '@mui/material';
import { styled } from '@mui/material/styles';
import DetailGallery from '../DetailGallery/DetailGallery';
import DropdownButton from '../DropdownButton/DropdownButton';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    maxHeight: '100%',
    minHeight: '200px',
    color: theme.palette.text.secondary,
    display: 'flex', // Sử dụng flexbox
    flexDirection: 'column', // Đặt chiều hướng là cột
    justifyContent: 'space-between', // Căn giữa nội dung theo chiều dọc
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
function GallerySingle(){
    const [isOpen, setIsOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState('');

    const handleImageClick = (src) => {
        setImageSrc(src);
        setIsOpen(true);
      };

      const handleClose = () => {
        setIsOpen(false);
      };
    return (
        <div>
        <Grid2 container rowSpacing={1}>
            <Grid2 size={6}>
                <Item style={{ height: '550px'}}>
                    <img
                        src="src/assets/image.png"
                        className="w-full h-full object-cover rounded transition-transform duration-300"
                        onClick={() => handleImageClick('src/assets/image.png')}alt="Thumbnail"
                    />
                </Item>
                <div >
                <h5 className='mt-4'>Thêm vào bộ sưu tập <i class="fa-regular fa-bookmark"></i></h5>
                <div className='mt-3'>
                <input type="text"  className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-1"  placeholder="Nhập tên bộ sưu tập"/>
                <button  className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Tạo
                </button>
                </div>
                </div>
            </Grid2>
            <Grid2 size={6}>
                <Item style={{ height: '500px' }}>
                    <DetailGallery />
                </Item>
            </Grid2>
        </Grid2>
        {isOpen && (
        <div onClick={handleClose} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center cursor-pointer" >
          <img src={imageSrc} className="max-w-[90%] max-h-[90%] object-contain" alt="Zoomed" />
        </div>
      )}
        </div>
    );
}
export default GallerySingle;