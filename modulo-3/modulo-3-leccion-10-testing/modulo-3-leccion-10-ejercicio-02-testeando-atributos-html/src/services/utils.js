function paddingLeft(string, finalLength, paddingItem) {
  if (finalLength > string.length) {
    return paddingItem.repeat(finalLength - string.length) + string;
  }
}

export default paddingLeft;
