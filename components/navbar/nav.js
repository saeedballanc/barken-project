import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';










function Nav() {






  return (


    <nav className='nav'>
      <div className='app-bar'>
          

         
              <Button href="/#screenSize" className="button-nav" sx={{ my: 2, color: 'white', display: 'block' }}>Screen Size</Button>
              <Button href='/' className="button-nav" sx={{ my: 2, color: 'white', display: 'block' }}> Home </Button>
              <Button href='/#footer' className="button-nav" sx={{ my: 2, color: 'white', display: 'block' }}> Contact Us </Button>
              
              
              
              <Button href='/gradients' className="button-nav button-nav-gradients" sx={{ my: 2, color: 'white', display: 'block' }}> gradients <div className='mini-grad'></div></Button>
        


      </div>
    </nav>
  );
}
export default Nav;
