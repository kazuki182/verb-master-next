# Verb Master Ver.144 Login Recovery Hotfix

## Purpose

Ver.143 made Supabase cloud data the source of truth to prevent ZIP updates from overwriting real user data with empty local data. However, it also blocked login when the Supabase cloud account password/RPC state did not match the local account, even when the local username and password were correct.

Ver.144 fixes that lockout.

## Login policy

1. Try cloud login first.
2. If cloud login succeeds, restore cloud data and continue.
3. If cloud login fails but the local account password is correct, allow login in recovery mode.
4. If both cloud and local passwords fail, block login.

## Data safety

- This does not remove Ver.143 cloud source-of-truth protection.
- A valid local user is no longer locked out by a cloud mismatch.
- Local fallback does not blindly overwrite cloud data.
- Cloud sync still requires a valid cloud credential/session.

## Operator note

If local login succeeds but cloud login fails, the operator should verify the Supabase cloud account/password state and SQL installation. This hotfix prevents immediate lockout while keeping the save foundation intact.
