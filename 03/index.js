function findNaughtyStep(original, modified) {
  if (original.length === modified.length) return "";
  let naughtyStep = "";
  let longestString = modified;
  let shortestString = original;
  if (original.length > modified.length) {
    longestString = original;
    shortestString = modified;
  }
  for (let letterIndex in longestString) {
    if (longestString[letterIndex] !== shortestString[letterIndex]) {
      naughtyStep = longestString[letterIndex];
      break;
    }
  }
  return naughtyStep;
}
