import React, { useState } from "react";

export const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="shadow-lg shadow-gray-300">
      <img className="w-full" src={image.webformatURL} />
      <h1 className="text-indigo-500 pt-4 pb-2 px-6 text-sm lg:text-lg font-bold">
        Photo by {image.user}
      </h1>
      <div className="flex flex-col px-6 pb-2">
        <span>
          <strong>Views:</strong>
          &nbsp; {image.views}
        </span>
        <span>
          <strong>Downloads:</strong>
          &nbsp; {image.downloads}
        </span>
        <span>
          <strong>Likes:</strong>
          &nbsp; {image.likes}
        </span>
      </div>
      <div className="px-6 py-6 gap-y-2 flex flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-slate-200 rounded-full px-3 mr-3 py-1"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
