# Learning Order: Blind 75 + DSA Master (one combined order)

This is the single study order for both tracks (the learner's choice, 2026-10-22). It has **102 numbered lessons (L001-L102)**, which come after the Phase 00 foundations lessons F1-F5.

- **The main problem list has 97 problems: P001-P098**, all tracked in [blind75-tracker.csv](blind75-tracker.csv). There are 98 rows because P043 and P074 are the same problem.
  - **P001-P076** are the Blind 75 sheet entries, in the sheet's order.
  - **P077-P098** are the 22 LeetCode problems that test your DSA Master code. They are not on the sheet. Each one is solved inside its build lesson, for example `M04 + P077`.
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
| 01 Arrays & Hashing | `01-arrays-hashing` | L001-L006 | 6 | 0 |
| 02 Prefix & Suffix | `02-prefix-suffix` | L007 | 1 | 0 |
| 03 Two Pointers | `03-two-pointers` | L008-L011 | 4 | 1 |
| 04 Sliding Window | `04-sliding-window` | L012-L016 | 5 | 1 |
| 05 Stack & Queue | `05-stack-queue` | L017-L019 | 1 | 2 |
| 06 Binary Search | `06-binary-search` | L020-L022 | 3 | 1 |
| 07 Matrix | `07-matrix` | L023-L025 | 3 | 0 |
| 08 Recursion & Sorting | `08-recursion-sorting` | L026-L028 | 1 | 3 |
| 09 Linked List | `09-linked-list` | L029-L035 | 7 | 4 |
| 10 Trees | `10-trees` | L036-L048 | 15 | 3 |
| 11 Heap / Priority Queue | `11-heap` | L049-L054 | 5 | 3 |
| 12 Backtracking | `12-backtracking` | L055-L059 | 5 | 3 |
| 13 Trie | `13-trie` | L060-L063 | 4 | 3 |
| 14 Intervals | `14-intervals` | L064-L068 | 5 | 0 |
| 15 Graphs | `15-graphs` | L069-L078 | 9 | 5 |
| 16 Union-Find & Greedy | `16-union-find-greedy` | L079-L081 | 3 | 4 |
| 17 Dynamic Programming | `17-dynamic-programming` | L082-L097 | 16 | 3 |
| 18 Bit Manipulation | `18-bit-manipulation` | L098-L102 | 5 | 0 |
| **Total** | | **F1-F5 + 102** | **98** | **39** |

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
| L001 | P003 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | Easy | Blind 75 #3 Arrays |  | Not Started |
| L002 | P053 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | Easy | Blind 75 #53 String |  | Not Started |
| L003 | P001 | [Two Sum](https://leetcode.com/problems/two-sum/) | Easy | Blind 75 #1 Arrays |  | Not Started |
| L004 | P054 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | Blind 75 #54 String |  | Not Started |
| L005 | P031 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Medium | Blind 75 #31 Graph |  | Not Started |
| L006 | P059 | [Encode and Decode Strings (Leetcode Premium)](https://leetcode.com/problems/encode-and-decode-strings/) | Medium | Blind 75 #59 String | LeetCode Premium: no access, so use a free equivalent (link verified when we reach it) | Not Started |

## Phase 02 Prefix & Suffix

Folder: `practice/02-prefix-suffix/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L007 | P004 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | Medium | Blind 75 #4 Arrays |  | Not Started |

## Phase 03 Two Pointers

Folder: `practice/03-two-pointers/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L008 | M04 + P077 | **Build:** Two Pointers, then solve [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | Easy | DSA Master: 1. Arrays | One lesson: P077 is the practice check for M04 | Not Started |
| L009 | P056 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | Easy | Blind 75 #56 String |  | Not Started |
| L010 | P009 | [3Sum](https://leetcode.com/problems/3sum/) | Medium | Blind 75 #9 Arrays |  | Not Started |
| L011 | P010 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | Medium | Blind 75 #10 Arrays |  | Not Started |

## Phase 04 Sliding Window

Folder: `practice/04-sliding-window/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L012 | M05 + P078 | **Build:** Sliding Window, then solve [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/) | Easy | DSA Master: 1. Arrays | One lesson: P078 is the practice check for M05. Also: stretch: [LC 239 Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | Not Started |
| L013 | P002 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Easy | Blind 75 #2 Arrays |  | Not Started |
| L014 | P050 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | Blind 75 #50 String |  | Not Started |
| L015 | P051 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | Medium | Blind 75 #51 String |  | Not Started |
| L016 | P052 | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | Hard | Blind 75 #52 String |  | Not Started |

## Phase 05 Stack & Queue

Folder: `practice/05-stack-queue/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L017 | M15 | **Build:** Push/Pop/Peek | Understand | DSA Master: 5. Stacks | Understand only; no from-scratch build | Not Started |
| L018 | M16 | **Build:** Enqueue/Dequeue | Understand | DSA Master: 6. Queues | Understand only; no from-scratch build | Not Started |
| L019 | P055 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Easy | Blind 75 #55 String |  | Not Started |

## Phase 06 Binary Search

Folder: `practice/06-binary-search/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L020 | M03 + P079 | **Build:** Binary Search, then solve [Binary Search](https://leetcode.com/problems/binary-search/) | Easy | DSA Master: 1. Arrays | One lesson: P079 is the practice check for M03 | Not Started |
| L021 | P007 | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Medium | Blind 75 #7 Arrays |  | Not Started |
| L022 | P008 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | Blind 75 #8 Arrays |  | Not Started |

## Phase 07 Matrix

Folder: `practice/07-matrix/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L023 | P048 | [Rotate Image](https://leetcode.com/problems/rotate-image/) | Medium | Blind 75 #48 Matrix |  | Not Started |
| L024 | P047 | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | Medium | Blind 75 #47 Matrix |  | Not Started |
| L025 | P046 | [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) | Medium | Blind 75 #46 Matrix |  | Not Started |

## Phase 08 Recursion & Sorting

Folder: `practice/08-recursion-sorting/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L026 | M30 | **Build:** Factorial | Implement | DSA Master: 1. Recursion | Tested locally | Not Started |
| L027 | M02 + P080 | **Build:** MergeSort, then solve [Sort an Array](https://leetcode.com/problems/sort-an-array/) | Medium | DSA Master: 1. Arrays | One lesson: P080 is the practice check for M02 | Not Started |
| L028 | M01 | **Build:** QuickSort | Implement | DSA Master: 1. Arrays | Check: [LC 912 Sort an Array](https://leetcode.com/problems/sort-an-array/) (P080, solved again) | Not Started |

## Phase 09 Linked List

Folder: `practice/09-linked-list/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L029 | M06 + P081 | **Build:** Traversal, then solve [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | Easy | DSA Master: 2. Linked Lists | One lesson: P081 is the practice check for M06 | Not Started |
| L030 | M07 + P082 | **Build:** Insertion/Deletion, then solve [Design Linked List](https://leetcode.com/problems/design-linked-list/) | Medium | DSA Master: 2. Linked Lists | One lesson: P082 is the practice check for M07 | Not Started |
| L031 | M08 + P040 | **Build:** Reversal, then solve [Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/) | Easy | DSA Master: 2. Linked Lists + Blind 75 #40 Linked List | One lesson: P040 is the practice check for M08 | Not Started |
| L032 | M09 + P041 | **Build:** Cycle Detection, then solve [Detect Cycle in a Linked List](https://leetcode.com/problems/linked-list-cycle/) | Easy | DSA Master: 2. Linked Lists + Blind 75 #41 Linked List | One lesson: P041 is the practice check for M09 | Not Started |
| L033 | P042 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | Easy | Blind 75 #42 Linked List |  | Not Started |
| L034 | P044 | [Remove Nth Node From End Of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | Medium | Blind 75 #44 Linked List |  | Not Started |
| L035 | P045 | [Reorder List](https://leetcode.com/problems/reorder-list/) | Medium | Blind 75 #45 Linked List |  | Not Started |

## Phase 10 Trees

Folder: `practice/10-trees/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L036 | M13 + M31 + P083 + P084 + P085 | **Build:** Traversal + Tree traversals, then solve [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/), [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/), [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/) | Easy | DSA Master: 4. Trees (Binary Trees, Binary Search Trees, etc.) | One lesson: P083, P084, P085 are the practice checks for M13 and M31 | Not Started |
| L037 | M14 + P086 | **Build:** Searching, then solve [Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/) | Easy | DSA Master: 4. Trees (Binary Trees, Binary Search Trees, etc.) | One lesson: P086 is the practice check for M14 | Not Started |
| L038 | P060 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | Easy | Blind 75 #60 Tree |  | Not Started |
| L039 | P062 | [Invert/Flip Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | Easy | Blind 75 #62 Tree |  | Not Started |
| L040 | P061 | [Same Tree](https://leetcode.com/problems/same-tree/) | Easy | Blind 75 #61 Tree |  | Not Started |
| L041 | P066 | [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) | Easy | Blind 75 #66 Tree |  | Not Started |
| L042 | P064 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | Medium | Blind 75 #64 Tree |  | Not Started |
| L043 | P070 | [Lowest Common Ancestor of BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | Medium | Blind 75 #70 Tree |  | Not Started |
| L044 | P068 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | Medium | Blind 75 #68 Tree |  | Not Started |
| L045 | P069 | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | Medium | Blind 75 #69 Tree |  | Not Started |
| L046 | P067 | [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | Medium | Blind 75 #67 Tree |  | Not Started |
| L047 | P063 | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Hard | Blind 75 #63 Tree |  | Not Started |
| L048 | P065 | [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Hard | Blind 75 #65 Tree |  | Not Started |

## Phase 11 Heap / Priority Queue

Folder: `practice/11-heap/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L049 | M17 | **Build:** Insertion/Deletion | Understand | DSA Master: 7. Heaps (Priority Queues) | Understand only; no from-scratch build | Not Started |
| L050 | M18 | **Build:** Building a Heap | Understand | DSA Master: 7. Heaps (Priority Queues) | Understand only; no from-scratch build | Not Started |
| L051 | M19 + P075 + P087 | **Build:** Top K Elements, then solve [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/), [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Medium | DSA Master: 7. Heaps (Priority Queues) + Blind 75 #75 Heap | One lesson: P075, P087 are the practice checks for M19 | Not Started |
| L052 | P043 | [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | Blind 75 #43 Linked List | Same problem as P074 (sheet #74, Heap) | Not Started |
| L053 | P074 | [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) | Hard | Blind 75 #74 Heap | Same problem as P043 (sheet #43, Linked List) | Not Started |
| L054 | P076 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | Hard | Blind 75 #76 Heap |  | Not Started |

## Phase 12 Backtracking

Folder: `practice/12-backtracking/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L055 | M39 + P088 | **Build:** Permutations, then solve [Permutations](https://leetcode.com/problems/permutations/) | Medium | DSA Master: 4. Backtracking | One lesson: P088 is the practice check for M39 | Not Started |
| L056 | P021 | [Combination Sum](https://leetcode.com/problems/combination-sum/) | Medium | Blind 75 #21 Dynamic Programming |  | Not Started |
| L057 | P049 | [Word Search](https://leetcode.com/problems/word-search/) | Medium | Blind 75 #49 Matrix |  | Not Started |
| L058 | M38 + P089 | **Build:** N-Queens, then solve [N-Queens](https://leetcode.com/problems/n-queens/) | Hard | DSA Master: 4. Backtracking | One lesson: P089 is the practice check for M38 | Not Started |
| L059 | M37 + P090 | **Build:** Sudoku Solver, then solve [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/) | Hard | DSA Master: 4. Backtracking | One lesson: P090 is the practice check for M37 | Not Started |

## Phase 13 Trie

Folder: `practice/13-trie/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L060 | M24 + M25 + P071 | **Build:** Implement Trie + Insertion/Searching, then solve [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) | Medium | DSA Master: 9. Tries + Blind 75 #71 Tree | One lesson: P071 is the practice check for M24 and M25 | Not Started |
| L061 | M26 + P091 | **Build:** Autocompletion, then solve [Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/) | Medium | DSA Master: 9. Tries | One lesson: P091 is the practice check for M26 | Not Started |
| L062 | P072 | [Add and Search Word](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | Medium | Blind 75 #72 Tree | Sheet link outdated, use LC 211 | Not Started |
| L063 | P073 | [Word Search II](https://leetcode.com/problems/word-search-ii/) | Hard | Blind 75 #73 Tree |  | Not Started |

## Phase 14 Intervals

Folder: `practice/14-intervals/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L064 | P038 | [Meeting Rooms (Leetcode Premium)](https://leetcode.com/problems/meeting-rooms/) | Easy | Blind 75 #38 Interval | LeetCode Premium: no access, so use a free equivalent (link verified when we reach it) | Not Started |
| L065 | P036 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | Blind 75 #36 Interval |  | Not Started |
| L066 | P035 | [Insert Interval](https://leetcode.com/problems/insert-interval/) | Medium | Blind 75 #35 Interval |  | Not Started |
| L067 | P037 | [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | Medium | Blind 75 #37 Interval |  | Not Started |
| L068 | P039 | [Meeting Rooms II (Leetcode Premium)](https://leetcode.com/problems/meeting-rooms-ii/) | Medium | Blind 75 #39 Interval | LeetCode Premium: no access, so use a free equivalent (link verified when we reach it) | Not Started |

## Phase 15 Graphs

Folder: `practice/15-graphs/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L069 | M20 + P092 | **Build:** BFS, then solve [Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/) | Easy | DSA Master: 8. Graphs | One lesson: P092 is the practice check for M20 | Not Started |
| L070 | M21 + M32 | **Build:** DFS + Depth-first search | Implement | DSA Master: 8. Graphs | Check: [LC 1971 Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/) (P092, solved again). One lesson for M21 and M32 | Not Started |
| L071 | M23 + P028 | **Build:** Cycle Detection, then solve [Course Schedule](https://leetcode.com/problems/course-schedule/) | Medium | DSA Master: 8. Graphs + Blind 75 #28 Graph | One lesson: P028 is the practice check for M23 | Not Started |
| L072 | M22 + P093 | **Build:** Dijkstra's Algorithm, then solve [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | Medium | DSA Master: 8. Graphs | One lesson: P093 is the practice check for M22 | Not Started |
| L073 | P030 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Medium | Blind 75 #30 Graph |  | Not Started |
| L074 | P027 | [Clone Graph](https://leetcode.com/problems/clone-graph/) | Medium | Blind 75 #27 Graph |  | Not Started |
| L075 | P029 | [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) | Medium | Blind 75 #29 Graph |  | Not Started |
| L076 | P034 | [Number of Connected Components in an Undirected Graph (Leetcode Premium)](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) | Medium | Blind 75 #34 Graph | LeetCode Premium: no access, so use a free equivalent (link verified when we reach it) | Not Started |
| L077 | P033 | [Graph Valid Tree (Leetcode Premium)](https://leetcode.com/problems/graph-valid-tree/) | Medium | Blind 75 #33 Graph | LeetCode Premium: no access, so use a free equivalent (link verified when we reach it) | Not Started |
| L078 | P032 | [Alien Dictionary (Leetcode Premium)](https://leetcode.com/problems/alien-dictionary/) | Hard | Blind 75 #32 Graph | LeetCode Premium: no access, so use a free equivalent (link verified when we reach it) | Not Started |

## Phase 16 Union-Find & Greedy

Folder: `practice/16-union-find-greedy/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L079 | M27 + M28 + P094 | **Build:** Implement Union-Find + Find/Union, then solve [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | Medium | DSA Master: 10. Union-Find (Disjoint Set) | One lesson: P094 is the practice check for M27 and M28 | Not Started |
| L080 | M29 + P095 | **Build:** Cycle Detection (undirected), then solve [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | Medium | DSA Master: 10. Union-Find (Disjoint Set) | One lesson: P095 is the practice check for M29 | Not Started |
| L081 | M36 + P096 | **Build:** Kruskal's MST, then solve [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | Medium | DSA Master: 3. Greedy Algorithms | One lesson: P096 is the practice check for M36 | Not Started |

## Phase 17 Dynamic Programming

Folder: `practice/17-dynamic-programming/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L082 | M33 + P097 | **Build:** Fibonacci, then solve [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | Easy | DSA Master: 2. Dynamic Programming | One lesson: P097 is the practice check for M33 | Not Started |
| L083 | M34 + P098 | **Build:** Knapsack, then solve [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) | Medium | DSA Master: 2. Dynamic Programming | One lesson: P098 is the practice check for M34 | Not Started |
| L084 | P016 | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | Easy | Blind 75 #16 Dynamic Programming |  | Not Started |
| L085 | P022 | [House Robber](https://leetcode.com/problems/house-robber/) | Medium | Blind 75 #22 Dynamic Programming |  | Not Started |
| L086 | P023 | [House Robber II](https://leetcode.com/problems/house-robber-ii/) | Medium | Blind 75 #23 Dynamic Programming |  | Not Started |
| L087 | P005 | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | Medium | Blind 75 #5 Arrays |  | Not Started |
| L088 | P006 | [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) | Medium | Blind 75 #6 Arrays |  | Not Started |
| L089 | P017 | [Coin Change](https://leetcode.com/problems/coin-change/) | Medium | Blind 75 #17 Dynamic Programming |  | Not Started |
| L090 | P024 | [Decode Ways](https://leetcode.com/problems/decode-ways/) | Medium | Blind 75 #24 Dynamic Programming |  | Not Started |
| L091 | P020 | [Word Break Problem](https://leetcode.com/problems/word-break/) | Medium | Blind 75 #20 Dynamic Programming |  | Not Started |
| L092 | P018 | [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | Medium | Blind 75 #18 Dynamic Programming |  | Not Started |
| L093 | P026 | [Jump Game](https://leetcode.com/problems/jump-game/) | Medium | Blind 75 #26 Dynamic Programming |  | Not Started |
| L094 | P025 | [Unique Paths](https://leetcode.com/problems/unique-paths/) | Medium | Blind 75 #25 Dynamic Programming |  | Not Started |
| L095 | P019 + M35 | [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) (also builds DSA Master: Longest Common Subsequence) | Medium | DSA Master: 2. Dynamic Programming + Blind 75 #19 Dynamic Programming | One lesson: P019 is the practice check for M35 | Not Started |
| L096 | P057 | [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) | Medium | Blind 75 #57 String |  | Not Started |
| L097 | P058 | [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) | Medium | Blind 75 #58 String |  | Not Started |

## Phase 18 Bit Manipulation

Folder: `practice/18-bit-manipulation/`

| Order | ID | Problem / item | Difficulty | Source | Note | Status |
|---|---|---|---|---|---|---|
| L098 | P012 | [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) | Easy | Blind 75 #12 Binary |  | Not Started |
| L099 | P014 | [Missing Number](https://leetcode.com/problems/missing-number/) | Easy | Blind 75 #14 Binary |  | Not Started |
| L100 | P015 | [Reverse Bits](https://leetcode.com/problems/reverse-bits/) | Easy | Blind 75 #15 Binary |  | Not Started |
| L101 | P013 | [Counting Bits](https://leetcode.com/problems/counting-bits/) | Easy | Blind 75 #13 Binary |  | Not Started |
| L102 | P011 | [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) | Medium | Blind 75 #11 Binary |  | Not Started |
