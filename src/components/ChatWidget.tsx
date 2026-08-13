import { useState, type FormEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { profile } from "../data/profile";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`New message from ${name || "your site"}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setOpen(false);
    setName("");
    setMessage("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-4 w-80 overflow-hidden rounded-2xl glass shadow-glow">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="font-display text-sm font-semibold text-ink-100">
              Message {profile.name}
            </span>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="text-ink-500 hover:text-ink-100"
            >
              <X size={16} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4">
            <p className="text-xs text-ink-500">
              Quick question about a project? Send a message — it opens in
              your email app, addressed to me.
            </p>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-ink-100 placeholder:text-ink-700 focus:outline-none focus:border-accent-violet/50"
            />
            <textarea
              required
              placeholder="What are you looking to build?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-ink-100 placeholder:text-ink-700 focus:outline-none focus:border-accent-violet/50"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient px-4 py-2.5 text-sm font-semibold text-base-950 shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Send <Send size={14} />
            </button>
          </form>
        </div>
      )}

      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-gradient text-base-950 shadow-glow transition-transform hover:-translate-y-0.5"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
