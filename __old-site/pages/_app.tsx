import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/quicksand/700.css';
import { AudioProvider } from '../context/AudioContext';

function MyApp({ Component, pageProps }: AppProps) {
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

  return (
    <ThemeProvider theme={theme}>
      <AudioProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </AudioProvider>
    </ThemeProvider>
  );
}

export default MyApp;
