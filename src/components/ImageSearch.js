import React, { useState } from "react";

export const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="mt-20">
      <form onSubmit={onSubmit} className="w-fit mx-auto border-b-2 pb-2">
        <input
          type="text"
          className="focus:outline-none mr-16"
          placeholder="Search for an image..."
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-teal-500 rounded px-4 py-1 text-white transition hover:bg-teal-600"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};
