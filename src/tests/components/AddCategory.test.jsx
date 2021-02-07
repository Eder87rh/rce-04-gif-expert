import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test in AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  it("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should change the textbox", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });
  });

  it("should not post data when submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  it('should call setCategories and clien the textField', () => {
    wrapper.find('input').simulate('change', { target: { value: 'New value' } } );
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    const textValue = wrapper.find('input').text();
    expect(textValue).toBe('');
  })
  
});
