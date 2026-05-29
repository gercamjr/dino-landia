"use client";

import { useState } from "react";

interface PronunciationButtonProps {
  text: string;
}

export function PronunciationButton({ text }: PronunciationButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePronounce = () => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser doesn't support text-to-speech.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.pitch = 1.1;

    utterance.onend = () => setIsPlaying(false);

    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={handlePronounce}
      disabled={isPlaying}
      className="flex items-center gap-2 rounded-full bg-[#F4EDE3] px-5 py-2.5 text-sm font-medium text-[#4A4038] transition hover:bg-[#EDE6D9] disabled:opacity-70"
    >
      <span>🔊</span>
      <span>{isPlaying ? "Speaking..." : "Pronounce"}</span>
    </button>
  );
}
