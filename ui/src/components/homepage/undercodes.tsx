import React from "react";

import { Grid } from "@material-ui/core";
import { TiSocialFacebook, TiSocialGithub, TiSocialLinkedin } from 'react-icons/ti';

import SocialIcon from "components/homepage/socialIcon";
import HomePage from "components/homepage/homePage";

import useStyles from "assets/styles/main";

const Undercodes = () => {
    const styles = useStyles();
    
    return (
        <Grid xs={12} className={styles.root} container direction="row" justify="center" alignItems="center">
            <Grid 
                container 
                direction="column" 
                justify="center" 
                alignItems="center"
                xs={2} sm={2} md={2} lg={2} xl={3}
                color="secondary"
                className={styles.homeSocialIconPosition}
            >
                <SocialIcon urlTo={"/"} iconComponent={<TiSocialLinkedin size="30" className={styles.homeSocialIcons}/>}/>
                <SocialIcon urlTo={"/"} iconComponent={<TiSocialGithub size="30" className={styles.homeSocialIcons}/>}/>
                <SocialIcon urlTo={"/"} iconComponent={<TiSocialFacebook size="30" className={styles.homeSocialIcons}/>}/>
            </Grid>
            <Grid container xs={10} sm={10} md={10} lg={8} xl={6}>
                <HomePage/>
            </Grid>
            <Grid lg={2} xl={3} />
        </Grid>
    )
}

export default Undercodes;
