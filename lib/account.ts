"use client";

export type Account = {
  username: string;
  password: string;
  role: "admin" | "user";
  createdAt: string;
  lastLoginAt?: string;
};

export type UserProgress = {
  username: string;
  xp: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  totalStudied: number;
  currentRound: number;
  studiedVerbIds: string[];
  testCorrect: number;
  testWrong: number;
  weakItems: string[];
  lastStudyDate?: string;
  lastLoginAt?: string;
};

const ACCOUNTS_KEY = "verbMaster.accounts";
const CURRENT_USER_KEY = "verbMaster.currentUser";
const PROGRESS_KEY = "verbMaster.progress";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function nowText() {
  return new Date().toISOString();
}

export function initAdminAccount() {
  if (typeof window === "undefined") return;
  const accounts = getAccounts();
  if (!accounts.some((a) => a.username === "kazurillex")) {
    accounts.push({ username: "kazurillex", password: "0074", role: "admin", createdAt: nowText() });
    saveAccounts(accounts);
  }
}

export function getAccounts(): Account[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveAccounts(accounts: Account[]) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

export function registerAccount(username: string, password: string) {
  initAdminAccount();
  const name = username.trim();
  if (!name) return { ok: false, message: "ユーザー名を入力してください。" };
  if (password.length < 4) return { ok: false, message: "パスワードは4文字以上にしてください。" };
  const accounts = getAccounts();
  if (accounts.some((a) => a.username === name)) return { ok: false, message: "このユーザー名はすでに使われています。" };
  accounts.push({ username: name, password, role: "user", createdAt: nowText() });
  saveAccounts(accounts);
  setCurrentUser(name);
  ensureProgress(name);
  return { ok: true, message: "登録しました。" };
}

export function loginAccount(username: string, password: string) {
  initAdminAccount();
  const accounts = getAccounts();
  const account = accounts.find((a) => a.username === username.trim() && a.password === password);
  if (!account) return { ok: false, message: "ユーザー名またはパスワードが違います。" };
  const loginAt = nowText();
  account.lastLoginAt = loginAt;
  saveAccounts(accounts);
  setCurrentUser(account.username);
  const progress = ensureProgress(account.username);
  progress.lastLoginAt = loginAt;
  saveProgress(progress);
  return { ok: true, message: "ログインしました。" };
}

export function setCurrentUser(username: string) {
  localStorage.setItem(CURRENT_USER_KEY, username);
}

export function getCurrentUsername() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(CURRENT_USER_KEY);
}

export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

function progressMap(): Record<string, UserProgress> {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveProgressMap(map: Record<string, UserProgress>) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(map));
}

export function ensureProgress(username: string): UserProgress {
  const map = progressMap();
  if (!map[username]) {
    map[username] = {
      username,
      xp: 0,
      level: 1,
      currentStreak: 0,
      longestStreak: 0,
      totalStudied: 0,
      currentRound: 1,
      studiedVerbIds: [],
      testCorrect: 0,
      testWrong: 0,
      weakItems: []
    };
    saveProgressMap(map);
  }
  return map[username];
}

export function getCurrentProgress() {
  const username = getCurrentUsername();
  if (!username) return null;
  return ensureProgress(username);
}

export function saveProgress(progress: UserProgress) {
  const map = progressMap();
  progress.level = Math.max(1, Math.floor(progress.xp / 100) + 1);
  map[progress.username] = progress;
  saveProgressMap(map);
}

function updateStreak(progress: UserProgress) {
  const today = todayKey();
  if (progress.lastStudyDate === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const y = yesterday.toISOString().slice(0, 10);
  progress.currentStreak = progress.lastStudyDate === y ? progress.currentStreak + 1 : 1;
  progress.longestStreak = Math.max(progress.longestStreak, progress.currentStreak);
  progress.lastStudyDate = today;
}

export function recordStudy(verbId: string, totalVerbs: number) {
  const progress = getCurrentProgress();
  if (!progress) return null;
  updateStreak(progress);
  progress.xp += 10;
  progress.totalStudied += 1;
  if (!progress.studiedVerbIds.includes(verbId)) progress.studiedVerbIds.push(verbId);
  if (progress.studiedVerbIds.length >= totalVerbs) {
    progress.currentRound += 1;
    progress.studiedVerbIds = [];
    progress.xp += 100;
  }
  saveProgress(progress);
  return progress;
}

export function recordTestResult(verbId: string, itemId: string, correct: boolean) {
  const progress = getCurrentProgress();
  if (!progress) return null;
  updateStreak(progress);
  if (correct) {
    progress.testCorrect += 1;
    progress.xp += 5;
    progress.weakItems = progress.weakItems.filter((id) => id !== itemId);
  } else {
    progress.testWrong += 1;
    progress.weakItems = Array.from(new Set([...progress.weakItems, itemId]));
  }
  saveProgress(progress);
  return progress;
}

export function formatDateTime(value?: string) {
  if (!value) return "未記録";
  try {
    return new Intl.DateTimeFormat("ja-JP", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
  } catch {
    return value;
  }
}

export function getAllProgress() {
  return Object.values(progressMap()).sort((a, b) => b.xp - a.xp);
}
