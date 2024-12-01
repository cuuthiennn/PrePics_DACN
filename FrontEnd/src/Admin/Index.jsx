import React from 'react';
import Dashboard from '../Components/ContentAdmin/Dashboard';
import Footer from '../Components/Administrator/Footer';
import Topbar from '../Components/Administrator/Topbar';
import Sidebar from '../Components/Administrator/Sidebar';

const Index = () => {
    return (
      <div id="wrapper" className="flex h-screen " >
      <Sidebar></Sidebar> 
        <div id="content-wrapper" className="d-flex flex-column">
          <div id='content'>
            <Topbar />
            <Dashboard></Dashboard>
            <Footer></Footer>
            </div>
            </div>   
      </div>
    );
};

export default Index;