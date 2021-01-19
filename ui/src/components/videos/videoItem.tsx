import React from "react";
import { useHistory } from "react-router-dom"

import * as videoService from "./videoService";
import { Video } from "./video";

import useStyles from "../../assets/styles/videoItem";

interface Props {
    video: Video;
    loadVideos: () => void;
}

const VideoItem = (props: Props) => {
    const styles = useStyles(props);

    const { video, loadVideos } = props;

    const history = useHistory();

    const handleDelete = async (id: string) => {
        await videoService.deleteVideoById(id);
        loadVideos();
    };

     return (
        <div className={ styles.videoCard } style={{ border: "1px, solid, #255AAA", color: "black" }}>
            <div className="">
                <div className="">
                    <span className="" style={{ color: "red", cursor: "pointer" }} onClick={() => video._id && handleDelete(video._id)}>
                        X
                    </span>
                    <h5 style={{ cursor: "pointer" }} onClick={() => history.push(`/update/${video._id}`)}>{video.title}</h5>
                </div>
                <p>{video.description}</p>
            </div>
        </div>
    );
};

export default VideoItem;
