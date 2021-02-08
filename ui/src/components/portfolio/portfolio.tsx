import React, { useState } from 'react'

import { 
    Box,
    Card, 
    CardActionArea, 
    Grid, 
    Hidden, 
    Typography 
} from '@material-ui/core';
 
// import { DataGrid } from '@material-ui/data-grid';
import Pagination from '@material-ui/lab/Pagination';
 
import useStyles from "assets/styles/portfolio";

import portfolioExample from "assets/images/portfolioExample.jpg";
import a1 from "assets/images/1.jpg";
import a2 from "assets/images/2.jpg";
import a3 from "assets/images/3.jpg";
import a4 from "assets/images/4.jpg";
import a13 from "assets/images/13.jpg";
import a6 from "assets/images/6.jpg";
import a7 from "assets/images/7.jpg";
import a8 from "assets/images/8.jpg";
import a9 from "assets/images/9.jpg";
import a10 from "assets/images/10.png";
import a11 from "assets/images/11.jpg";

import {useSpring, animated } from 'react-spring'

const Portfolio = () => {
    const styles = useStyles();

    const portfolio = [{   
            id: 1,
            title: "Article example",
            body: "This is a portolio example",
            img: a13
        }, {
            id: 2,
            title: "Article example",
            body: "This is a portolio example",
            img: a1
        }, {
            id: 3,
            title: "Article example",
            body: "This is a portolio example",
            img: a2
        }, {
            id: 4,
            title: "Article example",
            body: "This is a portolio example",
            img: a3
        },
        {
            id: 5,
            title: "Article example",
            body: "This is a portolio example",
            img: a4
        },
        {
            id: 6,
            title: "Article example",
            body: "This is a portolio example",
            img: portfolioExample
        },
        {
            id: 7,
            title: "Article example",
            body: "This is a portolio example",
            img: a6
        },
        {
            id: 8,
            title: "Article example",
            body: "This is a portolio example",
            img: a7
        },
        {
            id: 9,
            title: "Article example",
            body: "This is a portolio example",
            img: a8
        },
        {
            id: 10,
            title: "Article example",
            body: "This is a portolio example",
            img: a9
        },
        {
            id: 11,
            title: "Article example",
            body: "This is a portolio example",
            img: a10
        },
        {
            id: 12,
            title: "Article example",
            body: "This is a portolio example",
            img: a11
        },
    ];

    const PortfolioCard = (portfolio: any, index: any) => {
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
                key={index}
                onMouseOver={() => ([setRightMenuVisible(true), setImageMenuSlice(true)])}
                onMouseMove={() => ([setRightMenuVisible(true), setImageMenuSlice(true)])}
                onMouseOut={() => ([setRightMenuVisible(false), setImageMenuSlice(false)])} 
                className={styles.portfolioCardContainer}
            >
                <Card className={styles.portfolioCard} variant="outlined">
                    <CardActionArea>
                        <Grid className={styles.CardContainerAction}>
                            <animated.div
                                className={styles.CardContainerFirstAction}
                                style={imageMenuSliceAnimation}
                            >
                                <img src={ portfolio.img } width="310" height="255" alt=""/>  
                                <animated.div 
                                    className={styles.CardContainerSecondAction} 
                                    style={rightMenuAnimation}
                                >
                                    <Grid container alignItems="center" justify="center">
                                        <Typography variant="h6" gutterBottom>
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
            <Grid item lg={1} xl={2}/>
            <Grid container direction="column" item xs={12} sm={12} md={12} lg={10} xl={8}>
                <Grid container className={styles.portfolioTopContainer}>
                    <Grid item sm={1} md={1} lg={1} xl={1} />
                    <Grid container item alignItems="center" justify="space-between" xs={12} sm={10} md={10} lg={10} xl={10}>
                        <Grid>
                            <Typography component="div" variant="body2"  className={styles.portfolioTopLeftText}>
                                <Box color="text.primary">
                                    ALL
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid>
                            <Hidden xsDown>
                                <Grid>
                                    <Typography component="div" variant="body2"  className={styles.portfolioTopRightText}>
                                        <Box color="text.primary">
                                            Sort portfolio:___Applications__Logo__Illustration
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Hidden>
                            <Hidden smUp>
                                <Grid>
                                    <Typography component="div" variant="body2"  className={styles.portfolioTopRightText}>
                                        <Box color="text.primary">
                                            Sort -
                                        </Box>
                                    </Typography>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                    <Grid item sm={1} md={1} lg={1} xl={1} />
                </Grid>
                <Grid container alignItems="center" justify="center">
                    { portfolio.map((portfolio, index) => {
                        // <PaginationItem  />
                        return (
                            PortfolioCard(portfolio, index)
                        );
                    })}
                </Grid>
                <Grid container alignItems="center" justify="center" className={styles.portfolioBottomContainer}>
                    <Typography component="div" variant="body2"  className={styles.portfolioTopContainer}>
                        {/* <DataGrid pageSize={5} rowsPerPageOptions={[5, 10, 20]} pagination {...data} /> */}
                        <Pagination count={3} {...portfolio} showFirstButton showLastButton shape="rounded"/>
                    </Typography> 
                </Grid>
            </Grid>
            <Grid item lg={1} xl={2}/>
        </Grid>
    )
}

export default Portfolio;
