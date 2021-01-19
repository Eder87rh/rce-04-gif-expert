import { shallow } from "enzyme";
import React from "react";
import GifGridItem from "../../components/GifGridItem";
import toJson from "enzyme-to-json";

describe("GidGridItem.jsx", () => {
  it("Component should display correctly", () => {
    const wrapper = shallow(<GifGridItem id="1" title="title" url="url" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
