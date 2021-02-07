import React, { useState } from 'react'

import { 
    Card, 
    CardActionArea, 
    Grid, 
    Hidden, 
    Typography 
} from '@material-ui/core';

import useStyles from "assets/styles/portfolio";

import portfolioExample from "assets/images/portfolioExample.jpg";

import {useSpring, animated } from 'react-spring'

const Portfolio = () => {
    const styles = useStyles();

    const portfolio = [{   
            id: 1,
            title: "Article example",
            body: "This is a portolio example"
        }, {
            id: 2,
            title: "Article example",
            body: "This is a portolio example"
        }, {
            id: 3,
            title: "Article example",
            body: "This is a portolio example"
        }, {
            id: 4,
            title: "Article example",
            body: "This is a portolio example"
        },
        {
            id: 5,
            title: "Article example",
            body: "This is a portolio example"
        },
        {
            id: 6,
            title: "Article example",
            body: "This is a portolio example"
        },
        {
            id: 7,
            title: "Article example",
            body: "This is a portolio example"
        },
        {
            id: 8,
            title: "Article example",
            body: "This is a portolio example"
        },
        {
            id: 9,
            title: "Article example",
            body: "This is a portolio example"
        },
        {
            id: 10,
            title: "Article example",
            body: "This is a portolio example"
        },
        {
            id: 11,
            title: "Article example",
            body: "This is a portolio example"
        },
        {
            id: 12,
            title: "Article example",
            body: "This is a portolio example"
        },
    ];

    const PortfolioCard = (portfolio: any) => {
        const [rightMenuVisible, setRightMenuVisible] = useState(false);
        const [imageMenuSlice, setImageMenuSlice] = useState(false);

        const rightMenuAnimation = useSpring({
            opacity: rightMenuVisible ? 1 : 0,
            transform: rightMenuVisible ? `translateY(0)` : `translateY(100%)`
        });

        const imageMenuSliceAnimation = useSpring({
            transform: imageMenuSlice ? `translateY(0%)` : `translateY(10%)`
        });

        return (
            <Grid 
                onMouseOver={() => (setRightMenuVisible(true), setImageMenuSlice(true))}
                onMouseMove={() => (setRightMenuVisible(true), setImageMenuSlice(true))}
                onMouseOut={() => (setRightMenuVisible(false), setImageMenuSlice(false))} 
                className={styles.portfolioCardContainer}
            >
                <Card 
                    // style={{ maxWidth: 345 }}
                >
                    <CardActionArea>
                        <Grid className={styles.CardContainerAction}>
                            <animated.div
                                className={styles.CardContainerFirstAction}
                                style={imageMenuSliceAnimation}
                            >
                                <img src={ portfolioExample } width="335" height="255"/>  
                                <animated.div 
                                    className={styles.CardContainerSecondAction} 
                                    style={rightMenuAnimation}
                                >
                                    <Grid container alignItems="center" justify="center">
                                        <Typography variant="h6">
                                            LOREM IPSUM DOLOR SIT
                                        </Typography>
                                        <Typography variant="body2">
                                            Quisque consectetur sollicitudin donec.
                                        </Typography>
                                    </Grid>
                                </animated.div> 
                            </animated.div>
                            
                        </Grid>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    }

    return (
        <Grid className={styles.root} container>
            <Grid  lg={1} xl={2}/>
            <Grid container direction="column" xs={12} sm={12} md={12} lg={10} xl={8}>
                <Grid container alignItems="center" justify="space-between" className={styles.portfolioTopContainer}>
                    <Grid>
                        <Typography variant="body2"  className={styles.portfolioTopLeftText}>
                            ALL
                        </Typography>
                    </Grid>
                    <Hidden xsDown>
                        <Grid>
                            <Typography variant="body2"  className={styles.portfolioTopRightText}>
                                Sort portfolio:___Applications__Logo__Illustration
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Hidden smUp>
                        <Grid>
                            <Typography variant="body2"  className={styles.portfolioTopRightText}>
                                Sort -
                            </Typography>
                        </Grid>
                    </Hidden>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    { portfolio.map((portfolio) => {
                        return (
                            PortfolioCard(portfolio)
                        );
                    })}
                </Grid>
                <Grid container alignItems="center" justify="center" className={styles.portfolioBottomContainer}>
                    <Typography variant="body2"  className={styles.portfolioTopContainer}>
                        1 - 2 - 3
                    </Typography> 
                </Grid>
            </Grid>
            <Grid  lg={1} xl={2}/>
        </Grid>
    )
}

export default Portfolio;
