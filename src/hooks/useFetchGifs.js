import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((images) => {
      console.log(
        "🚀 ~ file: useFetshGifs.js ~ line 13 ~ useEffect ~ images",
        images
      );
      setState({
        data: images,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
