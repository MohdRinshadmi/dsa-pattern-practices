# DSA Mastery: 97 problems (Blind 75 + DSA Master)

**The main problem list has 97 problems:** the 75 from the Blind 75 sheet (P001-P076, 76 rows, because one problem appears twice) plus the 22 LeetCode problems that test the [DSA Master](../dsa-master/README.md) build lessons (P077-P098). Everything below about "the sheet" describes the Blind 75 sheet itself.

Source: Google Sheet "Copy of Blind 75 WeCode", tab "Blind 75". The share link is private (HTTP 401), so the sheet was received as a PDF export on 2026-10-21. Every LeetCode link was checked against LeetCode's own API and every video link against YouTube on the same day.

## Files in this folder

| File | Purpose |
|---|---|
| [tracker/blind75-tracker.csv](tracker/blind75-tracker.csv) | Master problem tracker: all 97 problems in 98 rows. P001-P076 are the sheet entries; P077-P098 are the DSA Master check problems (`Sheet_Tab` = "DSA Master check"). Live status. Opens in Excel or Google Sheets. The file keeps its original name. |
| [tracker/learning-order.md](tracker/learning-order.md) | The combined study order L001-L102 (97 problems + 39 DSA Master items), grouped into phases 00-18. |
| [supplementary-roadmap.md](supplementary-roadmap.md) | Extra problems and topics that are not in the sheet. Optional, tracked separately. |
| [progress-log.md](progress-log.md) | A checkpoint at the end of every session, including the next problem. |
| [CLAUDE.md](CLAUDE.md) | Mentor instructions, loaded automatically, so a new session can resume with "Continue DSA". |
| practice/NN-phase/ | Exactly three files per lesson or problem: `.md` (questions, your answers, notes), `.py` and `.js`. |

## The sheet

**Columns:** Category, No., Category, Name, Technique, Notes, Malayalam Video Solution, Link, then five study-group status columns (Mohammed, Rinshad, Manaf, Ludaid, GOKK).

**Totals**

