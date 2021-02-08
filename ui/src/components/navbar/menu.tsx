import React from "react";
import { Link } from "react-router-dom";

import {Box, Grid, Typography } from "@material-ui/core";

import useStyles from "assets/styles/navigation";

interface Props {
}

const Menu = (props: Props) => {
    const styles = useStyles();

    return (
            <Typography component="div" color="primary" variant="button" gutterBottom>
                <Grid container item direction="row" alignItems="center" justify="center">
                    <Link className={styles.menuButtonHover} to="/about">
                        <Box className={styles.menuButtonMain} color="text.primary">A PROPOS</Box></Link>
                    <Link className={styles.menuButtonHover} to="/portfolio">
                        <Box className={styles.menuButtonMain} color="text.primary">PORTFOLIO</Box>
                    </Link>
                    <Link className={styles.menuButtonHover}  to="/contact">
                        <Box className={styles.menuButtonMain} color="text.primary">CONTACT</Box>
                    </Link>
                    {/* <Link className={styles.menuButton} href="/videos">Videos</Link>
                    <Link className={styles.menuButton} href="/new-video">Create a New Video</Link> */}        
                </Grid>
            </Typography>
    )
}

export default Menu
