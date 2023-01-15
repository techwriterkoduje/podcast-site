import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import { useEffect, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ColorModeContext } from '../context/ColorModeContext';
import useMediaQuery from '@mui/material/useMediaQuery';

type ColorMode = 'light' | 'dark';

function MyApp({ Component, pageProps }: AppProps) {
  const MODE_STORAGE_KEY = 'colorMode';
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');

  const [mode, setMode] = useState<ColorMode>(
    prefersLightMode ? 'light' : 'dark'
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem(MODE_STORAGE_KEY, newMode);
          return newMode;
        });
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
          info: {
            main: '#1e1e1e',
          },
        },
        typography: {
          fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
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
      }),
    [mode]
  );

  useEffect(function () {
    const fromLocalStorage = localStorage.getItem(MODE_STORAGE_KEY);

    if (
      fromLocalStorage &&
      (fromLocalStorage === 'light' || fromLocalStorage === 'dark')
    ) {
      setMode(fromLocalStorage);
    }
  }, []);

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
