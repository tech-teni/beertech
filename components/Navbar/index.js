import React, { useState, useEffect } from 'react';
import  styles from './navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

const  Navbar = () => {
  const router = useRouter();
  const currentLocation = router.asPath;
  console.log(currentLocation)
  return (
    <div  className={styles.navbar_container}>
      <div className={styles.navbar}>
      <h1>BeerTech</h1>

      <ul>
        <li style={{textDecoration: currentLocation === '/'?  'underline': 'none'}} ><a href='/'>Products</a></li>
        <li style={{textDecoration: currentLocation === '/cart'?  'underline': 'none'}}><a href='/cart'>Cart</a></li>
        <li style={{textDecoration: currentLocation === '/about'?  'underline': 'none'}}><a href='/about'>About</a></li>

      </ul>
      </div>
    </div>
  );
}

export default Navbar