export const encryptMessage = (key, text) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let encryptedAlphabet = alphabet.map(
    (_, index) => alphabet[(index + key) % alphabet.length]
  );
  const isLetter = str => str.length === 1 && str.match(/[a-z]/i);
  return text
    .split('')
    .map(char => {
      if (!isLetter(char)) {
        return char;
      }
      const index = alphabet.indexOf(char);
      return encryptedAlphabet[index];
    })
    .join('');
};
