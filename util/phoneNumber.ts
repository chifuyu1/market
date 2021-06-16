export const dashNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '-');
};
