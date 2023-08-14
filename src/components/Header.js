import React from 'react';
//images
import Logo from '../assets/logo.svg'
import { Button } from 'react-scroll';
const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto' id='home'>
      <div className='flex justify-between items-center'>
        {/* {Logo} */}

        <a href="#">
          <h1 className='text-gradient btn-link text-[30px] '>MUHAMMAD <br /> SODIQ</h1>
        </a>
        {/* {Button} */}

        <button className='btn btn-sm'>Work with me</button>
      </div>

    </div>

  </header>
};

export default Header;
