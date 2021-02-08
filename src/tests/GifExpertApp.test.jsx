import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("GifExpertApp", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show a list of categories', () => {
    const categories = ['One punch', 'Dragon ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })
  
});
