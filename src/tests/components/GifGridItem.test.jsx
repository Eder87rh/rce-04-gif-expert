import { shallow } from "enzyme";
import React from "react";
import GifGridItem from "../../components/GifGridItem";
import toJson from "enzyme-to-json";

describe("GidGridItem.jsx", () => {
  it("Component should display correctly", () => {
    const title = "title";
    const url = "https://url.com/image.jpg";
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
