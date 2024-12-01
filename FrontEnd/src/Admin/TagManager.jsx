import React from 'react';
import Sidebar from '../Components/Administrator/Sidebar';
import Topbar from '../Components/Administrator/Topbar';
import ListTag from '../Components/ContentAdmin/ListTag';
import Footer from '../Components/Administrator/Footer';

const TagManager = () => {
    return (
        <div id="wrapper" className="flex h-screen " >
      <Sidebar></Sidebar> 
        <div id="content-wrapper" className="d-flex flex-column">
          <div id='content'>
            <Topbar />
            <ListTag></ListTag>
            <div className='h-[500px]'></div>
            <Footer></Footer>
            </div>
            </div>
      </div>
    );
};

export default TagManager;