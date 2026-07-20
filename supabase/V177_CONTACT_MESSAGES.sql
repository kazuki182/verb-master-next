create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  request_id text not null unique,
  username text not null,
  reply_email text not null,
  category text not null check (category in ('不具合報告','ご要望','質問','Premiumについて','アカウントについて','その他')),
  message text not null check (char_length(message) between 5 and 2000),
  status text not null default 'unread' check (status in ('unread','in_progress','resolved','closed')),
  app_version text not null,
  browser_info text,
  email_notified boolean not null default false,
  email_notified_at timestamptz,
  email_error text,
  admin_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists contact_messages_username_created_idx on public.contact_messages (username, created_at desc);
create index if not exists contact_messages_status_created_idx on public.contact_messages (status, created_at desc);

alter table public.contact_messages enable row level security;
revoke all on public.contact_messages from anon, authenticated;

comment on table public.contact_messages is 'Verb Master v177 contact and feedback messages. Server-side service role only.';
