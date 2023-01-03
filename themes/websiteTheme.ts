import '@fontsource/roboto';
import createTheme from '@mui/material/styles/createTheme';

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
      color: '#fafafa',
      fontWeight: 600,
    },
    h2: {
      fontSize: 30,
      textAlign: 'left',
      color: 'white',
      fontWeight: 400,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: '#fafafa',
        width: 'fit-content',
      },
    },
  },
});
