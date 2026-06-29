"use client";

import { useEffect, useRef } from "react";
import { getCurrentProgress, getCurrentUsername } from "@/lib/account";
import { restoreLearningDataFromSupabase, syncCurrentUserToSupabase } from "@/lib/cloudSync";

const SYNC_INTERVAL_MS = 60 * 1000;

export default function DataSafety() {
  const runningRef = useRef(false);

  useEffect(() => {
    const run = async (reason: "start" | "interval" | "visible" | "before-hide") => {
      if (runningRef.current) return;
      const username = getCurrentUsername();
      if (!username) return;
      runningRef.current = true;
      try {
        if (reason === "start" || reason === "visible") {
          await restoreLearningDataFromSupabase(username);
        }
        const progress = getCurrentProgress();
        if (progress) await syncCurrentUserToSupabase(progress);
      } catch {
        // 画面操作を止めないため、同期失敗はマイページ側の状態表示に任せる。
      } finally {
        runningRef.current = false;
      }
    };

    void run("start");
    const timer = window.setInterval(() => void run("interval"), SYNC_INTERVAL_MS);

    const onVisibility = () => {
      if (document.visibilityState === "visible") void run("visible");
      if (document.visibilityState === "hidden") void run("before-hide");
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return null;
}
