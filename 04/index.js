function decode(message) {
  // Code here
  let stackArray = [];
  let messageCopy = message;
  for (let letterIndex = 0; letterIndex < message.length; letterIndex++) {
    let letter = message[letterIndex];
    if (letter === "(") stackArray.push(letterIndex);
    if (letter === ")") {
      let parenthesisIndex = stackArray.pop();
      let textInParenthesis = messageCopy.substring(
        parenthesisIndex + 1,
        letterIndex
      );
      let reversedString = textInParenthesis.split("").reverse().join("");
      let firstPartOfMessage = messageCopy.slice(0, parenthesisIndex + 1);
      let lastPartOfMessage = messageCopy.slice(
        letterIndex,
        messageCopy.length
      );
      messageCopy = `${firstPartOfMessage}${reversedString}${lastPartOfMessage}`;
    }
  }
  return messageCopy.replaceAll("(", "").replaceAll(")", "");
}

let a = decode("sa(u(cla)atn)s");
console.log(a);
decode("(olleh) (dlrow)!");
