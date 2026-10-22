# F1: Python Warm-up Check

**How to answer:** don't run the code yet. Read each snippet, write what you think it prints, and say *why* in one line. "I don't know" is a fine answer.

When you're finished, save this file and tell me "F1 done". After I've reviewed your answers, you can run the snippets to check yourself.

---

## Q1: Lists and indexing

```python
nums = [4, 7, 1, 9]
print(nums[0], nums[2], nums[-1], len(nums))
```

**My prediction:** 4, 1, undefined, 3

**Why:**
index will start from counting 0 not 1, nums[-1] is not defined so i think its undefined.
---

## Q2: Loops

```python
total = 0
for x in [3, 5, 2]:
    total = total + x
print(total)
```

**My prediction:*total = 10*

**Why:**

---

## Q3: Looping by index

```python
words = ["a", "b", "c"]
for i in range(len(words)):
    print(i, words[i])
```

**My prediction:*dont know*

**Why:**

---

## Q4: Sets

```python
seen = set()
seen.add(5)
seen.add(8)
seen.add(5)
print(len(seen), 5 in seen, 3 in seen)
```

**My prediction:*dont know*

**Why:**

---

## Q5: Dictionaries

```python
age = {"asha": 21}
age["ravi"] = 25
age["asha"] = age["asha"] + 1
print(age["asha"], "ravi" in age, len(age))
```

**My prediction:*dont know*

**Why:**

---

## Q6: Functions

```python
def double(n):
    return n * 2

print(double(double(3)))
```

**My prediction:*196*

**Why:**

---

## Q7: Think like an algorithm (no code)

Here's a list on paper: `[3, 9, 4, 1, 9, 6, 2, 7]`

**7a.** By hand, how would *you* check whether any number appears twice? Write your steps.

**My steps:**

1.i will list in for loop and check it in interation
2.
3.

**7b.** If the list had **1,000,000** numbers, would your method still work well? Why or why not?

**My answer:*dont know*

---
---

# Part 2: Check after the fixes (Python + JavaScript)

The fixes for Q1, Q3 and Q6 are summarised in the Notes at the bottom of this file. These are new snippets testing the same ideas.

Predict **both languages without running**. Then run the files below. Part 2's output comes after Part 1's.

```
python practice/00-foundations/F1-warmup.py
node practice/00-foundations/F1-warmup.js
```

## A: Negative indexes and length

```python
letters = ["p", "q", "r", "s", "t"]
print(letters[-2], len(letters), letters[len(letters) - 1])
```

```javascript
const letters = ["p", "q", "r", "s", "t"];
console.log(letters[-2], letters.at(-2), letters.length, letters[letters.length - 1]);
```

**My prediction (Python):**

**My prediction (JavaScript):**

**Why do `letters[-2]` in Python and `letters[-2]` in JavaScript behave differently?**

---

## B: Counting loop

```python
for i in range(4):
    print(i * 10)
```

```javascript
for (let i = 0; i < 4; i++) {
  console.log(i * 10);
}
```

**My prediction (Python):**

**My prediction (JavaScript):**

**Why:**

---

## C: Calls inside calls

```python
def add_one(n):
    return n + 1

print(add_one(add_one(add_one(0))))
```

```javascript
function addOne(n) {
  return n + 1;
}

console.log(addOne(addOne(addOne(0))));
```

**My prediction (Python):**

**My prediction (JavaScript):**

**Why:**

---

## D: Q7 again, in more detail (no code)

List: `[3, 9, 4, 1, 9, 6, 2, 7]`

Your first answer was "loop and check". Now write the steps precisely enough that someone could follow them **without thinking**.
For example: when you are looking at the `9` at index 1, **what exactly do you compare it with**? When do you stop? What is your answer at the end?

**My steps:**

1.
2.
3.
4.

**How I got 196 in Q6:**

---

## Surprises after running

(Write anything that came out differently from what you predicted.)

---
---

# Notes: F1 basics

## Key ideas

1. Indexes start at 0, so the **last index = length − 1**.
2. **Length counts the items.** It is not the last index. `[4, 7, 1, 9]` has length 4 and last index 3.
3. In Python, **negative indexes count from the end**: `nums[-1]` is the last item and `nums[-2]` is the second to last.
4. `range(n)` gives `0, 1, …, n−1`. It stops **before** n, so `range(len(x))` gives every valid index of `x`.
5. **Calls inside calls run inside-out:** `double(double(3))` becomes `double(6)`, which is `12`.
6. An index that doesn't exist **crashes in Python** (`IndexError`) but **silently gives `undefined` in JavaScript**.

## Python vs JavaScript

| Concept | Python | JavaScript | Watch out |
|---|---|---|---|
| Print | `print(a, b)` → `a b` | `console.log(a, b)` → `a b` | Both separate values with a space. |
| Length | `len(nums)`, a function | `nums.length`, a property (no `()`) | `nums.length()` is an error in JS. |
| Last item | `nums[-1]` | `nums.at(-1)` or `nums[nums.length - 1]` | **`nums[-1]` in JS is `undefined`.** |
| Index that doesn't exist | Crashes with `IndexError` | Gives `undefined` | JS bugs hide quietly; Python fails loudly. |
| Loop over indexes | `for i in range(len(nums)):` | `for (let i = 0; i < nums.length; i++)` | `range(n)` stops before n, the same as `i < n`. |
| Loop over values | `for x in nums:` | `for (const x of nums)` | **JS `for...in` gives indexes as strings. Use `for...of` for arrays.** |
| Functions | `def f(n): return n * 2` | `function f(n) { return n * 2; }` | Nested calls run inside-out in both. |

Sets and dictionaries/maps (Q4, Q5) are taught in F5.

## My mistakes to remember

- **Q1:** thought `nums[-1]` was `undefined`. That's JavaScript behaviour, not Python's. Also thought `len` was the last index.
- **Q6:** answered `196` instead of `12`. (Reason: to be filled in.)

## Revision questions (answer without looking)

1. What does `nums[-1]` give in Python? In JavaScript? How do you get the last item in JavaScript?
2. A list has 7 items. What is its last index? What numbers does `range(7)` produce?
3. Translate `for i in range(len(nums)):` into JavaScript.
4. If `f(n)` returns `n + 10`, what does `f(f(2))` give?
