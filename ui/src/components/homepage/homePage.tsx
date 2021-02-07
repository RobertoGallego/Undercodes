import React from 'react'

// import { AnimateKeyframes } from "react-simple-animate";
import { Grid, Typography } from '@material-ui/core';

import TextSlider from "components/homepage/textSlider";
// import FooterSlider from "components/homepage/footerSlider";

import useStyles from "assets/styles/main";

import logo from "assets/images/robotplay.png";
import logoDevice from "assets/images/mobiledeviceslogo.png";

const HomePage = () => {
    const styles = useStyles();
    const sliderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur sollicitudin tellus in cursus donec interdum quam vitae lorem mattis maximus. Duis nunc massa euismod sed mauris et, euismod luctus ante. Vivamus luctus justo egestas scelerisque euismod, lacus augue porta arcu eget ultrices ante ante bibendum massa";

    return (
        <Grid className={styles.root} container>
            <Grid container>
                <Grid 
                    container alignItems="center"
                    xs={12} sm={12} md={6} lg={6}
                >   
                    <TextSlider/>
                </Grid>
                <Grid 
                    container alignItems="center" justify="center"
                    xs={12} sm={12} md={6} lg={6}
                > 
                    <picture className={styles.TopSliderImage}>
                        <source srcSet={`${logo} 2x`}  media="(max-width: 600px)" /> 
                        <img srcSet={`${logo} 1.2x`} alt=""/>
                    </picture>
                    <picture className={styles.TopSliderImageMobileDevice}>
                        <source srcSet={`${logoDevice} 2x`}  media="(max-width: 414px)" /> 
                        <img srcSet={`${logoDevice} 1.2x`} alt=""/>
                    </picture>
                </Grid>
            </Grid>
            <Grid container xs={12} sm={12} md={12}>
                <Grid sm={1} md={2} xl={1} />
                <Grid xs={11} sm={10} md={9} xl={10} container justify="flex-end" alignItems="flex-end">
                    <Grid>
                        <Typography variant="h3" className={styles.bottomSliderTitle}>
                            Lorem ipsum dolor sit
                        </Typography>
                    </Grid>
                    <Grid container justify="flex-end" alignItems="flex-end">
                        <Typography variant="body2" className={styles.bottomSliderText}>
                            { sliderText }
                        </Typography>
                        <Typography variant="body2" className={styles.bottomSliderTextMobile}>
                            { sliderText.substring(0, 150) }...
                        </Typography>
                    </Grid>
                </Grid>
                <Grid xs={1} sm={1} md={1} xl={1} />
            </Grid>
            {/* <AnimateKeyframes
                    play={true}
                    // delay={0.1}
                    duration={1}
                    iterationCount={1}
                    keyframes={[
                        { 100: 'opacity: 1' },
                        // { 50: 'opacity: 0.5' },
                        { 0: 'opacity: 0' },
                        
                        'transform: translateX(0)',
                        'transform: translateX(1000px)',
                    ]}
                >
                    Homepage
                </AnimateKeyframes> */}
        </Grid>
    )
}

export default HomePage;

