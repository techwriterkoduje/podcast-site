import { createTheme } from '@mui/material';
import '@fontsource/roboto';

export const websiteTheme = createTheme({
  palette: {
    mode: 'dark',
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
      color: 'white',
      fontWeight: 600,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
        sx: {
          width: 'fit-content',
        },
      },
    },
  },
});
