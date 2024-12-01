import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import React, { useState , useEffect } from 'react';
import { FaComment } from "react-icons/fa";
import Comment from '../Comment/Comment';
import DropdownButton from '../DropdownButton/DropdownButton';
const comments = [
    {
      user: { name: 'Nguyen Van A', avatar: 'https://example.com/avatar1.jpg' },
      comment: 'Bức ảnh thật đẹp!',
    },
    {
      user: { name: 'Tran Thi B', avatar: 'https://example.com/avatar2.jpg' },
      comment: 'Mình cũng thích nơi này!',
    },
    {
        user: { name: 'Tran Thi B', avatar: 'https://example.com/avatar2.jpg' },
        comment: 'Mình cũng thích nơi này!',
      },
      {
        user: { name: 'Tran Thi B', avatar: 'https://example.com/avatar2.jpg' },
        comment: 'Mình cũng thích nơi này!',
      }
  ];
function DetailGallery(){
    const [isFavorite, setIsFavorite] = useState(false);

    const [countHeart,setCountHeart] = useState(0);

    const toggleFavorite = () => {
        setIsFavorite((prev) => !prev);
    };
    useEffect(() => {
        if (isFavorite) {
          setCountHeart((prev) => prev + 1);
        } else {
          setCountHeart((prev) => Math.max(prev - 1, 0)); 
        }
    }, [isFavorite]); 
    return (
            <div className="bg-popover dark:bg-card p-4 rounded-lg shadow-lg h-[calc(80vh-90px)] flex flex-col">
                <div className="flex items-center mb-4">
                    <img className="w-10 h-10 rounded-full" src="https://placehold.co/40x40" alt="Profile Picture" />
                    <div className="ml-3">
                        <span className="font-bold text-primary">vietcetera</span>
                    </div>
                </div>
                <p className="text-foreground mb-2">
                    #show chủ đề
                </p>
                <div className="text-muted-foreground text-sm mb-2">
                    # show Tag
                </div>
                {/* Phần hiển thị bình luận */}
                <h3 className="font-bold">Bình luận:</h3>
                <div className="mt-4 max-h-screen overflow-y-auto"> 
                     <div className="mt-2">
                        {comments.map((c, index) => (
                            <Comment key={index} user={c.user} comment={c.comment} />
                        ))}
                    </div>
                </div>
                <div className="flex-grow" /> {/* Phần này sẽ kéo dài để đẩy nút "Đăng" và "Tim" xuống cuối */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <button onClick={toggleFavorite} className="flex items-center">
                            {isFavorite ? (
                                <AiFillHeart className="text-4xl text-red-600 transition-colors duration-300" />
                            ) : (
                                <AiOutlineHeart className="text-4xl text-gray-500 transition-colors duration-300" />
                            )}
                        </button>
                        <span>{countHeart} lượt thích</span>
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <FaComment />
                    <input type="text" placeholder="Thêm bình luận..." className="flex-grow ml-2 p-2 border border-border rounded-lg bg-input text-foreground" />
                    <button className="bg-blue-500 text-primary-foreground hover:bg-primary/80 py-1 px-3 rounded ml-2 text-white">Đăng</button>
                </div>
                <div className='mt-3 ml-[150px]'>
                    <DropdownButton></DropdownButton>
                </div>
             </div>

    );
}
export default DetailGallery;