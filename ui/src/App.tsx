import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

import Routes from "routes";

import Navigation from "components/navbar/navigation";
import Footer from "components/footer/footer";

import { CssBaseline, Grid } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "assets/theme";
import darkTheme from "assets/darkTheme";
import useStyles from 'assets/styles/rootStyle';

function App() {
    const styles = useStyles();

    const settings: ThemeSetting[] = useSelector(
        (state: ThemeState) => state.options,
        shallowEqual
    )

    const switchTheme = (state: ThemeState) => state.options[0].switchTheme
    const themeSetting = useSelector(switchTheme)

    console.log("===>", themeSetting, settings);

    return (
        <ThemeProvider theme={themeSetting ? darkTheme() : theme()}>
            <CssBaseline />
            <BrowserRouter>
                <Grid container direction="column" className={styles.root}>
                    <Grid item container xs={12}>
                        <Navigation />
                    </Grid>
                    <Grid item container xs={12}>
                        <Routes/>
                    </Grid>
                    <Grid item container xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
