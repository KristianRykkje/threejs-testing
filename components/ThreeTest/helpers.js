export const rand = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + (max - min) * Math.random();
};

export const randomColor = () => {
  return `hsl(${rand(360) | 0}, ${rand(50, 100) | 0}%, 50%)`;
};
