import { createTheme } from '@mui/material/styles';
import { red, purple, green, yellow } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: green.A200,
    },
    secondary: {
      main: purple.A200,
    },
    error: {
      main: red.A400,
    },
    info: {
      main: yellow.A700
    }
  },
});

export default theme;
