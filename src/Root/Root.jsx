import React from 'react';
import Navber from '../Componets/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../Componets/Footer/Footer';

const Root = () => {
     return (
          <div className='max-w-6xl mx-auto'>
                <Navber></Navber>
              <div className=' flex-1'>
                <Outlet></Outlet>
              </div>
               <Footer></Footer>
          </div>
     );
};

export default Root;