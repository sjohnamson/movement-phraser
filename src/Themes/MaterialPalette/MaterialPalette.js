import { createTheme } from "@mui/material";

function materialPalette() {
    let theme = createTheme({
      palette: {
        primary: {
          main: '#DF9216'
        },
        secondary: {
          main: '#F1F9F5',
        },
        error: {
          main: '#ff312e',
        },
        warning: {
          main: '#d81e5b',
        },
        info: {
          main: '#2D3047',
        },
        success: {
          main: '#50858B'
        },
        contrastThreshold: 4.5,
        tonalOffset: 0.5,
      },
    });
  
    theme = createTheme(theme, {
      // Custom colors created with augmentColor 
      palette: {
        pink: theme.palette.augmentColor({
          color: {
            main: '#E08DAC',
          },
          name: 'pink',
        }),
      },
    });
    return theme;
  }

  export default materialPalette