import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

// import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid;
