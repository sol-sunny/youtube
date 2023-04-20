import React from "react";
import Youtube from "../api/youtube";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const youtube = new Youtube();
  const { data: videos } = useQuery(["related", id], () =>
    youtube.relatedVideos(id)
  );

  return (
    <>
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
