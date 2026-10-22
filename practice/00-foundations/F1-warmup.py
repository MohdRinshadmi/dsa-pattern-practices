# F1 warm-up (Python). Part 1 = Q1-Q6, Part 2 = A-C, both from F1-warmup.md.
# Write your predictions in F1-warmup.md FIRST, then run this file to check them.
# Run:  python practice/00-foundations/F1-warmup.py

print("--- Q1: Lists and indexing ---")
nums = [4, 7, 1, 9]
print(nums[0], nums[2], nums[-1], len(nums))

print("--- Q2: Loops ---")
total = 0
for x in [3, 5, 2]:
    total = total + x
print(total)

print("--- Q3: Looping by index ---")
words = ["a", "b", "c"]
for i in range(len(words)):
    print(i, words[i])

print("--- Q4: Sets ---")
seen = set()
seen.add(5)
seen.add(8)
seen.add(5)
print(len(seen), 5 in seen, 3 in seen)

print("--- Q5: Dictionaries ---")
age = {"asha": 21}
age["ravi"] = 25
age["asha"] = age["asha"] + 1
print(age["asha"], "ravi" in age, len(age))

print("--- Q6: Functions ---")
def double(n):
    return n * 2

print(double(double(3)))

# ===== Part 2: check after the fixes =====

print("--- A: Negative indexes and len ---")
letters = ["p", "q", "r", "s", "t"]
print(letters[-2], len(letters), letters[len(letters) - 1])

print("--- B: Counting loop ---")
for i in range(4):
    print(i * 10)

print("--- C: Calls inside calls ---")
def add_one(n):
    return n + 1

print(add_one(add_one(add_one(0))))
