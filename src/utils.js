/**
 * Function found at https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f 
 */
export const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

/**
 * Replacer helper function for JSON.stringify()
 */
export const replaceParser = (name, val) => {
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
