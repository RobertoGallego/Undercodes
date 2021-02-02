import { createMuiTheme } from '@material-ui/core/styles';
import { Shadows } from "@material-ui/core/styles/shadows";
import React from 'react';

// interface {}

const darkTheme = () =>
      createMuiTheme({
        palette: {
          type: 'dark',
        },
        shadows: Array(25).fill("none") as Shadows
      });

export default darkTheme;
