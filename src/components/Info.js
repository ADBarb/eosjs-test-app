/** 
 * Info component. 
 */
import React from 'react';
import bemmit from 'bemmit';

export const getClass = bemmit('info');

export default function Info({
  label,
  info,
}) {
  const noLabel = typeof label === 'undefined' || label === '';
  const key =  noLabel ? 'Info:' : `${label}:`;
  const value = info || '-';
  return (
    <div className={getClass()}>
      <div className={getClass('label')}>
        {key}
      </div>
      <div className={getClass('info')}>
        {value}
      </div>
    </div>
  );
}
