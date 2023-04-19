import React from "react";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import { useNavigate } from "react-router-dom";

register("ko", koLocale);

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  return (
    <li onClick={() => {navigate(`videos/watch/${video.id}`, {state:{video: video}})}}>
      <img src={thumbnails.medium.url} alt={title} className="w-full"/>
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p>{format(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
