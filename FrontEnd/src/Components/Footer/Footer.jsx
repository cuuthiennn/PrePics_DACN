import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-2" style={{backgroundColor: '#379d7d'}}>
            <div className="w-full px-4 text-center">
                <p>© 2024 <strong><span>PrePics</span></strong>. All rights reserved.</p>
                <p>Email: PhamKhacentertainment@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
