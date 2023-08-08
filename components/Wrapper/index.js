import Navbar from '@/components/Navbar/index';
import React, { useState, useEffect } from 'react';
// import {userService} from '@/service/apiCalls/userService';
// import { useDispatch } from 'react-redux';

const  Wrapper = ({children}) => {
//   const dispatch = useDispatch();
//   const [drop_down, setDrop_down] = useState(false);

//   const handle_drop_down = () => {
//     if (drop_down) {
//       setDrop_down(false);
//     }
//   }

//   useEffect(() => {
//     dispatch(userService())
//   }, [])

  return (
    <div className="page-layout">
      <Navbar />
      
     <div style={{marginTop: '15px'}}> {children}</div>
    </div>
  );
}

export default Wrapper