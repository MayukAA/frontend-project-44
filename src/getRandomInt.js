const getRandomInt = (min, max) => {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  return Math.floor(Math.random() * (maxi - mini)) + mini;
};

export default getRandomInt;
