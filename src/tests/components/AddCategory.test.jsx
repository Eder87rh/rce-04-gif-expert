import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test in AddCategory", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  it("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should change the textbox", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });
  });
});
