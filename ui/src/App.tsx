import React from 'react';
import { BrowserRouter } from "react-router-dom";

import { Button, CssBaseline, Grid } from "@material-ui/core";

import Navigation from "components/navbar/navigation";
import Routes from "routes";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from "assets/theme";
import darkTheme from "assets/darkTheme";
import { shallowEqual, useSelector } from "react-redux";

function App() {

    const settings: ThemeSetting[] = useSelector(
        (state: ThemeState) => state.options,
        shallowEqual
    )

    const switchTheme = (state: ThemeState) => state.options[0].switchTheme
    const themeSetting = useSelector(switchTheme)

    console.log("-==>", themeSetting, settings);

    return (
        <ThemeProvider theme={themeSetting ? darkTheme() : theme()}>
            <CssBaseline />
            <BrowserRouter>
                <Grid container direction="column">
                    <Grid item container xs={12}>
                        {/* <Navbar /> */}
                        <Navigation />
                    </Grid>
                    <Grid>
                        <Routes/>
                    </Grid>
                    <Grid>
                        {/* Footer */}
                    </Grid>
                </Grid>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
