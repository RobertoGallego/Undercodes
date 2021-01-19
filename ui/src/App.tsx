import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "components/navbar/navigation";
import Undercodes from "components/homepage/undercodes";
import ArticlesList from "components/articles/articleList";
import Navbar from "components/navbar/navbar";
import VideoList from "components/videos/videoList";
import VideoForm from "components/videos/videoForm";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Navigation />
        <Switch>
            <Route exact path="/" component={Undercodes} />
            <Route exact path="/videos" component={VideoList} />
            <Route exact path="/articles" component={ArticlesList} />
            <Route path="/new-video" component={VideoForm} />
            <Route path="/update/:id" component={VideoForm} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
