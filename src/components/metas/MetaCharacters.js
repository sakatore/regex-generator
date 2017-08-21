const META_CHARACTERS = ['\\.', '\\|', '\\^', '\\$', '\\*', '\\[', '\\]', '\\?', '\\+', '\\(', '\\)'];

const replaceMetaChar = (str) => {
  var escapeStr = str;
  META_CHARACTERS.forEach(meta => {
    const metaReg = new RegExp(meta, 'g');
    escapeStr = escapeStr.replace(metaReg, meta);
  });
  return escapeStr;
}

export default replaceMetaChar;
