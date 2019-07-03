/** 
 * Block Component
 *
 * Shows info of individual block (ID, timestamp, action count).
 * onClick() will show expanded view and include raw details of block output.
 */
import React from 'react';
import bemmit from 'bemmit';
import {
  AccordionItem,
  CodeSnippet,
} from 'carbon-components-react';
import Info from './Info';
import { copyToClipboard } from '../utils';

export const getClass = bemmit('block');

export default function Block({ data }) {
  if (!data) {
    return '';
  }

  const actionCount = data.transactions.length || '-';
  const id = data.id || '-';
  const timestamp = data.timestamp || '-';
  const basicInfo = (
    <div className={getClass('basic-info')}>
      <Info label="ID" info={id}/>
      <Info label="Timestamp" info={timestamp} />
      <Info label="Actions" info={actionCount} />
    </div>
  );

  const replacer = (name, val) => {
    if (Array.isArray(val)) {
      return val.map((v) => {
        if (typeof v === 'object') {
          const oneLiner = Object.entries(v).map((e) => {
            return e.join(': ');
          }).join(', ');
          return `{ ${oneLiner} }`;
        }
        return v;
      });
    }
    return val;
  };

  const blockData = JSON.stringify(data, replacer, 2);

  return (
    <div className={getClass()}>
      <AccordionItem title={basicInfo}>
        <div className={getClass('expanded')}>
          <CodeSnippet
            ariaLabel="Block information"
            className={getClass('output')}
            copyButtonDescription="Copy Block info"
            copyLabel="Copy Block info"
            onClick={() => copyToClipboard(JSON.stringify(data, undefined, 2))}
            type="multi"
          >
            {blockData}
          </CodeSnippet>
        </div>
      </AccordionItem>
    </div>
  );
}
