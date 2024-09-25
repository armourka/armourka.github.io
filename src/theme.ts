import { createTheme, responsiveFontSizes } from '@mui/material/styles'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#cc00ff', // purple
    },
    secondary: {
      main: '#00ff00', //Lime
    },
    // defaults:
    // background: {
    //   default: "#121212",
    //   paper: "#121212"
    // },
    // common: {
    //   black: "#000",
    //   white: "#fff"
    // },
    //error, warning, info, success
    //
    // primary: {
    //   contrastText: "rgba(0, 0, 0, 0.87)",
    //   dark: "#42a5f5",
    //   light: "#e3f2fd",
    //   main: "#90caf9"
    // },
    // secondary: {
    //   contrastText: "rgba(0, 0, 0, 0.87)",
    //   dark: "#ab47bc",
    //   light: "#f3e5f5",
    //   main: "#ce93d8"
    // },
  },
  //Colors to add in:
  // Lime: #00ff00
  // Purple: #cc00ff

  //overrides
  typography: {
    h1: {
      fontFamily: 'Sixtyfour',
    },
    allVariants: {
      fontFamily: 'Source Code Pro',
    },
    // fontFamily: [
    //   'Sixtyfour'
    // ].join(','),
  },
  components: {
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    //didnt work but IMO should've
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 0,
    //     },
    //   }
    // },
    //no
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 0,
    //     },
    //   }
    // },
    //yes? i'm so confused it worked for a sec but isnt now
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
})
const demoTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#cc00ff', // purple
    },
    secondary: {
      main: '#00ff00', //Lime
    },
  },
})
export const defaultTheme = responsiveFontSizes(demoTheme)
export const theme = responsiveFontSizes(darkTheme)

// console.log(darkTheme)
