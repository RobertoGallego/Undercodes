import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import * as videoService from "components/videos/videoService";
import { Video } from "components/videos/video";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
    id?: string;
}

const VideoForm = () => {
    const initialState = {
        title: "",
        description: "",
        url: "",
    };

    const [video, setVideo] = useState<Video>(initialState);

    const history = useHistory();
    const params = useParams<Params>();

    const getVideo = async (id: string) => {
        const res = await videoService.getVideoById(id);
        const { title, description, url } = res.data;
        setVideo({ title, description, url });
    };

    useEffect(() => {
        if (params.id) getVideo(params.id);
    }, [params.id]);

    const handleInputChange = (e: InputChange) => {
        setVideo({ ...video, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!params.id) {
            await videoService.createNewVideo(video);
            setVideo(initialState);

            console.log("new video added");
        } else {
            await videoService.updateVideo(params.id, video);
        }

        history.push("/videos");
    };

    return (
        <div className="">
            <div className="">
                <div className="">
                    <div className="" style={{ display: "flex", justifyContent: "center", backgroundColor: "#f2f2f2", padding: "30px", margin: "10px" }}>
                        <form onSubmit={handleSubmit}>
                            <h3>New Video</h3>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Write a Title for this video"
                                    className="form-control"
                                    autoFocus
                                    onChange={handleInputChange}
                                    value={video.title}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="url"
                                    placeholder="https://somesite.com"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={video.url}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="description"
                                    rows={3}
                                    className="form-control"
                                    placeholder="Write a description"
                                    onChange={handleInputChange}
                                    value={video.description}
                                />
                            </div>
                            { params.id ?
                                <button className="btn btn-info">Update</button>
                            :
                                <button className="btn btn-primary">Create</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoForm;
