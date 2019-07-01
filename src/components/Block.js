/** 
 * Block Component
 *
 * Shows info of individual block (ID, timestamp, action count).
 * onClick() will show expanded view and include raw details of block output.
 */
import React from 'react';
import bemmit from 'bemmit';
import {
  ExpandableTile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent,
} from 'carbon-components-react';

export const getClass = bemmit('block');

class Block extends React.Component {
  render() {
    const {
      info
    } = this.props;

    console.log('Block info:', info);

    return (
      <div className={getClass()}>
        <ExpandableTile
          tileCollapsedIconText="Expand block details"
          tileExpandedIconText="Collapse block details"
        >
          <TileAboveTheFoldContent>
            Block details
          </TileAboveTheFoldContent>
          <TileBelowTheFoldContent>
            Expanded View
          </TileBelowTheFoldContent>
        </ExpandableTile>
      </div>
    );
  }
}

export default Block;
