# Progress Log

Newest session at the bottom. Totals are counted from [tracker/blind75-tracker.csv](tracker/blind75-tracker.csv), never estimated.

## 2026-10-21, Session 1 (setup)

- The Google Sheet link is private (HTTP 401). The sheet was received as a PDF export instead: "Copy of Blind 75 WeCode - Blind 75.pdf".
- Extracted all 76 rows. Checked all 76 LeetCode links (75 OK, #72 outdated, current problem is LC 211) and all 25 video links (all OK).
- Created the tracker, learning order, supplementary roadmap and CLAUDE.md.
- **Totals:** 76 entries (75 unique). Not Started 76, Solved 0, Mastered 0, Blocked 0.
- **Learner's answers:** Python primary (also knows JavaScript), 1 hour per day, level between absolute beginner and basic programming, recommended order approved, no LeetCode Premium (use free equivalents), "Blind 75" is the only tab.
- **Started:** Phase 00, lesson F1 (Python warm-up check). The 7 questions are in practice/00-foundations/F1-warmup.md, waiting for the learner's answers.
- **Installed Python 3.14.7** (per-user, on PATH) using winget. The first attempt hung, because the bundled all-users `py` launcher needed admin rights. Stopped it and reinstalled without the launcher. The existing `py` launcher now finds 3.14.7.
- **F1 results:**
  - Q2 correct. Knows loops and that indexing starts at 0.
  - Q1: thought nums[-1] was undefined (JavaScript habit) and that len equals the last index.
  - Q3: didn't know range(len(...)).
  - Q4 and Q5: didn't know sets or dicts; deferred to F5.
  - Q6: answered 196 instead of 12. The reasoning hasn't been explained yet; ask.
  - Q7: "loop and check", which is vague.
  - Taught: negative indexing, len vs last index, IndexError, print's space separator, range(len) mapped to the JavaScript for-loop, inside-out evaluation of nested calls.
- **Next:** review practice/00-foundations/F1b-check.md (snippets A to C, a detailed Q7, and how they got 196). If solid, move to F2 (Big-O), using the learner's Q7 steps as the example. P003 Contains Duplicate comes after F5.

## 2026-10-22, Session 2

- **Learner asked to learn Python and JavaScript side by side.** Updated CLAUDE.md. Every exercise now has .py and .js versions, and notes/python-vs-javascript.md tracks the differences.
- Rewrote F1b-check.md with both languages; the JS version of A also tests `letters[-2]` vs `letters.at(-2)`. Added F1-warmup.js (uses Set and Map for Q4 and Q5) and F1b-check.js.
- **Totals (from the CSV):** Not Started 76, Solved 0, Mastered 0. No revisions due.
- **Consolidated files at the learner's request:** each lesson or problem gets exactly one .md, one .py and one .js. Merged F1b into the F1-warmup files as "Part 2". Moved the Python vs JavaScript table into the Notes section of F1-warmup.md. Deleted the F1b-check files and the notes/ folder. Updated CLAUDE.md and README.
- **Next:** the learner answers Part 2 of F1-warmup.md (A to C in both languages, the detailed Q7, how they got 196). Then F2 (Big-O) as F2-big-o.md/.py/.js.

## 2026-10-22, Session 2 (continued): DSA Master track added

- **The learner added InstaByte's "DSA Master" checklist** (<https://instabyte.io/p/dsa-master>) as a new folder, ../dsa-master. It has 39 items, M01-M39: data structures and algorithms to build from scratch.
- **The learner chose to interleave the two tracks.** tracker/learning-order.md now has a **Build first** line in each phase. Those M-items come before the phase's problems.
- **Shared work:** F5 covers M10-M12. P040, P041, P075, P071, P028 and P019 are solved inside their M lessons and recorded in both trackers.
- Updated CLAUDE.md, README.md and S01's slot in supplementary-roadmap.md. S01 is now "before Phase 08, with M02/M01".
- **Totals (from the CSV):** Not Started 76, Solved 0, Mastered 0. No revisions due.
- **Next:** unchanged. The learner answers F1-warmup Part 2, then F2 (Big-O).

## 2026-10-22, Session 2 (continued): one numbering for both tracks

- **The learner asked for every file to follow the combined order, with numbers and folders renumbered for the new lessons.**
- **Learn_Order is now L001-L102** in both trackers. That is 76 sheet entries + 39 DSA Master items, minus 13 that share a lesson: M10-M12 are in F5, M13+M31, M21+M32, M24+M25 and M27+M28 are pairs, and M08, M09, M19, M24/M25, M23 and M35 each share a lesson with P040, P041, P075, P071, P028 and P019.
- **Phases are now 00-18.** New: 08 Recursion & Sorting and 16 Union-Find & Greedy. 05 is now Stack & Queue, and 09 Recursion & Trees became 10 Trees. Old phases 08-16 moved to 09, 10, 11, 12, 13, 14, 15, 17 and 18. Folder names follow (practice/09-linked-list, 15-graphs, 17-dynamic-programming...), and ../dsa-master/practice uses the same names. Only 00-foundations exists so far, so nothing had to be moved.
- Regenerated tracker/learning-order.md (with a phases-at-a-glance table). Updated README.md, CLAUDE.md, the supplementary-roadmap.md slots, and the DSA Master README, CLAUDE.md and tracker. A phase that opens with a DSA Master build lesson uses it as its pattern lesson.
- Cross-checked: all 115 IDs in the two trackers match learning-order.md.
- **Totals (from the CSV):** Not Started 76, Solved 0, Mastered 0. No revisions due.
- **Next:** unchanged. The learner answers F1-warmup Part 2, then F2 (Big-O). The first numbered lesson is L001 P003 Contains Duplicate, after F5.

## 2026-10-22, Session 2 (continued): main list is now 97 problems

- **The learner asked for the main problem count to be 97 instead of 75.** The 22 LeetCode problems that check DSA Master code were added to tracker/blind75-tracker.csv as **P077-P098** (`Sheet_Tab` = "DSA Master check"), in study order. The tracker now has 98 rows and 97 unique problems, because P043 = P074. The file keeps its name.
- Each new problem is solved inside its build lesson (for example L008 = M04 + P077), so the lesson count stays at **L001-L102**.
- Nine supplementary entries (S01, S10, S14, S16, S17, S20, S21, S23, S27) are now in the main list. Their supplementary status reads "In main list as P0xx". The optional LC 239 stretch has no P-ID.
- Updated README (title, totals, phase table), CLAUDE.md, supplementary-roadmap.md and learning-order.md (regenerated), plus the DSA Master README (a mapping table from build items to P-IDs), CLAUDE.md and the tracker's Overlaps column.
- Cross-checked: 137 IDs across the two trackers match learning-order.md, and the CSV has 97 unique LeetCode numbers.
- **Totals (from the CSV):** 97 problems (98 rows): Not Started 98 rows, Solved 0, Mastered 0. No revisions due.
- **Next:** unchanged. The learner answers F1-warmup Part 2, then F2 (Big-O).

## 2026-10-22, Session 2 (continued): Interview Master 100 added

- **The learner asked to add the Interview Master 100 problems (<https://instabyte.io/p/interview-master-100>, published 2024-06-27) that were not already in the project.**
- Crawled the page: 100 unique LeetCode problems. 57 were already in the main list. 7 were only in the optional supplementary list (S03, S04, S07, S11, S15, S19, S30), and 36 were new.
- Added all **43** as **P099-P141** (`Sheet_Tab` = "Interview Master 100"), so the main list covers all 100. All 43 were checked against LeetCode's API (all exist, all free). All 39 solution links on the page responded. They are stored in the new `IM100_Solution_URL` column and treated as spoilers.
- Added the columns `IM100_No` and `IM100_Solution_URL` to the tracker. The 57 existing matches got their IM100 number (P043 and P074 both = IM100 #75).
- Each new problem was placed in the phase that teaches its technique. For example, Sort List comes after Merge Sort, Course Schedule II next to topological sort, and Maximum Sum Circular Subarray after Maximum Subarray. **Lessons are now L001-L145.** Phase 18 is now "Bit Manipulation & Math" (folder `18-bit-manipulation-math`).
- Updated the trackers, learning-order.md (regenerated), README, CLAUDE.md and supplementary-roadmap.md (7 more rows point to the main list), plus the DSA Master README and CLAUDE.md. Removed hard-coded lesson numbers from the prose so later renumbering can't make them stale.
- Cross-checked: 180 IDs across both trackers match learning-order.md. There are 140 unique LeetCode numbers, and IM100 coverage is 100/100.
- **Totals (from the CSV):** 140 problems (141 rows): Not Started 141 rows, Solved 0, Mastered 0. No revisions due.
- **Next:** unchanged. The learner answers F1-warmup Part 2, then F2 (Big-O).
