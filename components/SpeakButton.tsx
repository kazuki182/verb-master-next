"use client";

export default function SpeakButton({ text, label = "聞く", rate = 0.9 }: { text: string; label?: string; rate?: number }) {
  const speak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button onClick={speak} className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold text-accent shadow-sm">
      🔊 {label}
    </button>
  );
}
