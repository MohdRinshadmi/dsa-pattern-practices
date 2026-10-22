# Supplementary Roadmap (not part of the sheet)

These problems fill gaps in the Blind 75 sheet. They are optional, they never replace a sheet problem, and their progress is tracked only here, not in the main tracker. The exception: on 2026-10-22, 16 entries joined the main problem list. Nine became DSA Master check problems, and seven are on Interview Master 100. Their Status column says "In main list as P0xx", and their progress is tracked there. Every entry was checked against LeetCode's API on 2026-10-21, and all are free.

**Priority:** *Core* fills a real gap that interviews commonly test. *Extra* is for depth once the phase feels comfortable.

| ID | Problem | LC # | Difficulty | Gap it fills | Slot | Priority | Status |
|---|---|---|---|---|---|---|---|
| S01 | [Sort an Array](https://leetcode.com/problems/sort-an-array/) | 912 | Medium | Implementing merge sort and quicksort yourself | Phase 08, as the check for DSA Master M02/M01 | Core | In main list as P080 |
| S02 | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | 560 | Medium | Prefix sum combined with a hash map | After P004 | Core | Not Started |
| S03 | [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | 167 | Medium | Basic two pointers (warm-up for 3Sum) | Before P009 | Core | In main list as P104 |
| S04 | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | 42 | Hard | Two pointers with left/right maxima | After P010 | Extra | In main list as P106 |
| S05 | [Permutation in String](https://leetcode.com/problems/permutation-in-string/) | 567 | Medium | Fixed-size sliding window | Phase 04 | Extra | Not Started |
| S06 | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | 239 | Hard | Monotonic deque | After P052 (also the stretch check for M05) | Extra | Not Started |
| S07 | [Min Stack](https://leetcode.com/problems/min-stack/) | 155 | Medium | Stack design | After P055 | Core | In main list as P107 |
| S08 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | 739 | Medium | Monotonic stack (absent from sheet) | After P055 | Core | Not Started |
| S09 | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | 84 | Hard | Advanced monotonic stack | After S08 | Extra | Not Started |
| S10 | [Binary Search](https://leetcode.com/problems/binary-search/) | 704 | Easy | Plain binary search before rotated variants | Phase 06, as the check for M03 | Core | In main list as P079 |
| S11 | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | 74 | Medium | Binary search over a mapped index space | Phase 06 | Extra | In main list as P110 |
| S12 | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | 875 | Medium | Binary search on the answer | Phase 06 | Core | Not Started |
| S13 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | 146 | Medium | Hash map + doubly linked list design | After Phase 09 | Core | Not Started |
| S14 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | 215 | Medium | Heap of size k; quickselect | Phase 11, as a check for M19 | Core | In main list as P087 |
| S15 | [Subsets](https://leetcode.com/problems/subsets/) | 78 | Medium | Backtracking basics (include/exclude) | Before P021 | Core | In main list as P128 |
| S16 | [Permutations](https://leetcode.com/problems/permutations/) | 46 | Medium | Backtracking with a used-set | Phase 12, as the check for M39 | Core | In main list as P088 |
| S17 | [N-Queens](https://leetcode.com/problems/n-queens/) | 51 | Hard | Backtracking with constraint pruning | Phase 12, as the check for M38 | Extra | In main list as P089 |
| S18 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | 994 | Medium | Multi-source BFS / shortest steps on a grid | Phase 15 | Core | Not Started |
| S19 | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | 210 | Medium | Kahn's algorithm (BFS topological order) | After P028 | Core | In main list as P133 |
| S20 | [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | 684 | Medium | Union-Find as a main technique | Phase 16, as the check for M29 | Core | In main list as P095 |
| S21 | [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | 743 | Medium | Dijkstra (shortest paths, absent from sheet) | Phase 15, as the check for M22 | Core | In main list as P093 |
| S22 | [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | 787 | Medium | Bellman-Ford / BFS with a constraint | After S21 | Extra | Not Started |
| S23 | [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | 1584 | Medium | Minimum spanning tree (Prim / Kruskal) | Phase 16, as the check for M36 | Extra | In main list as P096 |
| S24 | [Jump Game II](https://leetcode.com/problems/jump-game-ii/) | 45 | Medium | Greedy (BFS-by-levels idea) | After P026 | Extra | Not Started |
| S25 | [Gas Station](https://leetcode.com/problems/gas-station/) | 134 | Medium | Greedy with a proof | Phase 17 | Extra | Not Started |
| S26 | [Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/) | 377 | Medium | The DP problem some Blind 75 versions use instead of LC 39 | Phase 17 | Core | Not Started |
| S27 | [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) | 416 | Medium | 0/1 knapsack (absent from sheet) | Phase 17, as the check for M34 | Core | In main list as P098 |
| S28 | [Edit Distance](https://leetcode.com/problems/edit-distance/) | 72 | Medium | Classic 2-D string DP | After P019 | Core | Not Started |
| S29 | [Burst Balloons](https://leetcode.com/problems/burst-balloons/) | 312 | Hard | Interval DP | End of Phase 17 | Extra | Not Started |
| S30 | [Single Number](https://leetcode.com/problems/single-number/) | 136 | Easy | XOR cancellation | Before P014 | Extra | In main list as P138 |

## Concepts the sheet assumes but never teaches

These are taught as lessons, not problems:

- Time and space complexity (Big-O, Big-Theta, Big-Omega; best, average and worst case)
- Recursion and the call stack (needed before trees, backtracking and DP)
- Sorting algorithms and their costs (merge sort, quicksort, why comparison sorting is O(n log n))
- Binary search invariants (lo/hi boundaries, avoiding off-by-one errors)
- Hash table internals (why lookup is O(1) on average, collisions)
- Heap internals (sift-up and sift-down, building a heap in O(n))
- Graph representations (adjacency list vs matrix, directed vs undirected)
- Language-specific integer overflow and unsigned arithmetic (needed for the Bit Manipulation phase)
