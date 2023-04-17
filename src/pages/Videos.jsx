import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  return <div>videos 메인화면 {keyword ? `${keyword}` : "🔥"}</div>;
}
