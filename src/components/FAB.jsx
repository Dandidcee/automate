import React, { useState, useRef, useEffect, useCallback } from 'react';

/* ─────────────────────────────────────────────────────────────────
   CONFIG — swap these values to connect to your real AI backend
───────────────────────────────────────────────────────────────── */
const AI_CONFIG = {
  endpoint: null,               // e.g. 'https://your-n8n-webhook.com/chat'
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  buildPayload: (message, history) => ({ message, history }),
  parseResponse: (data) => data?.reply || data?.text || data?.message || 'Maaf, saya tidak mengerti.',
  mockDelay: 1400,              // ms — used when endpoint is null (demo mode)
};

const MOCK_RESPONSES = [
  'Baik! OtomaID menyediakan solusi automasi berbasis AI, n8n workflow, dan WhatsApp Chatbot untuk bisnis Anda. Ingin tahu lebih lanjut tentang layanan mana?',
  'Chatbot WhatsApp kami dapat menangani reservasi, FAQ, dan kualifikasi prospek secara otomatis 24/7 menggunakan model LLM terkini. Mau lihat demo-nya?',
  'Konsultasi gratis kami terbuka untuk semua bisnis — UMKM hingga enterprise. Tim kami akan menganalisis kebutuhan dan merekomendasikan solusi terbaik. Kapan waktu yang cocok untuk Anda?',
  'Automasi bisnis adalah penggunaan teknologi untuk menjalankan proses berulang secara otomatis, seperti membalas pesan, menyinkronkan data, atau mengirim laporan — tanpa campur tangan manusia.',
  'n8n adalah platform workflow automation open-source yang kami gunakan untuk menghubungkan berbagai aplikasi bisnis Anda — dari CRM, ERP, hingga marketplace dan WhatsApp.',
];

let mockIndex = 0;
const getMockResponse = () => {
  const r = MOCK_RESPONSES[mockIndex % MOCK_RESPONSES.length];
  mockIndex++;
  return r;
};

const QUICK_PROMPTS = [
  { label: '🤖 Apa itu automation?', text: 'Apa itu automation?' },
  { label: '💬 Demo chatbot WhatsApp', text: 'Demo chatbot WhatsApp' },
  { label: '🎁 Konsultasi gratis', text: 'Saya ingin konsultasi gratis' },
  { label: '🚀 Layanan AI bisnis', text: 'Apa saja layanan AI bisnis OtomaID?' },
];

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'ai',
  text: 'Halo 👋 Saya AI Assistant OtomaID. Ada yang bisa saya bantu terkait automasi bisnis, chatbot WhatsApp, atau AI workflow?',
  ts: new Date(),
};

/* ─── Typing dots animation ─── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#4edea3',
            display: 'inline-block',
            animation: `typingBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Single message bubble ─── */
