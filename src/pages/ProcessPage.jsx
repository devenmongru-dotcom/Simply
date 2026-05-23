import { useState } from "react";
import Reveal from "../components/Reveal";
import C from "../styles/colors";
import { PROCESS_STEPS } from "../data/content";

const D  = { fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, letterSpacing:"-0.035em", lineHeight:1.08, color:C.ink };
const OL = { fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.blue };

// Extra hover detail per step
const HOVER_DETAIL = {
  "01": {
    what: "What happens on this call?",
    detail: "A focused 30-minute session. We cover your goals, your target customers, your competitors, and what success looks like. You'll leave with clarity — not a sales pitch.",
    bullets: ["Your business & goals", "Current online presence audit", "Competitor landscape review", "Scope & plan outline"],
  },
  "02": {
    what: "What does strategy include?",
    detail: "Before we touch design, we map every page, every user journey, and every conversion point. This is why our sites perform — not just look good.",
    bullets: ["Full sitemap & page structure", "User journey mapping", "Call-to-action placement", "Messaging hierarchy"],
  },
  "03": {
    what: "What do I receive in 72 hours?",
    detail: "High-fidelity, pixel-perfect mockups of every page — not wireframes, not rough sketches. You'll see exactly how your finished site will look before we write a single line of code.",
    bullets: ["Desktop & mobile mockups", "All pages designed", "Brand colours & typography", "Your feedback round"],
  },
  "04": {
    what: "What's included in the build?",
    detail: "Clean, fast, hand-coded pages. SEO meta tags, Google Analytics, contact form, sitemap submitted — everything set up and tested before we hit publish.",
    bullets: ["Responsive development", "SEO & analytics setup", "Performance optimisation", "Cross-browser QA testing"],
  },
  "05": {
    what: "What does ongoing look like?",
    detail: "Monthly performance reports, strategy check-ins, and continuous improvements. Your site gets better every month — not left to stagnate after launch.",
    bullets: ["Monthly performance reports", "Strategy & growth calls", "Content & SEO updates", "Ongoing optimisation"],
  },
};

