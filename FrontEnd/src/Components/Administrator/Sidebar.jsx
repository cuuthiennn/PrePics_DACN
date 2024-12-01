import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setIsOpen2(false); // Đảm bảo rằng khi một accordion mở, cái còn lại sẽ đóng
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };
  const toggleAccordion2 = () => {
    setIsOpen(false);
    setIsOpen2(!isOpen2);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    
  };
  const toggleAccordion3 = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(!isOpen3);
    setIsOpen4(false);
    setIsOpen5(false);
    
  };
  const toggleAccordion4 = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(!isOpen4);
    setIsOpen5(false);
    
  };
  const toggleAccordion5 = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(!isOpen5);
    
  };
  
  return (
    <div>
      <div className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          Admin 
        </div>
      </Link>
      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Dashboard */}
      <div className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Bảng điều khiển</span>
        </Link>
      </div>

      <hr className="sidebar-divider" />

      {/* Heading - Giao Diện */}
      <div className="sidebar-heading">Giao Diện</div>

      {/* Nav Item - Quản lý người dùng */}
      <div className="nav-item">
          <div>
            <button
              onClick={toggleAccordion}
              className="flex items-center p-3 w-full text-left text-white rounded-t-lg focus:outline-none"
            >
              <i className="fas fa-fw fa-user"></i>
              <span className="ml-2">Quản lý người dùng</span>
            </button>
            {isOpen && (
              <div className="bg-white text-white p-3 rounded-b-lg w-[90%] mx-auto">
                <ul>
                  <li>
                    <Link to="/usermanager" className="text-lg no-underline font-serif text-black">
                      Danh sách
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      <hr className="sidebar-divider d-none d-md-block" />

      {/* Nav Item - Quản lý bộ sưu tập */}
      <div className="nav-item">
          <div>
            <button
              onClick={toggleAccordion2}
              className="flex items-center p-3 w-full text-left text-white rounded-t-lg focus:outline-none"
            >
              <i className="fas fa-fw fa-table"></i>
              <span className="ml-2">Quản lý bộ sưu tập</span>
            </button>
            {isOpen2 && (
              <div className="bg-white text-white p-3 rounded-b-lg w-[90%] mx-auto">
                <ul>
                  <li>
                    <Link to="/collectionmanager" className="text-lg no-underline font-serif text-black">
                      Danh sách
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

      <hr className="sidebar-divider" />

      {/* Nav Item - Quản lý nhãn */}
      <div className="nav-item">
          <div>
            <button
              onClick={toggleAccordion3}
              className="flex items-center p-3 w-full text-left text-white rounded-t-lg focus:outline-none"
            >
              <i className="fa-solid fa-tags"></i>
              <span className="ml-2">Quản lý nhãn</span>
            </button>
            {isOpen3 && (
              <div className="bg-white text-white p-3 rounded-b-lg w-[90%] mx-auto">
                <ul>
                  <li>
                    <Link to="/gottagmanager" className="text-lg no-underline font-serif text-black">
                      Danh sách
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

      <hr className="sidebar-divider d-none d-md-block bg-" />

      {/* Nav Item - Quản lý phòng trưng bày */}
      <div className="nav-item">
          <div>
            <button
              onClick={toggleAccordion4}
              className="flex items-center p-3 w-full text-left text-white rounded-t-lg focus:outline-none"
            >
              <i className="fas fa-fw fa-chart-area"></i>
              <span className="ml-2">Quản lý phòng trưng bày</span>
            </button>
            {isOpen4 && (
              <div className="bg-white text-white p-3 rounded-b-lg w-[90%] mx-auto">
                <ul>
                  <li>
                    <Link to="/gallerymanager" className="text-lg no-underline font-serif text-black">
                      Danh sách
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

      <hr className="sidebar-divider d-none d-md-block bg-" />

      {/* Nav Item - Quản lý InCollection */}
      <div className="nav-item">
          <div>
            <button
              onClick={toggleAccordion5}
              className="flex items-center p-3 w-full text-left text-white rounded-t-lg focus:outline-none"
            >
              <i className="fa-solid fa-igloo"></i>
              <span className="ml-2">Quản lý InCollection</span>
            </button>
            {isOpen5 && (
              <div className="bg-white text-white p-3 rounded-b-lg w-[90%] mx-auto">
                <ul>
                  <li>
                    <Link to="/incollectionmanager" className="text-lg no-underline font-serif text-black">
                      Danh sách
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

      <hr className="sidebar-divider d-none d-md-block" />

      {/* Sidebar Toggler */}
      {/* <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div> */}

      <div className="sidebar-card d-none d-lg-flex mt-8">
                <img className="sidebar-card-illustration mb-2" src="/src/assets/images/undraw_rocket.svg" alt="..."/>
                {/* <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a> */}
            </div>
            
    </div>
    </div>
  );
};

export default Sidebar;
