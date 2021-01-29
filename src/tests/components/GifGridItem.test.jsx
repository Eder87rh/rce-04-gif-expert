import { shallow } from "enzyme";
import React from "react";
import GifGridItem from "../../components/GifGridItem";
import toJson from "enzyme-to-json";

describe("GidGridItem.jsx", () => {
  const title = "title";
  const url = "https://url.com/image.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  it("Component should display correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Should have a paragraph with title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  it("Should have the image equal to url and props", () => {
    const img = wrapper.find("img");
    // console.log(img.props("src"));
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  it("should have animate__fadeIn class", () => {
    const div = wrapper.find("div");
    expect(div.prop("className")).toBe(
      "card animate__animated animate__fadeIn"
    );
  });
});
