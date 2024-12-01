import React from 'react';
import Sidebar from '../Components/Administrator/Sidebar';
import Topbar from '../Components/Administrator/Topbar';
import ListGotTag from '../Components/ContentAdmin/ListGotTag';
import Footer from '../Components/Footer/Footer';

const GotTagManager = () => {
    return (
        <div id="wrapper" className="flex h-screen " >
      <Sidebar></Sidebar> 
        <div id="content-wrapper" className="d-flex flex-column">
          <div id='content'>
            <Topbar />
            <ListGotTag></ListGotTag>
            <div className='h-[500px]'></div>
            <Footer></Footer>
            </div>
            </div>
      </div>
    );
};

export default GotTagManager;