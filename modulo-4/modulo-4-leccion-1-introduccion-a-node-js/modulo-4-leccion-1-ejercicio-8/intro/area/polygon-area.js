const getTriangleArea = (base, height) => {
  return (base * height) / 2;
};

const getSquareArea = (base) => {
  return base * base;
};

//FORMA ANTIGUA - LA QUE TENEMOS QUE UTILIZAR TODAVÍA
module.exports = {
  getTriangleArea: getTriangleArea,
  getSquareArea: getSquareArea,
};

//FORMA MODERNA
// export default {
//   getTriangleArea: getTriangleArea,
//   getSquareArea: getSquareArea
// }

//Todo lo que no exporte será privado y todo lo que exporte será público
