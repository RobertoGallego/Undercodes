import React from 'react'
import { Route, Switch } from "react-router-dom";

import Undercodes from "components/homepage/undercodes";
import VideoList from "components/videos/videoList";
// import ArticlesList from "components/articles/articleList";
import VideoForm from "components/videos/videoForm";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Undercodes} />
                <Route exact path="/videos" component={VideoList} />
                {/* <Route exact path="/articles" component={ArticlesList} /> */}
                <Route path="/new-video" component={VideoForm} />
                <Route path="/update/:id" component={VideoForm} />
            </Switch>
        </div>
    )
}

export default Routes;