function MessageBubble({ msg }) {
  const isUser = msg.role === 'user';
  return (
    <div className={`flex items-end gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      {!isUser && (
        <div style={{
          width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(135deg,#4edea3,#4cd7f6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, boxShadow: '0 0 12px rgba(78,222,163,0.4)',
        }}>
          🤖
        </div>
      )}
      <div style={{
        maxWidth: '78%',
        padding: '10px 14px',
        borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
        background: isUser
          ? 'linear-gradient(135deg,rgba(78,222,163,0.25),rgba(76,215,246,0.15))'
          : 'rgba(255,255,255,0.06)',
        border: isUser ? '1px solid rgba(78,222,163,0.3)' : '1px solid rgba(255,255,255,0.08)',
        color: '#d4e4fa',
        fontSize: 13,
        lineHeight: 1.55,
        wordBreak: 'break-word',
      }}>
        {msg.text}
      </div>
    </div>
  );
}

/* ─── Main Widget ─── */
export default function FAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const [showPrompts, setShowPrompts] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  /* Auto-scroll to bottom on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  /* Focus input when opened */
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || isTyping) return;
    setError(null);
    setShowPrompts(false);

    const userMsg = { id: Date.now(), role: 'user', text: text.trim(), ts: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      let reply;
      if (AI_CONFIG.endpoint) {
        /* ── Real API call ── */
        const history = messages.map((m) => ({ role: m.role, content: m.text }));
        const res = await fetch(AI_CONFIG.endpoint, {
          method: AI_CONFIG.method,
          headers: AI_CONFIG.headers,
          body: JSON.stringify(AI_CONFIG.buildPayload(text.trim(), history)),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        reply = AI_CONFIG.parseResponse(data);
      } else {
        /* ── Demo / mock mode ── */
        await new Promise((r) => setTimeout(r, AI_CONFIG.mockDelay));
        reply = getMockResponse();
      }

      const aiMsg = { id: Date.now() + 1, role: 'ai', text: reply, ts: new Date() };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setError('Koneksi gagal. Silakan coba lagi.');
      console.error('[OtomaID Chat]', err);
    } finally {
      setIsTyping(false);
    }
  }, [isTyping, messages]);

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
  };

  /* ─── Styles ─── */
  const panelStyle = {
    position: 'fixed',
    bottom: 88,
    right: 24,
    width: 370,
    maxWidth: 'calc(100vw - 32px)',
    height: 560,
    maxHeight: 'calc(100dvh - 110px)',
    borderRadius: 20,
    background: 'rgba(5,20,36,0.96)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(78,222,163,0.25)',
    boxShadow: '0 0 0 1px rgba(76,215,246,0.08), 0 24px 80px rgba(0,0,0,0.7), 0 0 60px rgba(78,222,163,0.12)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    zIndex: 9999,
    transformOrigin: 'bottom right',
    transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease',
    transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(20px)',
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? 'all' : 'none',
  };

  return (
    <>
      {/* Keyframes */}
      <style>{`
        @keyframes typingBounce {
          0%,60%,100% { transform: translateY(0); opacity:.4; }
          30%          { transform: translateY(-6px); opacity:1; }
        }
        @keyframes fabPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(78,222,163,0.5), 0 0 20px rgba(78,222,163,0.3); }
          50%      { box-shadow: 0 0 0 10px rgba(78,222,163,0), 0 0 30px rgba(78,222,163,0.5); }
        }
        @keyframes onlineBlink {
          0%,100% { opacity:1; } 50% { opacity:0.3; }
        }
      `}</style>

      {/* ── Chat Panel ── */}
      <div style={panelStyle} aria-hidden={!isOpen}>

        {/* Header */}
        <div style={{
          padding: '14px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: 'linear-gradient(135deg,rgba(78,222,163,0.08),rgba(76,215,246,0.05))',
          display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
        }}>
          {/* Avatar */}
          <div style={{
            width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg,#4edea3,#4cd7f6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, boxShadow: '0 0 20px rgba(78,222,163,0.5)',
            position: 'relative',
          }}>
            🤖
            {/* Online dot */}
            <span style={{
              position: 'absolute', bottom: 1, right: 1,
              width: 10, height: 10, borderRadius: '50%',
              background: '#4edea3',
              border: '2px solid rgba(5,20,36,0.96)',
              animation: 'onlineBlink 2s ease-in-out infinite',
            }} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: '#d4e4fa', fontWeight: 700, fontSize: 14, margin: 0, lineHeight: 1.2 }}>
              OtomaID AI Assistant
            </p>
            <p style={{ color: '#4edea3', fontSize: 11, margin: 0, marginTop: 2, opacity: 0.85 }}>
              ● AI Automation Assistant
            </p>
          </div>

          {/* Minimize */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              width: 30, height: 30, borderRadius: '50%', border: 'none',
              background: 'rgba(255,255,255,0.07)', color: '#8899aa',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s, color 0.2s', fontSize: 16,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = '#d4e4fa'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#8899aa'; }}
            aria-label="Minimize chat"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1, overflowY: 'auto', padding: '16px 14px', display: 'flex',
          flexDirection: 'column', gap: 12,
          scrollbarWidth: 'thin', scrollbarColor: 'rgba(78,222,163,0.2) transparent',
        }}>
          {messages.map((msg) => <MessageBubble key={msg.id} msg={msg} />)}

          {/* Typing indicator */}
          {isTyping && (
            <div style={{ display: 'flex', alignItems: 'end', gap: 8 }}>
              <div style={{
                width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                background: 'linear-gradient(135deg,#4edea3,#4cd7f6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14,
              }}>🤖</div>
              <div style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '18px 18px 18px 4px',
              }}>
                <TypingDots />
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div style={{
              padding: '10px 14px', borderRadius: 12, fontSize: 12,
              background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)',
              color: '#ff8080', display: 'flex', alignItems: 'center', gap: 8,
            }}>
              ⚠️ {error}
              <button
                onClick={() => setError(null)}
                style={{ background: 'none', border: 'none', color: '#ff8080', cursor: 'pointer', marginLeft: 'auto', fontSize: 12 }}
              >
                Tutup
              </button>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick Prompts */}
        {showPrompts && (
          <div style={{
            padding: '8px 14px 0', display: 'flex', flexWrap: 'wrap', gap: 6, flexShrink: 0,
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}>
            {QUICK_PROMPTS.map((p) => (
              <button
                key={p.text}
                onClick={() => sendMessage(p.text)}
                style={{
                  padding: '6px 12px', borderRadius: 20, fontSize: 11, cursor: 'pointer',
                  background: 'rgba(78,222,163,0.08)',
                  border: '1px solid rgba(78,222,163,0.25)',
                  color: '#4edea3', transition: 'all 0.2s',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(78,222,163,0.18)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(78,222,163,0.08)'; }}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <div style={{
          padding: '12px 14px',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', gap: 8, alignItems: 'flex-end', flexShrink: 0,
        }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ketik pesan Anda..."
            rows={1}
            disabled={isTyping}
            style={{
              flex: 1, resize: 'none', outline: 'none',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(78,222,163,0.2)',
              borderRadius: 14, padding: '10px 14px',
              color: '#d4e4fa', fontSize: 13, lineHeight: 1.5,
              fontFamily: 'Inter, sans-serif',
              maxHeight: 100, overflowY: 'auto',
              transition: 'border-color 0.2s',
              scrollbarWidth: 'none',
            }}
            onFocus={(e) => { e.target.style.borderColor = 'rgba(78,222,163,0.5)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'rgba(78,222,163,0.2)'; }}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isTyping}
            style={{
              width: 40, height: 40, borderRadius: 12, border: 'none',
              background: input.trim() && !isTyping
                ? 'linear-gradient(135deg,#4edea3,#4cd7f6)'
                : 'rgba(255,255,255,0.07)',
              color: input.trim() && !isTyping ? '#051424' : '#8899aa',
              cursor: input.trim() && !isTyping ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, transition: 'all 0.2s',
              boxShadow: input.trim() && !isTyping ? '0 0 16px rgba(78,222,163,0.4)' : 'none',
            }}
            aria-label="Kirim pesan"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>

        {/* Powered by */}
        <div style={{ textAlign: 'center', padding: '6px 0 10px', fontSize: 10, color: 'rgba(136,153,170,0.5)' }}>
          Powered by OtomaID AI · {AI_CONFIG.endpoint ? '🟢 Connected' : '🟡 Demo Mode'}
        </div>
      </div>

      {/* ── FAB Button ── */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? 'Tutup chat' : 'Buka AI Assistant'}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 10000,
          width: 56, height: 56, borderRadius: '50%', border: 'none',
          background: isOpen
            ? 'rgba(5,20,36,0.9)'
            : 'linear-gradient(135deg,#4edea3,#4cd7f6)',
          color: isOpen ? '#4edea3' : '#051424',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          animation: isOpen ? 'none' : 'fabPulse 2.5s ease-in-out infinite',
          boxShadow: isOpen
            ? '0 0 0 1px rgba(78,222,163,0.4), 0 8px 32px rgba(0,0,0,0.5)'
            : '0 0 30px rgba(78,222,163,0.5)',
          transform: isOpen ? 'scale(1) rotate(0deg)' : 'scale(1)',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.12)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
      </button>
    </>
  );
}
