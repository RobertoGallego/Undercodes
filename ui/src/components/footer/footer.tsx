import React from 'react'
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { themeSettings } from "redux/action/creators";

import {  Grid, IconButton } from "@material-ui/core";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import Menu from "components/navbar/menu";

import useStyles from "assets/styles/footer";

const Footer = () => {
    const styles = useStyles();
    const [checked, setChecked] = React.useState(false);
    const dispatch: Dispatch<any> = useDispatch();
    const switchTheme = (state: ThemeState) => state.options[0].switchTheme;
    const themeSetting = useSelector(switchTheme);

    const toggleChecked = (event: any) => { 
        // event.preventDefault()
        setChecked((prev) => !prev);        
        
        if (checked) {
            dispatch(themeSettings({switchTheme: false}));
        } else {
            dispatch(themeSettings({switchTheme: true}));
        }
    }

    return (
        <Grid className={styles.root} container>
            <Grid sm={1} md={1} lg={2} xl={3} />
            <Grid xs={12} sm={10} md={10} lg={8} xl={6} container justify="space-between" alignItems="center">
                <Grid className={styles.footerContainerLeft}>
                    <Menu/>
                </Grid>
                <IconButton className={styles.footerContainerRight} >
                    { !themeSetting ? <Brightness7Icon onClick={toggleChecked}/> : <Brightness4Icon onClick={toggleChecked}/>}
                </IconButton>
            </Grid>
            <Grid sm={1} md={1} lg={2} xl={3} />
        </Grid>
    )
}

export default Footer;
