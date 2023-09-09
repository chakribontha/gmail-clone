import React, { useState } from 'react';
import Header from '../Component/Header';
import SideBar from '../Component/SideBar';

function Main() {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <SideBar openDrawer={openDrawer} />
      <div className='chakri'>display views</div>
    </div>
  );
}

export default Main;
