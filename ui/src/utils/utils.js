export const createRange = (inputRange) => {
  let notes = [];
  let octave = -2;

  let j = 0;

  for (let i = 0; i < 128; i++) {
    notes.push(`${inputRange[j]}${octave}`)
    if(inputRange[j]==="B"){
      j=0;
      octave++;
    } else {
      j++;
    }
  }
  
  return notes;
};