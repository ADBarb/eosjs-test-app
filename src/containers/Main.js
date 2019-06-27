/**
 * Main Container of project
 */
import React from 'react';
import { Button } from 'carbon-components-react';

export const className = 'main-container';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetchBlocks = this.fetchBlocks.bind(this);

    this.state = {
      blockInfo: {},
    };
  }

  fetchBlocks() {
    console.log('Clicked fetchBlocks');
    return '';
  }

  renderBlocks(info) {
    if (!info) {
      return '';
    }

    return Object.keys(info).length !== 0
      ? (
        <div>
          {info}
        </div>
      )
      : '';
  }

  render() {
    const { blockInfo } = this.state;

    return (
      <div className={className}>
        {this.renderBlocks(blockInfo)}
        <Button onClick={this.fetchBlocks}>
          Load
        </Button>
      </div>
    );
  }
}

export default MainContainer;
