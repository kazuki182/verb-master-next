"use client";

import { useEffect, useState } from "react";
import { getCurrentBookmark, saveBookmark, type BookmarkSection } from "@/lib/account";

type Props = {
  verbId: string;
  section: BookmarkSection;
  label: string;
  href: string;
  itemTitle?: string;
  itemIndex?: number;
  compact?: boolean;
};

export default function BookmarkButton({ verbId, section, label, href, itemTitle, itemIndex, compact = false }: Props) {
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const current = getCurrentBookmark();
    setSaved(Boolean(current && current.verbId === verbId && current.section === section && current.href === href));
  }, [verbId, section, href]);

  const handleSave = () => {
    const result = saveBookmark({ verbId, section, label, href, itemTitle, itemIndex });
    if (!result) return;
    setSaved(true);
    setMessage(true);
    window.setTimeout(() => setMessage(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      className={compact ? "bookmark-mini" : "bookmark-button"}
      aria-label="この位置をしおりに保存"
      aria-pressed={saved}
    >
      {message ? "保存しました" : saved ? "🔖 しおり済み" : "🔖 しおり"}
    </button>
  );
}
