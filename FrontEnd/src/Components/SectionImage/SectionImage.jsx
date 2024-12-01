import { BiLink } from 'react-icons/bi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import React, { useState , useEffect } from 'react';
import GallerySingle from '../GallerySingle/GallerySingle';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';

function SectionImage(){
    const [isFavorite, setIsFavorite] = useState(false);

    const [countHeart,setCountHeart] = useState(0);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="gallery-item relative h-80">
                    <img src="src/assets/image.png" className="w-full h-auto rounded transition-transform duration-300 hover:filter hover:brightness-75" alt=""/>
                    <div className="gallery-links absolute inset-0 flex items-center justify-center">
                        <button  className="details-link flex items-center justify-center p-2 rounded-full shadow-lg opacity-75 hover:opacity-100 transition" variant="outlined" onClick={handleClickOpen}>
                                    <BiLink className="text-3xl" />
                        </button>
                        <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth >
                            <DialogTitle onClose={handleClose}>Ảnh</DialogTitle>
                            <DialogContent dividers>
                                <GallerySingle />
                            </DialogContent>
                        </Dialog>
                        
                        <button onClick={toggleFavorite} className="ml-4 flex items-center">
                            {isFavorite ? (
                                <AiFillHeart className="text-4xl text-red-600 transition-colors duration-300" />
                            ) : (
                                <AiOutlineHeart className="text-4xl text-gray-500 transition-colors duration-300" />
                            )}
                            <span className="ml-2 text-xl">{countHeart}</span>
                        </button>
                    </div>
                </div>
            </div>

    );
}
export default SectionImage;