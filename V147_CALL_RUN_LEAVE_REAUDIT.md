# V146 User-facing profile cleanup

## Goal
Hide technical save/storage messages from normal users and remove version/update history from the customer UI.

## Changes
- Removed the profile message line that showed messages such as Storage save state, service role key warnings, and cloud save completion.
- Moved the detailed auto-save/debug panel behind admin-only rendering.
- Hid manual JSON backup panel from normal users.
- Removed the My Page update history section.
- Removed visible app version footer from profile, checkout, checkout complete/cancel, and purchase pages.
- Removed public upgrade/checkout wording that exposed old version numbers.

## Persistence
No persistence logic was changed. Ver.145 login, restore, cloud source-of-truth, and ZIP-update-safe persistence are preserved.

## SQL
No additional SQL is required.
