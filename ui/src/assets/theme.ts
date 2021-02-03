import { createMuiTheme } from "@material-ui/core/styles";
import { Shadows } from "@material-ui/core/styles/shadows";

// interface {}

const theme = () =>
    createMuiTheme({
        palette: {
            type: "light",
            primary: {
                main: "#252525",
            },
            secondary: {
                main: "#494949",
            },
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
            button: {
                fontStyle: 'bold',
            },
        },
        shadows: Array(25).fill("none") as Shadows
});

export default theme;

// #1A2238#9DAAF2#FF6A3D#F4DB7D
// #feda6a#d4d4dc#393f4d#1d1e22
// #c1432e#4b6777#ce9e62#2c2c2c
// #f96566#777777#252525#ffffff#ededed#000000#494949