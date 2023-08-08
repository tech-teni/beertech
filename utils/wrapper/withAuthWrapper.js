import Navbar from '@/parts/withAuth/navbar';
import React, { useState, useEffect } from 'react';
import {userService} from '@/service/apiCalls/userService';
import { useDispatch } from 'react-redux';

const  Wrapper = ({children}) => {
  const dispatch = useDispatch();
  const [drop_down, setDrop_down] = useState(false);

  const handle_drop_down = () => {
    if (drop_down) {
      setDrop_down(false);
    }
  }

  useEffect(() => {
    dispatch(userService())
  }, [])

  return (
    <div className="page-layout" onClick={handle_drop_down}>
      <Navbar drop_down={drop_down} setDrop_down={setDrop_down} />
      <style jsx global>{`
        body {
          background-color: #e7eef4;
        }
      `}</style>
     <div style={{marginTop: '85px'}}> {children}</div>
    </div>
  );
}

export default Wrapper