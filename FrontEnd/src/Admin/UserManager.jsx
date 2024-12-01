import React from 'react';
import Sidebar from '../Components/Administrator/Sidebar';
import Topbar from '../Components/Administrator/Topbar';
import ListUser from '../Components/ContentAdmin/ListUser';
import Footer from '../Components/Administrator/Footer';

const UserManager = () => {
    return (
        <div id="wrapper" className="flex h-screen " >
      <Sidebar></Sidebar> 
        <div id="content-wrapper" className="d-flex flex-column">
          <div id='content'>
            <Topbar />
            <ListUser></ListUser>
            <div className='h-[500px]'></div>
            <Footer></Footer>
            </div>
            </div>
      </div>
    );
};

export default UserManager;