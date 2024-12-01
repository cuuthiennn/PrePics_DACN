import React from 'react';
import ListGallery from '../Components/ContentAdmin/ListGallery';
import Sidebar from '../Components/Administrator/Sidebar';
import Topbar from '../Components/Administrator/Topbar';
import Footer from '../Components/Administrator/Footer';

const GalleryManager = () => {
    return (
        <div id="wrapper" className="flex h-screen " >
      <Sidebar></Sidebar> 
        <div id="content-wrapper" className="d-flex flex-column">
          <div id='content'>
            <Topbar />
            <ListGallery></ListGallery>
            <div className='h-[500px]'></div>
            <Footer></Footer>
            </div>
            </div>
      </div>
    );
};

export default GalleryManager;