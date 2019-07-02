/** 
 * Test file for components/Info.js
 */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Info, {
  getClass,
} from '../../components/Info';

configure({ adapter: new Adapter() });
const renderInfo = props => shallow(<Info {...props}/>);

describe('Component: Info', () => {
  const wrapper = renderInfo({});
  it('should render with expected className', () => {
    expect(wrapper.hasClass(getClass())).toEqual(true);
  });

  describe('Label section', () => {
    it('should render with correct className', () => {
      expect(wrapper.find(`.${getClass('label')}`).length).toEqual(1);
    });

    it('should render with default values', () => {
      expect(wrapper.find(`.${getClass('label')}`).text()).toEqual('Info:');
    });

    it('should render with default value if label is empty', () => {
      const dataWrapper = renderInfo({ label: '' });
      expect(dataWrapper.find(`.${getClass('label')}`).text()).toEqual('Info:');
    });

    it('should render with passed in label prop when given (with : appended)', () => {
      const dataWrapper = renderInfo({ label: 'Label' });
      expect(dataWrapper.find(`.${getClass('label')}`).text()).toEqual('Label:');
    });
  });

  describe('Info section', () => {
    it('should render with correct className', () => {
      expect(wrapper.find(`.${getClass('info')}`).length).toEqual(1);
    });

    it('should render with default values', () => {
      expect(wrapper.find(`.${getClass('info')}`).text()).toEqual('-');
    });

    it('should render with passed in info prop when given', () => {
      const dataWrapper = renderInfo({ info: 'test-info' });
      expect(dataWrapper.find(`.${getClass('info')}`).text()).toEqual('test-info');
    });
  });
});
