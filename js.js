const list = [
  45, 17, 16, 22, 25, 19, 20, 21, 32, 37, 19, 21, 24, 20, 28, 22, 23, 19,
];

const list2 = [51, 36, 28, 55, 32, 61, 47, 34];
const list3 = [38, 24, 20, 40, 20, 32, 35, 19];

let ans = 0;
for (let i = 0; i < list2.length; i++) {
  ans = ans + list2[i];
  console.log(list2[i]);
}
console.log(ans);
console.log("average");
console.log(ans / 8);
const bob = ans / 8;

let ans1 = 0;

for (let i = 0; i < list2.length; i++) {
  ans1 = ans1 + (list2[i] - bob) ** 2;
  console.log(list2[i]);
}
console.log(ans1);
console.log(3 ** 2);
console.log("isd");
console.log(ans1 / 8);
console.log(list2.sort());
console.log(list3.sort());
