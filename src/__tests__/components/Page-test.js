/**
 * Test file for components/Page.js
 */
import React from 'react';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow,
} from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import * as BlockActions from '../../actions/blocks';
import Page, {
  getClass,
} from '../../components/Page';

const sandbox = sinon.createSandbox();
const dispatchStub = sandbox.stub();
const fetchStub = sandbox.stub(BlockActions, 'fetchBlocks');

const initialState = {
  block: {
    blocks: [],
    isLoadingBlocks: false,
  },
};

configure({ adapter: new Adapter() });
const getStore = (state) => {
  const mockStore = configureMockStore();
  const store = mockStore(state);
  store.dispatch = dispatchStub;
  return store;
}

const renderPage = (store, props) => shallow(
  <Provider store={store}>
    <Page {...props} />
  </Provider>
);

describe('Component: Page', () => {
  let wrapper;
  let store;
  const testTitle = 'test';
  
  beforeEach(() => {
    sandbox.resetHistory();
    store = getStore(initialState);
    wrapper = renderPage(store, {title: testTitle});
  });

  afterAll(() => {
    sandbox.restore();
  });

  it('should render without exploding', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should set the classes for the wrapper', () => {
    expect(wrapper.render().hasClass(getClass())).toEqual(true);
  });

  it('should render Page as a connected component', () => {
    expect(wrapper.find('Connect(Page)').length).toEqual(1);
  });

  it('should render with test title', () => {
    expect(wrapper.dive().props().title).toEqual(testTitle);
  });
});