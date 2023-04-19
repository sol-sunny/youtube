import React from "react";

export default function ChannelInfo({ id, name, img }) {

  return (
    <>
      <div>{<img src={img} alt={name} />}</div>
      <div>{name}</div>
    </>
  );
}
