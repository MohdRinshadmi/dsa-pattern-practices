// F1 warm-up (JavaScript). Part 1 = Q1-Q6, Part 2 = A-C, both from F1-warmup.md.
// Write your predictions in F1-warmup.md FIRST, then run this file to check them.
// Run:  node practice/00-foundations/F1-warmup.js
// Compare the output with F1-warmup.py. Q1 and A show a key difference between the two languages.

console.log("--- Q1: Arrays and indexing ---");
const nums = [4, 7, 1, 9];
console.log(nums[0], nums[2], nums[-1], nums.length);
console.log("with .at():", nums.at(-1));

console.log("--- Q2: Loops ---");
let total = 0;
for (const x of [3, 5, 2]) {
  total = total + x;
}
console.log(total);

console.log("--- Q3: Looping by index ---");
const words = ["a", "b", "c"];
for (let i = 0; i < words.length; i++) {
  console.log(i, words[i]);
}

console.log("--- Q4: Sets ---");
const seen = new Set();
seen.add(5);
seen.add(8);
seen.add(5);
console.log(seen.size, seen.has(5), seen.has(3));

console.log("--- Q5: Maps (JavaScript's dictionary) ---");
const age = new Map([["asha", 21]]);
age.set("ravi", 25);
age.set("asha", age.get("asha") + 1);
console.log(age.get("asha"), age.has("ravi"), age.size);

console.log("--- Q6: Functions ---");
function double(n) {
  return n * 2;
}

console.log(double(double(3)));

// ===== Part 2: check after the fixes =====

console.log("--- A: Negative indexes and length ---");
const letters = ["p", "q", "r", "s", "t"];
console.log(letters[-2], letters.at(-2), letters.length, letters[letters.length - 1]);

console.log("--- B: Counting loop ---");
for (let i = 0; i < 4; i++) {
  console.log(i * 10);
}

console.log("--- C: Calls inside calls ---");
function addOne(n) {
  return n + 1;
}

console.log(addOne(addOne(addOne(0))));
