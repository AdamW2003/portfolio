import { createTheme } from '@mui/material/styles';

const customVars = {
  drawerWidth: 300,
  drawerBleeding: 56,
  borderRadius: "15px",
  colours: {
    grey1:'#D0D0D0',
    grey2:'#DCDCDC',
    blue1:'#3498db',
    white:'#ffffff'
  }
}

const theme = createTheme({
  ...customVars,
  palette: {
    primary: {
      main: customVars.colours.grey1,
    },
    secondary: {
      main: customVars.colours.blue1,
    },
    tertiary: {
      main: customVars.colours.grey2,
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
      color: customVars.colours.dGrey,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: customVars.colours.dGrey,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: customVars.colours.dGrey,
    },
  },
  overrides: {}
});

export default theme;
