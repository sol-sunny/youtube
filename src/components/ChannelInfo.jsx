import React from "react";
import Youtube from "../api/youtube";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
  const youtube = new Youtube();
  const { data: url } = useQuery(["channel", id], () =>
    youtube.channelImgURL(id)
  );

  return (
    <div className="flex my-4 mb-8 items-center">
      {url && <img className="w-12 h-12 rounded-full" src={url} alt={name} />}
      <div className="text-lg font-medium ml-2">{name}</div>
    </div>
  );
}
