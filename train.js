// Task - D
function solution(str1, str2) {
  const sortString = (str) => str.split("").sort().join("");
  return sortString(str1) === sortString(str2);
}

console.log(solution("mitgroup", "gmtiprou"));
