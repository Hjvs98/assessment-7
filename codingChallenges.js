//finding what adds to zero
const addToZero = (arr) => {
  oppositesExist = false;
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if ((arr[j] = arr[i] * -1)) {
        oppositesExist = true;
        break;
      }
    }
    if (oppositesExist) {
      break;
    }
  }

  return oppositesExist;
};

//finding unique characters
const hasUniqueChars = (str) => {
  let uniqueChars = true;
  let mySet = new Set();
  for (let i = 0; i < str.length; ++i) {
    if (mySet.has(str[i])) {
      uniqueChars = false;
      break;
    } else {
      mySet.add(str[i]);
    }
  }

  return uniqueChars;
};

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));

//find pangrams
const isPangram = (str) => {
  let alphaCount = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  str = str.toLowerCase();
  let keys = Object.keys(alphaCount);
  for (let i = 0; i < str.length; ++i) {
    for (let j = 0; j < keys.length; ++j) {
      if (str[i] == keys[j]) {
        alphaCount[keys[j]] += 1;
        break;
      }
    }
  }

  for (let i = 0; i < keys.length; ++i) {
    if (alphaCount[keys[i]] === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

//finding the longest word
const findLongestWord = (arr) => {
  maxLength = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }

  return maxLength;
};

console.log(findLongestWord(["hi", "hello"]));
