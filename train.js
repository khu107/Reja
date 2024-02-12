// 1 . for dan foydalangan usuli
function sonlar(son) {
  let count = 0;
  const sonlar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for (let i = 0; i < son.length; i++) {
    if (sonlar.indexOf(son[i]) !== -1) {
      count++;
    } else {
      false;
    }
  }
  return count;
}
console.log(sonlar("1a1a5a1a1"));

// 2. Array ning filter methodi dan foydalangan usuli
function sonlar(son) {
  const sonlar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const re = son
    .split("")
    .filter((element) => sonlar.indexOf(element) !== -1).length;

  return re;
}
console.log(sonlar("1a1a5a1a16"));

// 2. regex - dan foydalangan usuli
function sonlar(str) {
  let regex = /[^0-9]/g;
  return str.replace(regex, "").length;
}

console.log(sonlar("1a2aaa0aaas35"));
