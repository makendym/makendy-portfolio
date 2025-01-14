'use client';
import React from 'react';
import { Box } from '@mui/material';
import Navbar from "./navbar";
import Footer from "./footer";
import {pageGradientBackground} from '../assets';

console.log(pageGradientBackground);
export default function Layout({ children }) {
    return (
      <>
        {/* <Navbar />
        <Box
        component="main"
        sx={{
          backgroundImage: `url(${pageGradientBackground})`, // Background image path
          backgroundSize: 'cover', // Ensures the background image covers the page
          backgroundPosition: 'center', // Centers the image
          backgroundAttachment: 'fixed', // Fixes the background while scrolling
          minHeight: '100vh', // Ensures the background spans the entire height of the page
        }}
      >
        {children}
      </Box>
        <Footer /> */}
      </>
    );
  }