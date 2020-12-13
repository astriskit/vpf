export const formatNum = (num, dec = 2) => {
  let n = Number(num.toFixed(dec)).toLocaleString({
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  if (!n.includes(".")) {
    n += ".00";
  }
  return n;
};
