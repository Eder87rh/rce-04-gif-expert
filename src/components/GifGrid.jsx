import React, { Fragment, useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=soXz1NLb78YNgSKULGMJf1ez0iQXdGnF";
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }));

    console.log(gifs);
    setImages(gifs);
  };

  return (
    <Fragment>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image}>
            {image.title}
          </GifGridItem>
        ))}
      </div>
    </Fragment>
  );
};

export default GifGrid;
