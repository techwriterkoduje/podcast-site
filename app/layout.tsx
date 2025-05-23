import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata } from 'next';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/quicksand/700.css';
import { AudioProvider } from '../context/AudioContext'; // Adjusted path assuming context is outside app dir

export const metadata: Metadata = {
  title: 'Podcast Platform', // Generic title, can be customized per page later
  description: 'Listen to your favorite podcasts.',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ed6e5f',
      dark: '#eb5645',
    },
    info: {
      main: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: ['Quicksand', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: 36,
      textAlign: 'left',
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: 30,
      textAlign: 'left',
      fontWeight: 900,
    },
    h3: {
      fontSize: 26,
      fontWeight: 900,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 900,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
        width: 'fit-content',
      },
    },
  },
});

import Box from '@mui/material/Box';
import Header from '../components/Layout/Header'; // Adjusted path
import Footer from '../components/Layout/Footer'; // Adjusted path
import NowPlaying from '../components/NowPlaying'; // Adjusted path

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <AudioProvider>
            <CssBaseline />
            <Box sx={{ position: 'relative' }}> {/* Mimicking old Layout structure */}
              <NowPlaying />
              <Header />
              <main style={{ paddingBottom: '1rem' }}> {/* Mimicking old Layout main style */}
                {children}
              </main>
              <Footer />
            </Box>
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
