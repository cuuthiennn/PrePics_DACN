import React from 'react';
import ListInCollection from '../Components/ContentAdmin/ListInCollection';
import Sidebar from '../Components/Administrator/Sidebar';
import Topbar from '../Components/Administrator/Topbar';
import Footer from '../Components/Administrator/Footer';

const InCollectionManager = () => {
    return (
        <div id="wrapper" className="flex h-screen " >
      <Sidebar></Sidebar> 
        <div id="content-wrapper" className="d-flex flex-column">
          <div id='content'>
            <Topbar />
            <ListInCollection></ListInCollection>
            <div className='h-[500px]'></div>
            <Footer></Footer>
            </div>
            </div>
      </div>
    );
};

export default InCollectionManager;