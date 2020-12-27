export const dashNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '-');
};
