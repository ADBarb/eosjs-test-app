/** 
 * Test file for components/Block.js
 */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Block, {
  getClass,
} from '../../components/Block';
import { testBlockData } from '../../fixtures/blocks';

configure({ adapter: new Adapter() });
const renderBlock = props => shallow(<Block {...props}/>);

describe('Component: Block', () => {
  const wrapper = renderBlock({ data: testBlockData });
  it('should render with expected className', () => {
    expect(wrapper.hasClass(getClass())).toEqual(true);
  });

  it('should not render if data is not given', () => {
    const nullWrapper = renderBlock();
    expect(nullWrapper.find(`.${getClass()}`).length).toEqual(0);
  });

  describe('AccordionItem component', () => {
    it('should render as expected', () => {
      expect(wrapper.find('AccordionItem').length).toEqual(1);
    });
    
    describe('Expanded section', () => {
      it('should render div with expected className in expected location', () => {
        expect(wrapper
          .find('AccordionItem')
          .find(`.${getClass('expanded')}`)
          .length
        ).toEqual(1);
      });

      describe('CodeSnippet', () => {
        const codeSnippet = wrapper.find(`.${getClass('expanded')}`).find('CodeSnippet');
        it('should render with expected props', () => {
          expect(codeSnippet.props()).toMatchObject({
            ariaLabel: "Block information",
            className: getClass('output'),
            copyButtonDescription: "Copy Block info",
            copyLabel: "Copy Block info",
            onClick: expect.any(Function),
            type: "multi"
          });
        });
      });
    });
  });
});