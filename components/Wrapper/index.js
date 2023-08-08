import Navbar from '@/components/Navbar/index';
import React from 'react';

const  Wrapper = ({children}) => {


  return (
    <div className="page-layout">
      <Navbar />
     <div style={{marginTop: '15px'}}> {children}</div>
    </div>
  );
}

export default Wrapper