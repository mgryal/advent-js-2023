function findFirstRepeatedTs(gifts: number[]) {
  const giftsDict: { [key: number]: boolean } = {};
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
