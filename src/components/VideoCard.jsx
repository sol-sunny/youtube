import React from "react";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import { useNavigate } from "react-router-dom";

register("ko", koLocale);

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";

  return (
    <li
      className={isList ? "flex gap-1 m-2" : ""}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video: video } });
      }}
    >
      <img
        className={isList ? "w-60 mr-4 ml-4" : "w-full"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p>{format(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