| Measure | Count |
|---|---|
| Rows (problem entries) | 76 |
| Unique problems | 75 (Merge K Sorted Lists appears twice: #43 and #74) |
| Easy / Medium / Hard (LeetCode's labels) | 19 / 49 / 8 |
| LeetCode Premium | 6 (#32, #33, #34, #38, #39, #59) |
| Rows with a video | 25 (all working; WeCode Malayalam videos, coded in Python) |
| Rows with a Technique value | 19 |
| Rows with Notes | 76 |

**By category (sheet order)**

| # | Category | Rows | Easy | Medium | Hard |
|---|---|---|---|---|---|
| 1-10 | Arrays | 10 | 3 | 7 | 0 |
| 11-15 | Binary | 5 | 4 | 1 | 0 |
| 16-26 | Dynamic Programming | 11 | 1 | 10 | 0 |
| 27-34 | Graph | 8 | 0 | 7 | 1 |
| 35-39 | Interval | 5 | 1 | 4 | 0 |
| 40-45 | Linked List | 6 | 3 | 2 | 1 |
| 46-49 | Matrix | 4 | 0 | 4 | 0 |
| 50-59 | String | 10 | 3 | 6 | 1 |
| 60-73 | Tree | 14 | 4 | 7 | 3 |
| 74-76 | Heap | 3 | 0 | 1 | 2 |
| | **Total** | **76** | **19** | **49** | **8** |

## Data-quality findings

1. **Duplicate:** #43 (Linked List) and #74 (Heap) are the same problem with the same URL. Both rows are kept. It is solved once at P043, and P074 gets a separate pass focused on the heap approach.
2. **Outdated link:** #72 "Add and Search Word" points to an old LeetCode address that the API no longer recognises. The current problem is LC 211 "Design Add and Search Words Data Structure". The original URL is kept, and the current one is added in the tracker.
3. **Premium problems:** #32 Alien Dictionary, #33 Graph Valid Tree, #34 Number of Connected Components, #38 Meeting Rooms, #39 Meeting Rooms II and #59 Encode and Decode Strings require LeetCode Premium.
4. **No difficulty column:** the names are colour-coded, but colour is not reliable in a PDF. Difficulty comes from LeetCode's API instead.
5. **Category does not always match the technique:**
   - #21 Combination Sum is filed under DP, but LC 39 is a backtracking problem. Some versions of the Blind 75 list use Combination Sum IV (LC 377, which is DP) in this slot. LC 377 is added to the supplementary list.
   - #26 Jump Game is filed under DP. Its optimal solution is greedy.
   - #31 Longest Consecutive Sequence is filed under Graph. Its standard solution is a hash set.
   - #49 Word Search is filed under Matrix. It is grid backtracking.
   - #71-#73 are filed under Tree. They are Tries.
   - #57 and #58 are filed under String. They use expand-around-center (DP is an alternative).
6. **Notes column contains solution spoilers.** It is kept out of the tracker on purpose. It is only used as a late hint, after you have attempted the problem.
7. **Cosmetic:** category separator rows contain stray "Todo" values in the status columns. The study-group status columns are other people's progress, so they are not imported.
8. **Tabs:** the learner confirmed that "Blind 75" is the only tab, so the PDF covers the whole workbook.

## Learning order

The P-IDs follow the original sheet order. The study order is rearranged so that every problem's prerequisites come first. Strict sheet order would put DP (#16-26) before recursion and trees, and it would reach Merge K Sorted Lists (#43, which needs a heap) long before the Heap section (#74-76). No sheet entry is dropped. The full table is in [tracker/learning-order.md](tracker/learning-order.md).

Since 2026-10-22, the learning order also includes the [DSA Master](../dsa-master/README.md) track (M01-M39), where you build each data structure and algorithm from scratch. Every lesson of both tracks has one number, **L001-L102**. Each build lesson sits at the start of the phase that uses it. Two phases were added: 08 Recursion & Sorting and 16 Union-Find & Greedy, so the phase numbers after 07 moved.

| Phase | Lessons | Problems (in study order) | DSA Master builds |
|---|---|---|---|
| 00 Foundations | F1-F5 | none | M10-M12 (inside F5) |
| 01 Arrays & Hashing | L001-L006 | P003, P053, P001, P054, P031, P059 | |
| 02 Prefix & Suffix | L007 | P004 | |
| 03 Two Pointers | L008-L011 | P077, P056, P009, P010 | M04 (with P077) |
| 04 Sliding Window | L012-L016 | P078, P002, P050, P051, P052 | M05 (with P078) |
| 05 Stack & Queue | L017-L019 | P055 | M15, M16 |
| 06 Binary Search | L020-L022 | P079, P007, P008 | M03 (with P079) |
| 07 Matrix | L023-L025 | P048, P047, P046 | |
| 08 Recursion & Sorting | L026-L028 | P080 | M30, M02 (with P080), M01 |
| 09 Linked List | L029-L035 | P081, P082, P040, P041, P042, P044, P045 | M06 (with P081), M07 (with P082), M08 (with P040), M09 (with P041) |
| 10 Trees | L036-L048 | P083, P084, P085, P086, P060, P062, P061, P066, P064, P070, P068, P069, P067, P063, P065 | M13 + M31 (with P083-P085), M14 (with P086) |
| 11 Heap / Priority Queue | L049-L054 | P075, P087, P043, P074, P076 | M17, M18, M19 (with P075, P087) |
| 12 Backtracking | L055-L059 | P088, P021, P049, P089, P090 | M39 (with P088) before; M38 (with P089), M37 (with P090) after |
| 13 Trie | L060-L063 | P071, P091, P072, P073 | M24 + M25 (with P071), M26 (with P091) |
| 14 Intervals | L064-L068 | P038, P036, P035, P037, P039 | |
| 15 Graphs | L069-L078 | P092, P028, P093, P030, P027, P029, P034, P033, P032 | M20 (with P092), M21 + M32, M23 (with P028), M22 (with P093) |
| 16 Union-Find & Greedy | L079-L081 | P094, P095, P096 | M27 + M28 (with P094), M29 (with P095), M36 (with P096) |
| 17 Dynamic Programming | L082-L097 | P097, P098, P016, P022, P023, P005, P006, P017, P024, P020, P018, P026, P025, P019, P057, P058 | M33 (with P097), M34 (with P098), M35 (with P019) |
| 18 Bit Manipulation | L098-L102 | P012, P014, P015, P013, P011 | |
| **Total** | **102 lessons** | **98 rows = 97 unique problems** | **39 items** |

## Status values (tracker "Status" column)

Not Started, Learning Prerequisites, Attempting, Solved With Hints, Solved With Full Assistance, Solved Independently, Blocked.

**Mastery** is a separate column: Not Assessed, Needs Revision or Mastered. Mastered means you can independently explain the intuition, derive and implement the algorithm, analyse its complexity, handle edge cases, and solve an unfamiliar variation. Reading or understanding a solution does not count.

## Revision schedule

The default gaps after a problem are +1, +3, +7, +14 and +30 days. Problems solved with heavy help are revisited sooner. Problems solved cleanly and independently move to longer gaps. In each revision you rebuild the solution from memory before seeing any notes.
