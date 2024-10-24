// DO NOT MODIFY THESE
const nums = [2, 7, 3, 8, 9, 11, 14, 1, 21]
const otherNums = [4, 6, 12, 13]
const numsToMerge = [...nums]
const arrayToExtend = [...nums]

const firstPlusLast = nums[0] + nums[nums.length - 1];

const indexOfFourteen = nums.indexOf(14);

const withoutLastThree = nums.slice(0, -3);

arrayToExtend.splice(arrayToExtend.indexOf(8), 0, 15);

const includesHundred = nums.includes(100);

const withSevenThreeEight = nums.slice(1, 4);

const combinedNums = [...numsToMerge, ...otherNums];

const newCities = ['Rome', 'Paris', 'Barcelona'];

const moreCities = ['Sydney', ...newCities, 'Berlin'];

module.exports = {
  a: firstPlusLast,
  b: indexOfFourteen,
  c: withoutLastThree,
  d: arrayToExtend,
  e: includesHundred,
  f: withSevenThreeEight,
  i: combinedNums,
  j: newCities,
  k: moreCities
}
