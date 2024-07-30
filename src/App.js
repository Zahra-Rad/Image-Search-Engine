import React, { useEffect, useState } from "react";
import { ImageSearch } from "./components/ImageSearch";
import { ImageCard } from "./components/ImageCard";

const App = () => {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=45168623-8351e73a87aa630977d501608&q=${item}&image_type=photo&pretty=true`
    )
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject(Error);
      })
      .then((data) => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [item]);

  return (
    <>
      <ImageSearch searchText={(text) => setItem(text)} />

      {(!isLoading && image.length == 0) && (
        <h1 className="text-6xl text-center mx-auto mt-32">NOT FOUND</h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 p-32">
          {image.map((image) => {
            return <ImageCard key={image.id} image={image} />;
          })}
        </div>
      )}
    </>
  );
};

export default App;
