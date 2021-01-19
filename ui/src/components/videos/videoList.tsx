import React, { useEffect, useState } from "react";

import * as videoService from "components/videos/videoService";
import { Video } from "components/videos/video";
import VideoItem from "components/videos/videoItem";

const VideoList = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    const loadVideos = async () => {
        const res = await videoService.getVideos();

        const formatedVideos = res.data.map((video) => {
            return {...video }
        });

        setVideos(formatedVideos);
    };

    useEffect(() => {
        loadVideos();
    }, []);

    if (videos.length === 0) {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>there are no videos yet</div>
        );
    }

    return (
        <div className="">
            { videos.map((video) => (
                <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
            ))}
        </div>
    );
};
  
export default VideoList;

