import React from 'react';

const Header: React.FunctionComponent = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'></div>
      Space-X Launches
    </header>
  );
};

export default Header;
