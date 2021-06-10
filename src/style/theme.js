import React, { useContext } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {DataContext} from "../context/dataContext"

const Palette = ({children}) => {

    const {darkMode} = useContext(DataContext)

    const theme = createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
          primary: {
            main: '#ec1d25',
          },
          secondary: {
            main: '#9e9e9e',
          },
          
        },
      });

    return ( 
        <>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
        </>
     );
}
 
export default Palette;