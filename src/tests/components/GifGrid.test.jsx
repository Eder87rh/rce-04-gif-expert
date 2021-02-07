import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('GifGrid', () => {

  it('should load correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category="Category" />);
    expect(wrapper).toMatchSnapshot();
  });  

  it('should show items when load images useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/dasdasdasd.jpg',
      title: 'sdadasdasd'
    }];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category="Category" />);
    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
  
})
