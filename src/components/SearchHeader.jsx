import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  useEffect(() => setText(keyword || ""), [keyword]);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`); //뒤로가기 누르면 검색창 히스토리 저장
  };
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to={"/"} className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-500"
          type="text"
          placeholder="search..."
          value={text}
          onChange={handleChange}
        />
        <button className="bg-zinc-600 px-4">   
        {/* padding p-4는 4면, px는 양옆 */}
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
