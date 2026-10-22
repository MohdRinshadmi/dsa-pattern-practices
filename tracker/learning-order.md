# Learning Order: Blind 75 + DSA Master + Interview Master 100 (one combined order)

This is the single study order for both tracks (the learner's choice, 2026-10-22). It has **145 numbered lessons (L001-L145)**, which come after the Phase 00 foundations lessons F1-F5.

- **The main problem list has 140 problems: P001-P141**, all tracked in [blind75-tracker.csv](blind75-tracker.csv). There are 141 rows because P043 and P074 are the same problem.
  - **P001-P076** are the Blind 75 sheet entries (75 problems), in the sheet's order.
  - **P077-P098** are the 22 LeetCode problems that test your DSA Master code. Each one is solved inside its build lesson, for example `M04 + P077`.
  - **P099-P141** are the 43 [Interview Master 100](https://instabyte.io/p/interview-master-100) problems that were not already in the list. Seven of them used to be supplementary extras. The other 57 Interview Master problems were already here. Each row's Source cell shows its `IM100 #`, and the list covers all 100.
- **M01-M39** are the [DSA Master](../../dsa-master/README.md) items. In each one you build a data structure or algorithm from scratch. Their IDs keep the page's order. Live status is in [../../dsa-master/tracker.csv](../../dsa-master/tracker.csv).
- Both trackers' `Learn_Order` columns use the L-numbers below. One L-number is one lesson. A row that lists several IDs (for example `M08 + P040`) is a single lesson, recorded on every ID it lists. M10-M12 are taught inside F5.
- Optional extras are in [../supplementary-roadmap.md](../supplementary-roadmap.md). They are not numbered here.

**How each lesson works**

- Everything is done in **both Python and JavaScript**. We reason through it once, then write the code in both languages.
- Each lesson has exactly **three files**, all named after the lesson's first ID: a `.md` with the questions, your answers and the notes; a `.py`; and a `.js`.
  - A lesson whose first ID is a P-ID goes in this folder's `practice/NN-phase/`. For example: `practice/01-arrays-hashing/P003-contains-duplicate.*`.
  - A lesson whose first ID is an M-ID goes in `../dsa-master/practice/NN-phase/`, which uses the same phase folder names. For example: `../dsa-master/practice/03-two-pointers/M04-two-pointers.*`.
- **Pattern lessons:** if a phase starts with a DSA Master build lesson, that lesson is also the phase's pattern lesson, and the pattern notes go in its .md. A phase that starts with a P-ID gets its own pattern lesson in its folder, as before.
- The Status column here is kept in sync with both trackers.

## Phases at a glance

| Phase | Folder | Lessons | Problems (P) | DSA Master items (M) |
|---|---|---|---|---|
| 00 Foundations | `00-foundations` | F1-F5 | 0 | 3 (M10-M12, in F5) |
| 01 Arrays & Hashing | `01-arrays-hashing` | L001-L008 | 8 | 0 |
| 02 Prefix & Suffix | `02-prefix-suffix` | L009 | 1 | 0 |
| 03 Two Pointers | `03-two-pointers` | L010-L019 | 10 | 1 |
| 04 Sliding Window | `04-sliding-window` | L020-L024 | 5 | 1 |
| 05 Stack & Queue | `05-stack-queue` | L025-L029 | 3 | 2 |
| 06 Binary Search | `06-binary-search` | L030-L036 | 7 | 1 |
| 07 Matrix | `07-matrix` | L037-L040 | 4 | 0 |
| 08 Recursion & Sorting | `08-recursion-sorting` | L041-L044 | 2 | 3 |
| 09 Linked List | `09-linked-list` | L045-L055 | 11 | 4 |
| 10 Trees | `10-trees` | L056-L077 | 24 | 3 |
| 11 Heap / Priority Queue | `11-heap` | L078-L083 | 5 | 3 |
| 12 Backtracking | `12-backtracking` | L084-L091 | 8 | 3 |
| 13 Trie | `13-trie` | L092-L095 | 4 | 3 |
| 14 Intervals | `14-intervals` | L096-L100 | 5 | 0 |
| 15 Graphs | `15-graphs` | L101-L113 | 12 | 5 |
| 16 Union-Find & Greedy | `16-union-find-greedy` | L114-L117 | 4 | 4 |
| 17 Dynamic Programming | `17-dynamic-programming` | L118-L136 | 19 | 3 |
| 18 Bit Manipulation & Math | `18-bit-manipulation-math` | L137-L145 | 9 | 0 |
| **Total** | | **F1-F5 + 145** | **141** | **39** |

## Phase 00 Foundations (lessons, no sheet problems)

Folder: `practice/00-foundations/`

| Lesson | Topic | Files | Status |
|---|---|---|---|
| F1 | Warm-up check in Python and JavaScript: lists/arrays, indexing, loops, functions. Gaps found are taught here. | [F1-warmup.md](../practice/00-foundations/F1-warmup.md) / .py / .js | In progress: Part 1 answered and reviewed; Part 2 waiting for answers |
| F2 | What an algorithm is; counting steps; time complexity (Big-O) | F2-big-o.md / .py / .js | Not Started |
| F3 | Space complexity | F3-space-complexity.md / .py / .js | Not Started |
| F4 | How Python lists and JavaScript arrays work inside, and what each operation costs | F4-lists-arrays.md / .py / .js | Not Started |
| F5 | Hash sets and hash maps (Python `set`/`dict`, JavaScript `Set`/`Map`): hashing, and why lookup is O(1) on average. This also covers DSA Master M10-M12 (M10 hash functions, M11 insertion/deletion/lookup, M12 collision handling). | F5-hashing.md / .py / .js | Not Started |

Recursion (M30) and the sorting algorithms (M02, M01) are built in Phase 08 Recursion & Sorting.

## Phase 01 Arrays & Hashing

Folder: `practice/01-arrays-hashing/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L001 | P003 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | Easy | Blind 75 #3 Arrays · IM100 #28 |  | Not Started |
| L002 | P053 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | Easy | Blind 75 #53 String · IM100 #7 |  | Not Started |
| L003 | P099 | [Majority Element](https://leetcode.com/problems/majority-element/) | Easy | IM100 #13 |  | Not Started |
| L004 | P001 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | Blind 75 #1 Arrays · IM100 #1 |  | Not Started |
| L005 | P054 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | Blind 75 #54 String · IM100 #38 |  | Not Started |
| L006 | P100 | [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) | Medium | IM100 #57 |  | Not Started |
| L007 | P031 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Medium | Blind 75 #31 Graph · IM100 #72 |  | Not Started |
| L008 | P059 | [Encode and Decode Strings (Leetcode Premium)](https://leetcode.com/problems/encode-and-decode-strings/) | Medium | Blind 75 #59 String | LeetCode Premium: no access, so use a free equivalent (link verified when we reach it) | Not Started |

## Phase 02 Prefix & Suffix

Folder: `practice/02-prefix-suffix/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L009 | P004 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | Medium | Blind 75 #4 Arrays · IM100 #22 |  | Not Started |

## Phase 03 Two Pointers

Folder: `practice/03-two-pointers/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L010 | M04 + P077 | **Build:** Two Pointers, then solve [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Easy | DSA Master: 1. Arrays + IM100 #100 | One lesson: P077 is the practice check for M04 | Not Started |
| L011 | P056 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | Easy | Blind 75 #56 String · IM100 #5 |  | Not Started |
| L012 | P101 | [Reverse String](https://leetcode.com/problems/reverse-string/) | Easy | IM100 #15 |  | Not Started |
| L013 | P102 | [Remove Element](https://leetcode.com/problems/remove-element/) | Easy | IM100 #80 |  | Not Started |
| L014 | P103 | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) | Easy | IM100 #67 |  | Not Started |
| L015 | P104 | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | Medium | IM100 #55 | Was supplementary S03 | Not Started |
| L016 | P009 | [3Sum](https://leetcode.com/problems/3sum/) | Medium | Blind 75 #9 Arrays · IM100 #33 |  | Not Started |
| L017 | P010 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | Medium | Blind 75 #10 Arrays · IM100 #36 |  | Not Started |
| L018 | P105 | [Rotate Array](https://leetcode.com/problems/rotate-array/) | Medium | IM100 #81 |  | Not Started |
| L019 | P106 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | Hard | IM100 #54 | Was supplementary S04 | Not Started |

## Phase 04 Sliding Window

Folder: `practice/04-sliding-window/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L020 | M05 + P078 | **Build:** Sliding Window, then solve [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) | Easy | DSA Master: 1. Arrays | One lesson: P078 is the practice check for M05. Also: stretch: [LC 239 Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | Not Started |
| L021 | P002 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | Blind 75 #2 Arrays · IM100 #4 |  | Not Started |
| L022 | P050 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | Blind 75 #50 String · IM100 #42 |  | Not Started |
| L023 | P051 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | Medium | Blind 75 #51 String |  | Not Started |
| L024 | P052 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | Hard | Blind 75 #52 String · IM100 #45 |  | Not Started |

## Phase 05 Stack & Queue

Folder: `practice/05-stack-queue/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L025 | M15 | **Build:** Push/Pop/Peek | Understand | DSA Master: 5. Stacks | Understand only; no from-scratch build | Not Started |
| L026 | M16 | **Build:** Enqueue/Dequeue | Understand | DSA Master: 6. Queues | Understand only; no from-scratch build | Not Started |
| L027 | P055 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Easy | Blind 75 #55 String · IM100 #2 |  | Not Started |
| L028 | P107 | [Min Stack](https://leetcode.com/problems/min-stack/) | Medium | IM100 #27 | Was supplementary S07 | Not Started |
| L029 | P108 | [Basic Calculator](https://leetcode.com/problems/basic-calculator/) | Hard | IM100 #61 |  | Not Started |

## Phase 06 Binary Search

Folder: `practice/06-binary-search/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L030 | M03 + P079 | **Build:** Binary Search, then solve [Binary Search](https://leetcode.com/problems/binary-search/) | Easy | DSA Master: 1. Arrays + IM100 #8 | One lesson: P079 is the practice check for M03 | Not Started |
| L031 | P109 | [Sqrt(x)](https://leetcode.com/problems/sqrtx/) | Easy | IM100 #85 |  | Not Started |
| L032 | P110 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | Medium | IM100 #50 | Was supplementary S11 | Not Started |
| L033 | P111 | [Find Peak Element](https://leetcode.com/problems/find-peak-element/) | Medium | IM100 #98 |  | Not Started |
| L034 | P007 | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Medium | Blind 75 #7 Arrays · IM100 #99 |  | Not Started |
| L035 | P008 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | Blind 75 #8 Arrays · IM100 #51 |  | Not Started |
| L036 | P112 | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | IM100 #74 |  | Not Started |

## Phase 07 Matrix

Folder: `practice/07-matrix/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L037 | P048 | [Rotate Image](https://leetcode.com/problems/rotate-image/) | Medium | Blind 75 #48 Matrix · IM100 #49 |  | Not Started |
| L038 | P047 | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | Medium | Blind 75 #47 Matrix · IM100 #32 |  | Not Started |
| L039 | P046 | [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) | Medium | Blind 75 #46 Matrix · IM100 #31 |  | Not Started |
| L040 | P113 | [Game of Life](https://leetcode.com/problems/game-of-life/) | Medium | IM100 #69 |  | Not Started |

## Phase 08 Recursion & Sorting

Folder: `practice/08-recursion-sorting/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L041 | M30 | **Build:** Factorial | Implement | DSA Master: 1. Recursion | Tested locally | Not Started |
| L042 | P114 | [Pow(x, n)](https://leetcode.com/problems/powx-n/) | Medium | IM100 #86 |  | Not Started |
| L043 | M02 + P080 | **Build:** MergeSort, then solve [Sort an Array](https://leetcode.com/problems/sort-an-array/) | Medium | DSA Master: 1. Arrays | One lesson: P080 is the practice check for M02 | Not Started |
| L044 | M01 | **Build:** QuickSort | Implement | DSA Master: 1. Arrays | Check: [LC 912 Sort an Array](https://leetcode.com/problems/sort-an-array/) (P080, solved again) | Not Started |

## Phase 09 Linked List

Folder: `practice/09-linked-list/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L045 | M06 + P081 | **Build:** Traversal, then solve [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | Easy | DSA Master: 2. Linked Lists + IM100 #17 | One lesson: P081 is the practice check for M06 | Not Started |
| L046 | M07 + P082 | **Build:** Insertion/Deletion, then solve [Design Linked List](https://leetcode.com/problems/design-linked-list/) | Medium | DSA Master: 2. Linked Lists | One lesson: P082 is the practice check for M07 | Not Started |
| L047 | M08 + P040 | **Build:** Reversal, then solve [Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/) | Easy | DSA Master: 2. Linked Lists + Blind 75 #40 Linked List · IM100 #12 | One lesson: P040 is the practice check for M08 | Not Started |
| L048 | M09 + P041 | **Build:** Cycle Detection, then solve [Detect Cycle in a Linked List](https://leetcode.com/problems/linked-list-cycle/) | Easy | DSA Master: 2. Linked Lists + Blind 75 #41 Linked List · IM100 #9 | One lesson: P041 is the practice check for M09 | Not Started |
| L049 | P042 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | Easy | Blind 75 #42 Linked List · IM100 #3 |  | Not Started |
| L050 | P044 | [Remove Nth Node From End Of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | Medium | Blind 75 #44 Linked List · IM100 #48 |  | Not Started |
| L051 | P045 | [Reorder List](https://leetcode.com/problems/reorder-list/) | Medium | Blind 75 #45 Linked List |  | Not Started |
| L052 | P115 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | Medium | IM100 #60 |  | Not Started |
| L053 | P116 | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | Medium | IM100 #64 |  | Not Started |
| L054 | P117 | [Sort List](https://leetcode.com/problems/sort-list/) | Medium | IM100 #96 |  | Not Started |
| L055 | P118 | [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) | Hard | IM100 #78 |  | Not Started |

## Phase 10 Trees

Folder: `practice/10-trees/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L056 | M13 + M31 + P083 + P084 + P085 | **Build:** Traversal + Tree traversals, then solve [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/), [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/), [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) | Easy | DSA Master: 4. Trees (Binary Trees, Binary Search Trees, etc.) | One lesson: P083, P084, P085 are the practice checks for M13 and M31 | Not Started |
| L057 | M14 + P086 | **Build:** Searching, then solve [Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/) | Easy | DSA Master: 4. Trees (Binary Trees, Binary Search Trees, etc.) | One lesson: P086 is the practice check for M14 | Not Started |
| L058 | P060 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | Easy | Blind 75 #60 Tree · IM100 #10 |  | Not Started |
| L059 | P062 | [Invert/Flip Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | Easy | Blind 75 #62 Tree · IM100 #6 |  | Not Started |
| L060 | P061 | [Same Tree](https://leetcode.com/problems/same-tree/) | Easy | Blind 75 #61 Tree |  | Not Started |
| L061 | P119 | [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) | Easy | IM100 #21 |  | Not Started |
| L062 | P066 | [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) | Easy | Blind 75 #66 Tree |  | Not Started |
| L063 | P120 | [Path Sum](https://leetcode.com/problems/path-sum/) | Easy | IM100 #88 |  | Not Started |
| L064 | P121 | [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) | Easy | IM100 #16 |  | Not Started |
| L065 | P064 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | Medium | Blind 75 #64 Tree · IM100 #90 |  | Not Started |
| L066 | P122 | [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) | Medium | IM100 #89 |  | Not Started |
| L067 | P123 | [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | Medium | IM100 #34 |  | Not Started |
| L068 | P124 | [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | Easy | IM100 #18 |  | Not Started |
| L069 | P070 | [Lowest Common Ancestor of BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | Medium | Blind 75 #70 Tree |  | Not Started |
| L070 | P068 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | Medium | Blind 75 #68 Tree · IM100 #26 |  | Not Started |
| L071 | P125 | [Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/) | Easy | IM100 #91 |  | Not Started |
| L072 | P069 | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | Medium | Blind 75 #69 Tree · IM100 #29 |  | Not Started |
| L073 | P067 | [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | Medium | Blind 75 #67 Tree · IM100 #35 |  | Not Started |
| L074 | P126 | [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) | Medium | IM100 #87 |  | Not Started |
| L075 | P127 | [Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) | Medium | IM100 #37 |  | Not Started |
| L076 | P063 | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Hard | Blind 75 #63 Tree |  | Not Started |
| L077 | P065 | [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Hard | Blind 75 #65 Tree |  | Not Started |

## Phase 11 Heap / Priority Queue

Folder: `practice/11-heap/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L078 | M17 | **Build:** Insertion/Deletion | Understand | DSA Master: 7. Heaps (Priority Queues) | Understand only; no from-scratch build | Not Started |
| L079 | M18 | **Build:** Building a Heap | Understand | DSA Master: 7. Heaps (Priority Queues) | Understand only; no from-scratch build | Not Started |
| L080 | M19 + P075 + P087 | **Build:** Top K Elements, then solve [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/), [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Medium | DSA Master: 7. Heaps (Priority Queues) + Blind 75 #75 Heap · IM100 #53 + IM100 #40 | One lesson: P075, P087 are the practice checks for M19 | Not Started |
| L081 | P043 | [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | Blind 75 #43 Linked List · IM100 #75 | Same problem as P074 (sheet #74, Heap) | Not Started |
| L082 | P074 | [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | Blind 75 #74 Heap · IM100 #75 | Same problem as P043 (sheet #43, Linked List) | Not Started |
| L083 | P076 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | Hard | Blind 75 #76 Heap · IM100 #68 |  | Not Started |

## Phase 12 Backtracking

Folder: `practice/12-backtracking/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L084 | M39 + P088 | **Build:** Permutations, then solve [Permutations](https://leetcode.com/problems/permutations/) | Medium | DSA Master: 4. Backtracking + IM100 #47 | One lesson: P088 is the practice check for M39 | Not Started |
| L085 | P128 | [Subsets](https://leetcode.com/problems/subsets/) | Medium | IM100 #52 | Was supplementary S15 | Not Started |
| L086 | P021 | [Combination Sum](https://leetcode.com/problems/combination-sum/) | Medium | Blind 75 #21 Dynamic Programming · IM100 #63 |  | Not Started |
| L087 | P129 | [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | Medium | IM100 #71 |  | Not Started |
| L088 | P130 | [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) | Medium | IM100 #95 |  | Not Started |
| L089 | P049 | [Word Search](https://leetcode.com/problems/word-search/) | Medium | Blind 75 #49 Matrix · IM100 #59 |  | Not Started |
| L090 | M38 + P089 | **Build:** N-Queens, then solve [N-Queens](https://leetcode.com/problems/n-queens/) | Hard | DSA Master: 4. Backtracking | One lesson: P089 is the practice check for M38 | Not Started |
| L091 | M37 + P090 | **Build:** Sudoku Solver, then solve [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) | Hard | DSA Master: 4. Backtracking | One lesson: P090 is the practice check for M37 | Not Started |

## Phase 13 Trie

Folder: `practice/13-trie/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L092 | M24 + M25 + P071 | **Build:** Implement Trie + Insertion/Searching, then solve [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) | Medium | DSA Master: 9. Tries + Blind 75 #71 Tree · IM100 #39 | One lesson: P071 is the practice check for M24 and M25 | Not Started |
| L093 | M26 + P091 | **Build:** Autocompletion, then solve [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/) | Medium | DSA Master: 9. Tries | One lesson: P091 is the practice check for M26 | Not Started |
| L094 | P072 | [Add and Search Word](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | Medium | Blind 75 #72 Tree · IM100 #66 | Sheet link outdated, use LC 211 | Not Started |
| L095 | P073 | [Word Search II](https://leetcode.com/problems/word-search-ii/) | Hard | Blind 75 #73 Tree · IM100 #77 |  | Not Started |

## Phase 14 Intervals

Folder: `practice/14-intervals/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L096 | P038 | [Meeting Rooms (Leetcode Premium)](https://leetcode.com/problems/meeting-rooms/) | Easy | Blind 75 #38 Interval | LeetCode Premium: no access, so use a free equivalent (link verified when we reach it) | Not Started |
| L097 | P036 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | Blind 75 #36 Interval · IM100 #30 |  | Not Started |
| L098 | P035 | [Insert Interval](https://leetcode.com/problems/insert-interval/) | Medium | Blind 75 #35 Interval |  | Not Started |
| L099 | P037 | [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | Medium | Blind 75 #37 Interval |  | Not Started |
| L100 | P039 | [Meeting Rooms II (Leetcode Premium)](https://leetcode.com/problems/meeting-rooms-ii/) | Medium | Blind 75 #39 Interval | LeetCode Premium: no access, so use a free equivalent (link verified when we reach it) | Not Started |

## Phase 15 Graphs

Folder: `practice/15-graphs/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L101 | M20 + P092 | **Build:** BFS, then solve [Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/) | Easy | DSA Master: 8. Graphs | One lesson: P092 is the practice check for M20 | Not Started |
| L102 | M21 + M32 | **Build:** DFS + Depth-first search | Implement | DSA Master: 8. Graphs | Check: [LC 1971 Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/) (P092, solved again). One lesson for M21 and M32 | Not Started |
| L103 | M23 + P028 | **Build:** Cycle Detection, then solve [Course Schedule](https://leetcode.com/problems/course-schedule/) | Medium | DSA Master: 8. Graphs + Blind 75 #28 Graph · IM100 #65 | One lesson: P028 is the practice check for M23 | Not Started |
| L104 | M22 + P093 | **Build:** Dijkstra's Algorithm, then solve [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | Medium | DSA Master: 8. Graphs | One lesson: P093 is the practice check for M22 | Not Started |
| L105 | P030 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Medium | Blind 75 #30 Graph · IM100 #46 |  | Not Started |
| L106 | P131 | [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) | Medium | IM100 #92 |  | Not Started |
| L107 | P027 | [Clone Graph](https://leetcode.com/problems/clone-graph/) | Medium | Blind 75 #27 Graph · IM100 #93 |  | Not Started |
| L108 | P029 | [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) | Medium | Blind 75 #29 Graph |  | Not Started |
| L109 | P034 | [Number of Connected Components in an Undirected Graph (Leetcode Premium)](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) | Medium | Blind 75 #34 Graph | LeetCode Premium: no access, so use a free equivalent (link verified when we reach it) | Not Started |
| L110 | P033 | [Graph Valid Tree (Leetcode Premium)](https://leetcode.com/problems/graph-valid-tree/) | Medium | Blind 75 #33 Graph | LeetCode Premium: no access, so use a free equivalent (link verified when we reach it) | Not Started |
| L111 | P132 | [Evaluate Division](https://leetcode.com/problems/evaluate-division/) | Medium | IM100 #94 |  | Not Started |
| L112 | P133 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | Medium | IM100 #79 | Was supplementary S19 | Not Started |
| L113 | P032 | [Alien Dictionary (Leetcode Premium)](https://leetcode.com/problems/alien-dictionary/) | Hard | Blind 75 #32 Graph | LeetCode Premium: no access, so use a free equivalent (link verified when we reach it) | Not Started |

## Phase 16 Union-Find & Greedy

Folder: `practice/16-union-find-greedy/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L114 | M27 + M28 + P094 | **Build:** Implement Union-Find + Find/Union, then solve [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | Medium | DSA Master: 10. Union-Find (Disjoint Set) | One lesson: P094 is the practice check for M27 and M28 | Not Started |
| L115 | M29 + P095 | **Build:** Cycle Detection (undirected), then solve [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | Medium | DSA Master: 10. Union-Find (Disjoint Set) | One lesson: P095 is the practice check for M29 | Not Started |
| L116 | M36 + P096 | **Build:** Kruskal's MST, then solve [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | Medium | DSA Master: 3. Greedy Algorithms | One lesson: P096 is the practice check for M36 | Not Started |
| L117 | P134 | [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | Medium | IM100 #23 |  | Not Started |

## Phase 17 Dynamic Programming

Folder: `practice/17-dynamic-programming/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L118 | M33 + P097 | **Build:** Fibonacci, then solve [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | Easy | DSA Master: 2. Dynamic Programming | One lesson: P097 is the practice check for M33 | Not Started |
| L119 | M34 + P098 | **Build:** Knapsack, then solve [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) | Medium | DSA Master: 2. Dynamic Programming | One lesson: P098 is the practice check for M34 | Not Started |
| L120 | P016 | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | Easy | Blind 75 #16 Dynamic Programming · IM100 #20 |  | Not Started |
| L121 | P022 | [House Robber](https://leetcode.com/problems/house-robber/) | Medium | Blind 75 #22 Dynamic Programming · IM100 #24 |  | Not Started |
| L122 | P023 | [House Robber II](https://leetcode.com/problems/house-robber-ii/) | Medium | Blind 75 #23 Dynamic Programming |  | Not Started |
| L123 | P005 | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | Medium | Blind 75 #5 Arrays · IM100 #19 |  | Not Started |
| L124 | P006 | [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) | Medium | Blind 75 #6 Arrays · IM100 #44 |  | Not Started |
| L125 | P135 | [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/) | Medium | IM100 #97 |  | Not Started |
| L126 | P017 | [Coin Change](https://leetcode.com/problems/coin-change/) | Medium | Blind 75 #17 Dynamic Programming · IM100 #62 |  | Not Started |
| L127 | P024 | [Decode Ways](https://leetcode.com/problems/decode-ways/) | Medium | Blind 75 #24 Dynamic Programming |  | Not Started |
| L128 | P020 | [Word Break Problem](https://leetcode.com/problems/word-break/) | Medium | Blind 75 #20 Dynamic Programming · IM100 #58 |  | Not Started |
| L129 | P018 | [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | Medium | Blind 75 #18 Dynamic Programming · IM100 #73 |  | Not Started |
| L130 | P026 | [Jump Game](https://leetcode.com/problems/jump-game/) | Medium | Blind 75 #26 Dynamic Programming · IM100 #70 |  | Not Started |
| L131 | P025 | [Unique Paths](https://leetcode.com/problems/unique-paths/) | Medium | Blind 75 #25 Dynamic Programming · IM100 #56 |  | Not Started |
| L132 | P136 | [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/) | Medium | IM100 #76 |  | Not Started |
| L133 | P137 | [Maximal Square](https://leetcode.com/problems/maximal-square/) | Medium | IM100 #43 |  | Not Started |
| L134 | P019 + M35 | [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) (also builds DSA Master: Longest Common Subsequence) | Medium | DSA Master: 2. Dynamic Programming + Blind 75 #19 Dynamic Programming | One lesson: P019 is the practice check for M35 | Not Started |
| L135 | P057 | [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) | Medium | Blind 75 #57 String · IM100 #41 |  | Not Started |
| L136 | P058 | [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) | Medium | Blind 75 #58 String |  | Not Started |

## Phase 18 Bit Manipulation & Math

Folder: `practice/18-bit-manipulation-math/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L137 | P012 | [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) | Easy | Blind 75 #12 Binary · IM100 #25 |  | Not Started |
| L138 | P138 | [Single Number](https://leetcode.com/problems/single-number/) | Easy | IM100 #11 | Was supplementary S30 | Not Started |
| L139 | P014 | [Missing Number](https://leetcode.com/problems/missing-number/) | Easy | Blind 75 #14 Binary · IM100 #14 |  | Not Started |
| L140 | P015 | [Reverse Bits](https://leetcode.com/problems/reverse-bits/) | Easy | Blind 75 #15 Binary |  | Not Started |
| L141 | P013 | [Counting Bits](https://leetcode.com/problems/counting-bits/) | Easy | Blind 75 #13 Binary |  | Not Started |
| L142 | P139 | [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/) | Medium | IM100 #82 |  | Not Started |
| L143 | P011 | [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) | Medium | Blind 75 #11 Binary |  | Not Started |
| L144 | P140 | [Palindrome Number](https://leetcode.com/problems/palindrome-number/) | Easy | IM100 #83 |  | Not Started |
| L145 | P141 | [Plus One](https://leetcode.com/problems/plus-one/) | Easy | IM100 #84 |  | Not Started |
