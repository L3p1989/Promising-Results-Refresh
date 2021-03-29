slowMath
  .add(1, 1)
  .then((sum) => {
    return slowMath.multiply(sum, 2);
  })
  .then((sum) => {
    return slowMath.divide(sum, 4);
  })
  .then((sum) => {
    return slowMath.subtract(sum, 3);
  })
  .then((sum) => {
    return slowMath.add(sum, 98);
  })
  .then((sum) => {
    return slowMath.remainder(sum, 2);
  })
  .then((sum) => {
    return slowMath.multiply(sum, 50);
  })
  .then((sum) => {
    return slowMath.remainder(sum, 40);
  })
  .then((sum) => {
    return slowMath.add(sum, 32);
  })
  .then((sum) => {
    console.log(sum);
  })
  .catch((err) => {
    console.error(err);
  });
