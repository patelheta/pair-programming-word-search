const wordSearch = (letters, word) => {
  if (letters.length === 0 || !Array.isArray(letters)) {
    return undefined;
  }
  // Horizontal
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // Vertical
  const vertical = letters[0].map((col, colIndex) => letters.map(row => row[colIndex]));
  const verticalJoin = vertical.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;