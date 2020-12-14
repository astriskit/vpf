export const formatNum = (num: number | any): string => {
  if (typeof num !== "number") return '';
  let n = num.toLocaleString('en-IN',{
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  if (!n.includes(".")) {
    n += ".00";
  }
  return n;
};
