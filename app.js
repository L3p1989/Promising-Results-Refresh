// slowMath
//   .add(1, 1)
//   .then((sum) => {
//     return slowMath.multiply(sum, 2);
//   })
//   .then((sum) => {
//     return slowMath.divide(sum, 4);
//   })
//   .then((sum) => {
//     return slowMath.subtract(sum, 3);
//   })
//   .then((sum) => {
//     return slowMath.add(sum, 98);
//   })
//   .then((sum) => {
//     return slowMath.remainder(sum, 2);
//   })
//   .then((sum) => {
//     return slowMath.multiply(sum, 50);
//   })
//   .then((sum) => {
//     return slowMath.remainder(sum, 40);
//   })
//   .then((sum) => {
//     return slowMath.add(sum, 32);
//   })
//   .then((sum) => {
//     console.log(sum);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const doMath = async () => {
  try {
    const result = await slowMath.add(6, 2);
    console.log(result);
    const result2 = await slowMath.multiply(result, 2);
    console.log(result2);
    const result3 = await slowMath.divide(result2, 4);
    console.log(result3);
    const result4 = await slowMath.subtract(result3, 3);
    console.log(result4);
    const result5 = await slowMath.add(result4, 98);
    console.log(result5);
    const result6 = await slowMath.remainder(result5, 2);
    console.log(result6);
    const result7 = await slowMath.multiply(result6, 50);
    console.log(result7);
    const result8 = await slowMath.remainder(result7, 40);
    console.log(result8);
    const finalResult = await slowMath.add(result8, 32);
    console.log(`The final result is ${finalResult}`);
  } catch (err) {
    console.log(err);
  }
};
doMath();
