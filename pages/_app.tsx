import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.css';
import 'prism-theme-one-light-dark/prism-onedark.css';
import type { AppProps } from 'next/app';
import { websiteTheme } from '../themes/websiteTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={websiteTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
