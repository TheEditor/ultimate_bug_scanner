# Async Error Path Coverage TODO

1. ✅ Re-read PLAN_FOR_NEXT_FEATURES to capture requirements for async error path coverage and identify per-language targets.
2. ☐ Define shared abstraction/signature for async error coverage (e.g., `ASYNC_ERROR_RULE_IDS`, helper output) mirroring lifecycle work. *(JS/Python implemented; remaining modules pending.)*
3. ☐ Implement ast-grep rules for async error handling in each module (js, python, golang, cpp, rust, java, ruby) plus fallback heuristics, keeping structure identical across modules. *(JS/Python done; other modules pending.)*
4. ☐ Add/update buggy fixtures demonstrating missing async error handling and clean fixtures showing proper patterns.
5. ☐ Extend test-suite manifest with async error path cases per language.
6. ☐ Run UBS targeted scans (or manifest runner) to confirm new rules fire and integrate cleanly.
7. ☐ Mark TODO entries complete as progress continues.
