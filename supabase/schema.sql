create table if not exists profiles (
  id uuid primary key,
  username text unique,
  display_name text,
  avatar_url text,
  created_at timestamptz default now()
);

create table if not exists user_stats (
  user_id uuid primary key references profiles(id),
  xp integer default 0,
  level integer default 1,
  current_streak integer default 0,
  longest_streak integer default 0,
  total_studied integer default 0,
  current_round integer default 1,
  updated_at timestamptz default now()
);
