# Codex TODO – 2025-11-18

## Global
- [ ] Capture bead context and keep bd statuses in sync (mma, 5wx).
- [ ] Maintain documentation/tests/CLI help for lifecycle + shareable features; ensure README + --help updated.
- [ ] Ensure UBS scanner runs after code changes and before completion.

## Python lifecycle (ultimate_bug_scanner-mma)
- [ ] Review `modules/helpers/resource_lifecycle_py.py` + `modules/ubs-python.sh` integration for correctness.
- [ ] Decide fate of duplicate helper `modules/helpers/python_resource_helper.py` (dedupe or integrate?).
- [ ] Improve helper coverage: handle alias imports, contextmanager detection, awaited tasks/cancel, subprocess handles, context cancel functions.
- [ ] Emit descriptive output (file, line, severity, remediation) that `ubs-python.sh` can surface cleanly.
- [ ] Wire helper metadata -> `RESOURCE_LIFECYCLE_*` tables or new mapping consistent with UI.
- [ ] Add regression fixtures/tests demonstrating helper catches leaks (files, sockets, popen, asyncio tasks, context cancel) and stays quiet on clean samples.
- [ ] Update README + CLI `--list-categories` text referencing AST helper.

## Go lifecycle (ultimate_bug_scanner-5wx)
- [ ] Audit current regex-based `run_resource_lifecycle_checks` + existing ast-grep packs.
- [ ] Design ast-grep rules for context cancel, ticker Stop, timer Stop, file handles, db handles, mutex lock/unlock; consider go/analysis helper if needed.
- [ ] Integrate AST results into finding emitter (counts, severity, summary) with sample locations.
- [ ] Update manifest/test fixtures to assert AST-based output (diff vs previous run).
- [ ] Update README/docs/CLI help for Go resource category + new `--category resource-lifecycle` flag behavior.

## Verification
- [ ] Run targeted tests: manifest cases (python resource, go resource), shareable reports, `test-suite/run_all.sh` subset as needed.
- [ ] Run UBS scanner (`ubs . --fail-on-warning` or similar) and review findings.
- [ ] Close beads + document outcomes.
