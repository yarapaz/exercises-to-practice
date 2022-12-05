function getSquareArea(side) {
  if (side === undefined) {
    return undefined;
  } else {
    return side * side;
  }
}
function getSquareTriangle(bottom, height) {
  return (bottom * height) / 2;
}

const objectToExport = {
  square: getSquareArea,
  triangle: getSquareTriangle,
};

export default objectToExport;
