import React from 'react'
import { Route, Switch } from "react-router-dom";

import { Grid } from '@material-ui/core';

import Undercodes from "components/homepage/undercodes";
import About from "components/about/about";
import Portfolio from "components/portfolio/portfolio";
import Contact from "components/contact/contact";

import VideoList from "components/videos/videoList";
// import ArticlesList from "components/articles/articleList";
import VideoForm from "components/videos/videoForm";

import useStyles from "assets/styles/main";

const Routes = () => {
    const styles = useStyles();

    return (
        <Grid container justify="center" alignItems="flex-start" className={styles.root}>
            <Switch>
                <Route exact path="/" component={Undercodes} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/videos" component={VideoList} />
                {/* <Route exact path="/articles" component={ArticlesList} /> */}
                <Route exact path="/new-video" component={VideoForm} />
                <Route path="/update/:id" component={VideoForm} />
            </Switch>
        </Grid>
    )
}

export default Routes;
