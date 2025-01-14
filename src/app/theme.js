'use client';

import { Changa, Changa_One } from 'next/font/google';
import { Cedarville_Cursive } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

// Load Changa font
const changa = Changa({
  weight: ['400', '600', '700'], // Specify desired weights
  subsets: ['latin'],
  display: 'swap',
});

// Load Changa One font
const changaOne = Changa_One({
  weight: ['400'], // Changa One only supports 400 weight
  subsets: ['latin'],
  display: 'swap',
});

// Load Cedarville Cursive font
const cedarvilleCursive = Cedarville_Cursive({
  weight: ['400'], // Ensure correct weight for Cedarville Cursive
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme that incorporates all three fonts
const theme = createTheme({
  typography: {
    fontFamily: `${changa.style.fontFamily}, ${changaOne.style.fontFamily}, ${cedarvilleCursive.style.fontFamily}, sans-serif`, // Combine all fonts
    h1: {
      fontFamily: cedarvilleCursive.style.fontFamily, // Use Cedarville Cursive for h1
      fontSize: '3rem', // Default size for h1
    },
    h2: {
      fontFamily: changaOne.style.fontFamily, // Use Changa One for h2
      fontSize: '2.5rem',
    },
    h3: {
      fontFamily: changa.style.fontFamily, // Use Changa for h3
      fontSize: '2rem',
    },
    body1: {
      fontFamily: changa.style.fontFamily, // Use Changa for body text
      fontSize: '1rem',
    },
    button: {
      fontFamily: changaOne.style.fontFamily, // Use Changa One for buttons
      textTransform: 'uppercase',
    },
  },
});

export default theme;