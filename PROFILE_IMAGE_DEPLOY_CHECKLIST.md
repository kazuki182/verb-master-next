# Profile image deployment checklist

- [ ] Run `supabase/V175_PROFILE_AVATAR_DURABLE_SOURCE_OF_TRUTH.sql`
- [ ] Set `SUPABASE_SERVICE_ROLE_KEY` in Vercel Production
- [ ] Use the same production domain when testing update persistence
- [ ] Upload image and wait for the re-read verification message
- [ ] Reload the page
- [ ] Log out and log back in
- [ ] Deploy a new version without clearing browser site data
- [ ] Confirm `user_profiles.avatar_path` and `avatar_url` are not empty
- [ ] Confirm a matching `user_profile_assets` row exists
- [ ] Do not manually delete the current Storage object
