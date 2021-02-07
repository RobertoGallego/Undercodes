import React from 'react';
import { Grid } from '@material-ui/core';

const FooterSlider = () => {
    return (
        <Grid container direction="row" alignItems="center" justify="space-evenly">
            <Grid style={{color: "#777777"}}>
                #Developer
            </Grid>
            <Grid style={{color: "#777777"}}>
                #From Scratch
            </Grid>
            <Grid style={{color: "#777777"}}>
                #2021 All Rights Reserved
            </Grid>
        </Grid>
    )
}

export default FooterSlider;
