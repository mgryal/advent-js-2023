function findFirstRepeated(gifts) {
  // Code here
  const giftsDict = {};
  let firstRepeated = -1;
  for (let gift of gifts) {
    if (giftsDict[gift]) {
      firstRepeated = gift;
      break;
    }
    giftsDict[gift] = true;
  }
  return firstRepeated;
}
