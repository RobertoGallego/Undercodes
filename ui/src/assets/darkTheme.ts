import { createMuiTheme } from '@material-ui/core/styles';
import { Shadows } from "@material-ui/core/styles/shadows";

const darkTheme = () =>
      createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: "#f96566",
            },
            secondary: {
                main: "#777777",
            },
        },
        typography: {
            fontFamily: [
                'BlinkMacSystemFont',
                '-apple-system',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontSize: 16,
            subtitle1: {
                fontSize: 12,
            },
            body1: {
                fontWeight: 500,
            },
            button: {
                fontStyle: 'bold',
            },
        },
        shadows: Array(25).fill("none") as Shadows
      });

export default darkTheme;

// #f96566#777777#252525#ffffff#ededed#000000#494949