export default function ProcessPage({ setPage }) {
  const [hovered, setHovered] = useState(null);
  const go = () => { setPage("Contact"); window.scrollTo(0,0); };

  return (
    <div style={{ background:C.bg }}>

      {/* ── Header ── */}
      <section style={{ padding:"120px 5% 60px", textAlign:"center", background:`radial-gradient(ellipse 70% 50% at 50% 0%, ${C.blueLight}, transparent 65%), ${C.bg}` }}>
        <Reveal>
          <p style={OL}>How It Works</p>
          <h1 style={{ ...D, fontSize:"clamp(34px,5vw,62px)", marginTop:12, marginBottom:16 }}>
            Strategy first.
            <br/><span style={{ color:C.blue }}>Live in 7 days.</span>
          </h1>
          <p style={{ fontSize:17, color:C.inkLight, maxWidth:460, margin:"0 auto" }}>
            No endless back-and-forth. A tight 5-step process. Hover each step to see exactly what's involved.
          </p>
        </Reveal>

        {/* Speed bar */}
        <Reveal delay={100}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:32, flexWrap:"wrap", justifyContent:"center", background:"#fff", border:`1px solid ${C.border}`, borderRadius:12, padding:"16px 28px", marginTop:40, boxShadow:"0 2px 10px rgba(0,0,0,0.05)" }}>
            {[
              { n:"Day 1",   label:"Discovery + Strategy" },
              { n:"72 hrs",  label:"Design delivered" },
              { n:"Day 5–7", label:"Built & launched" },
            ].map(({ n, label }, i) => (
              <div key={label} style={{ display:"flex", alignItems:"center", gap:16 }}>
                <div style={{ textAlign:"center" }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:20, letterSpacing:"-0.03em", color:C.blue }}>{n}</div>
                  <div style={{ fontSize:12, color:C.inkLight, fontWeight:500 }}>{label}</div>
                </div>
                {i < 2 && <div style={{ width:1, height:32, background:C.border }}/>}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Interactive Timeline ── */}
      <section style={{ padding:"40px 5% 100px" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <p style={{ textAlign:"center", fontSize:13, color:C.inkLight, marginBottom:36, fontWeight:500 }}>
            ↓ Hover any step to see what's included
          </p>

          {PROCESS_STEPS.map((step, i) => {
            const isHov = hovered === step.num;
            const detail = HOVER_DETAIL[step.num];
            const is72 = step.duration === "~72 Hours";

            return (
              <Reveal key={step.num} delay={i * 60}>
                <div
                  onMouseEnter={() => setHovered(step.num)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ display:"flex", gap:24, marginBottom: i < PROCESS_STEPS.length-1 ? 0 : 0 }}
                >
                  {/* Spine */}
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                    <div style={{
                      width:52, height:52, borderRadius:"50%", flexShrink:0,
                      background: isHov ? C.blue : is72 ? C.blue : C.blueLight,
                      border:`2px solid ${isHov || is72 ? C.blue : C.blueBorder}`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:13,
                      color: isHov || is72 ? "#fff" : C.blue,
                      transition:"all 0.25s", zIndex:1, boxShadow: isHov ? `0 0 0 4px ${C.blueLight}` : "none",
                    }}>{step.num}</div>
                    {i < PROCESS_STEPS.length - 1 && (
                      <div style={{ width:2, flex:1, minHeight: isHov ? 200 : 52, background:`linear-gradient(${isHov ? C.blue : C.blueBorder}, transparent)`, margin:"6px 0", transition:"all 0.3s" }}/>
                    )}
                  </div>

                  {/* Card */}
                  <div style={{
                    flex:1,
                    marginBottom: i < PROCESS_STEPS.length-1 ? (isHov ? 16 : 8) : 0,
                    paddingTop:8,
                    background: isHov ? "#fff" : "transparent",
                    border: isHov ? `1.5px solid ${C.blueBorder}` : "1.5px solid transparent",
                    borderRadius:14,
                    padding: isHov ? "22px 24px" : "8px 24px 16px",
                    boxShadow: isHov ? "0 6px 24px rgba(37,99,235,0.1)" : "none",
                    transition:"all 0.3s",
                    cursor:"default",
                  }}>
                    {/* Title row */}
                    <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:8, flexWrap:"wrap" }}>
                      <h3 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:20, letterSpacing:"-0.02em", color: isHov ? C.blue : C.ink, transition:"color 0.2s" }}>
                        {step.title}
                      </h3>
                      <span style={{ fontSize:12, fontWeight: is72 ? 700 : 500, color: is72 ? C.blue : C.inkLight, background: is72 ? C.blueLight : C.bgOff, border:`1px solid ${is72 ? C.blueBorder : C.border}`, padding:"3px 10px", borderRadius:100 }}>
                        {step.duration}
                      </span>
                    </div>

                    <p style={{ fontSize:15, color:C.inkLight, lineHeight:1.75, marginBottom: isHov ? 18 : 0 }}>{step.desc}</p>

                    {/* Hover detail */}
                    <div style={{ maxHeight: isHov ? 400 : 0, overflow:"hidden", transition:"max-height 0.35s ease, opacity 0.25s ease", opacity: isHov ? 1 : 0 }}>
                      <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:16, marginTop:4 }}>
                        <p style={{ fontSize:13, fontWeight:700, color:C.blue, marginBottom:12, textTransform:"uppercase", letterSpacing:"0.08em" }}>
                          {detail.what}
                        </p>
                        <p style={{ fontSize:14, color:C.inkMid, lineHeight:1.75, marginBottom:14 }}>{detail.detail}</p>
                        <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                          {detail.bullets.map(b => (
                            <span key={b} style={{ fontSize:12, fontWeight:600, color:C.blue, background:C.blueLight, border:`1px solid ${C.blueBorder}`, padding:"4px 12px", borderRadius:100 }}>
                              ✓ {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding:"80px 5%", textAlign:"center", background:C.ink, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:`radial-gradient(circle, #2563eb 1px, transparent 1px)`, backgroundSize:"28px 28px" }}/>
        <div style={{ maxWidth:560, margin:"0 auto", position:"relative" }}>
          <Reveal>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:"clamp(26px,4vw,44px)", letterSpacing:"-0.035em", color:"#fff", marginBottom:16, lineHeight:1.1 }}>
              Ready to get started?
            </h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.5)", marginBottom:32 }}>
              One free call. We map out your site and kick things off the same day.
            </p>
            <button onClick={go}
              style={{ background:"#fff", color:C.blue, border:"none", cursor:"pointer", padding:"13px 30px", borderRadius:9, fontSize:15, fontWeight:700, fontFamily:"inherit", boxShadow:"0 4px 16px rgba(0,0,0,0.18)", transition:"all 0.2s" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-1px)"; e.currentTarget.style.boxShadow="0 6px 24px rgba(0,0,0,0.24)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,0.18)"; }}>
              Book Free Call →
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
