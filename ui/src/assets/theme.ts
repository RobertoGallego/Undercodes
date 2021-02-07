import { createMuiTheme } from "@material-ui/core/styles";
import { Shadows } from "@material-ui/core/styles/shadows";

const theme = () =>
    createMuiTheme({
        palette: {
            type: "light",
            primary: {
                main: "#252525",
            },
            secondary: {
                main: "#f96566",
            },
            background: {
                default: "#ededed"
            },
            text: {
               primary: "#000"
            }
        },
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
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
            body2: {
                '@media (max-width: 414px)': {
                    fontSize: '0.8rem',
                },
            },
            button: {
                fontStyle: 'bold',
            },
            h2: {
                fontSize: '2.8rem',
                '@media (min-width: 600px)': {
                    fontSize: '3.5rem',
                },
                '@media (max-width: 414px)': {
                    fontSize: '2rem',
                },
            },
            h3: {
                fontSize: '1.5rem',
                '@media (min-width: 600px)': {
                    fontSize: '1.8rem',
                },
                '@media (max-width: 414px)': {
                    fontSize: '1.1rem',
                },
            },
            h4: {
                fontSize: '1rem',
                '@media (min-width: 600px)': {
                    fontSize: '1.5rem',
                },
                '@media (max-width: 414px)': {
                    fontSize: '0.8rem',
                },
            }
        },
        shadows: Array(25).fill("none") as Shadows
});

export default theme;

// #1A2238#9DAAF2#FF6A3D#F4DB7D
// #feda6a#d4d4dc#393f4d#1d1e22
// #c1432e#4b6777#ce9e62#2c2c2c
// #f96566#777777#252525#ffffff#ededed#000000#494949