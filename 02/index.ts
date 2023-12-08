function manufactureTs(gifts: string[], materials: string) {
  // Code here
  const createdGifts: string[] = [];
  gifts.forEach((gift) => {
    if (gift.split("").every((letter) => materials.includes(letter)))
      createdGifts.push(gift);
  });
  return createdGifts;
}
