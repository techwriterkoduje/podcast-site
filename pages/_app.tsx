import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.css';
import 'prism-theme-one-light-dark/prism-onedark.css';
import type { AppProps } from 'next/app';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { useMemo, useState } from 'react';
import createTheme from '@mui/material/styles/createTheme';
import { ColorModeContext } from '../context/ColorModeContext';
import useMediaQuery from '@mui/material/useMediaQuery';

function MyApp({ Component, pageProps }: AppProps) {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');
  const [mode, setMode] = useState<'light' | 'dark'>(
    prefersLightMode ? 'light' : 'dark'
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#ed6e5f',
            dark: '#eb5645',
          },
          secondary: {
            main: '#fafafa',
            dark: '#dbdbdb',
          },
        },
        typography: {
          fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
          h1: {
            fontSize: 36,
            textAlign: 'left',
            fontWeight: 600,
          },
          h2: {
            fontSize: 30,
            textAlign: 'left',
            fontWeight: 400,
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
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default MyApp;
