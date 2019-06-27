/**
 * Main Container of project
 */
import React from 'react';

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
    return '';
  }

  renderBlocks(info) {
    return info;
  }

  render() {
    return (
      <div>
        Test App
      </div>
    );
  }
}

export default MainContainer;
