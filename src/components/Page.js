/** 
 * Component for rendering a page of this application 
 */
import React from 'react';
import bemmit from 'bemmit';
import { connect } from 'react-redux';
import {
  Button,
  Loading,
} from 'carbon-components-react';
import * as Actions from '../actions/blocks';
import Block from './Block';

export const getClass = bemmit('page');

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.fetchBlocks = this.fetchBlocks.bind(this);
  }

  fetchBlocks() {
    this.props.dispatch(Actions.getInfo());
  }

  renderBlocks() {
    const { blocks } = this.props;
    if (blocks && blocks.length === 0) {
      return '';
    }

    return blocks.map((block) => {
      const info = { 
        id: block.chain_id || '-',
      };
      return (
        <Block info={info}/>
      );
    });
  }

  render() {
    const { isLoading, title } = this.props;
    const titleDiv = title ? (<div className={getClass('title')}>{title}</div>) : '';
    const loadingIndicator = isLoading
      ? (
        <Loading className={getClass('loader')} small withOverlay={false} />
      )
      : '';
    const loadingText = isLoading ? "Loading..." : "Load";

    return (
      <div className={getClass()}>
        {titleDiv}
        <div className={getClass('loading-section')}>
          <Button
            className={getClass('button')}
            disabled={isLoading}
            onClick={this.fetchBlocks}
          >
            {loadingText}
          </Button>
          {loadingIndicator}
        </div>
        {this.renderBlocks()}
      </div>
    );
  }
}

const mapStateToProps = (state = {}) => {
  const { block } = state;
  const {
    blocks,
    isLoadingBlocks,
  } = block;

  return {
    blocks,
    isLoading: isLoadingBlocks,
  };
}
export default connect(mapStateToProps)(Page);
