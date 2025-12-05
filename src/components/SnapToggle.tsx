import { useEffect, useState } from "react";

const STORAGE_KEY = "site:snap";

const SnapToggle = () => {
  const [enabled, setEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    // Read preference; default to enabled (true) if not set
    const raw = localStorage.getItem(STORAGE_KEY);
    const initial = raw === null ? true : raw === "1";
    setEnabled(initial);
    if (initial) document.body.classList.add("snap");
    else document.body.classList.remove("snap");
  }, []);

  useEffect(() => {
    if (enabled === null) return;
    if (enabled) {
      document.body.classList.add("snap");
      localStorage.setItem(STORAGE_KEY, "1");
    } else {
      document.body.classList.remove("snap");
      localStorage.setItem(STORAGE_KEY, "0");
    }
  }, [enabled]);

  if (enabled === null) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <button
        aria-pressed={enabled}
        onClick={() => setEnabled((v) => !v)}
        className="px-4 py-2 rounded-full bg-card/80 border border-border/40 text-sm text-foreground shadow-md hover:bg-card/90 transition-colors"
        title={enabled ? "Disable snap scrolling" : "Enable snap scrolling"}
      >
        {enabled ? "Scroll Snap: On" : "Scroll Snap: Off"}
      </button>
    </div>
  );
};

export default SnapToggle;
