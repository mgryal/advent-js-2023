function manufacture(gifts, materials) {
  // Code here
  const createdGifts = [];
  gifts.forEach((gift) => {
    if (gift.split("").every((letter) => materials.includes(letter)))
      createdGifts.push(gift);
  });
  return createdGifts;
}
