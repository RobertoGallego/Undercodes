import React from "react";

import { Grid, Typography } from '@material-ui/core';

import useStyles from "assets/styles/main";

const TextSlider = () => {
    const styles = useStyles();

    return (
        <Grid container className={styles.rootSlider}>
            <Grid>
                <Typography variant="h2" className={styles.topSliderfirstTitle}>
                    C R E A T I V E
                </Typography>
            </Grid>
            <Grid>
                <Typography variant="h3" className={styles.topSlidersecondTitle}>
                    Wild mind & disciplined eye
                </Typography>
            </Grid>
            <Grid>
                <Typography variant="h4" className={styles.topSliderthirdTitle}>
                    Welcome to my portfolio
                </Typography>
            </Grid>
        </Grid>
    )
}

export default TextSlider;
