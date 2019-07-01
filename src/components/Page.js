/** 
 * Component for rendering a page of this application 
 */
import React from 'react';
import bemmit from 'bemmit';
import {
  Button,
  Loading,
} from 'carbon-components-react';
import Block from './Block';

export const getClass = bemmit('page');

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.fetchBlocks = this.fetchBlocks.bind(this);

    this.state = {
      blockInfo: {},
    };
  }

  fetchBlocks() {
    console.log('Clicked fetchBlocks');
    this.setState({
      blockInfo: {
        blockOne: "Info",
      }
    });
  }

  renderBlocks(info) {
    if (!info) {
      return '';
    }

    return Object.keys(info).length !== 0
      ? (
        <Block
          info={info}
        />
      )
      : '';
  }

  render() {
    const { isLoadingBlocks } = this.props;
    const { blockInfo } = this.state;

    const loadingIndicator = isLoadingBlock
      ? (
        <Loading withOverlay={false} />
      )
      : '';

    return (
      <div className={getClass()}>
        {this.renderBlocks(blockInfo)}
        <Button onClick={this.fetchBlocks}>
          Load
        </Button>
        {loadingIndicator}
      </div>
    );
  }
}

export default Page;
