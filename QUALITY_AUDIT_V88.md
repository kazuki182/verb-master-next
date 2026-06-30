# QUALITY_AUDIT_V88

## Scope
Ver.88 does not change verb content. It focuses on save-status reliability and HOME/Profile UI cleanup.

## Changes
- DataSafety now treats `stats === saved` as saved, even if optional profile/avatar/premium tables report errors.
- Profile save warning now shows a strong red error only when learning-record stats fail.
- Optional table errors are shown as a softer amber confirmation message.
- HOME profile image is larger.
- HOME level card now shows larger XP and next-level XP.
- Badge details are unified into the HOME level card and open in a bottom sheet.
- My Page large acquired-badge card was removed/hidden.
- My Page profile card now shows Premium/free status and unlocked verb range.

## Build
- Next.js production build passed.
