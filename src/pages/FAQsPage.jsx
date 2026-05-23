import { useState } from "react";
import Reveal from "../components/Reveal";
import C from "../styles/colors";
import { FAQS } from "../data/content";

const D  = { fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, letterSpacing:"-0.035em", lineHeight:1.08, color:C.ink };
const OL = { fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.blue };

export default function FAQsPage() {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ background:C.bg }}>
      <section style={{ padding:"120px 5% 100px", background:`radial-gradient(ellipse 70% 50% at 50% 0%, ${C.blueLight}, transparent 65%), ${C.bg}` }}>
        <div style={{ maxWidth:720, margin:"0 auto" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:56 }}>
              <p style={OL}>FAQ</p>
              {/* Rhyme: "ask" / "task" */}
              <h1 style={{ ...D, fontSize:"clamp(32px,5vw,56px)", marginTop:12, marginBottom:14 }}>
                Every question,
                <br/><span style={{ color:C.blue }}>answered straight.</span>
              </h1>
              <p style={{ fontSize:16, color:C.inkLight, lineHeight:1.75 }}>Straight answers, no runaround. Can't find yours? Just ask us directly.</p>
            </div>
          </Reveal>

          <div style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:16, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.05)" }}>
            {FAQS.map((faq,i) => (
              <Reveal key={i} delay={i*25}>
                <div style={{ borderBottom: i<FAQS.length-1 ? `1px solid ${C.border}` : "none" }}>
                  <button
                    onClick={()=>setOpen(open===i ? null : i)}
                    style={{ width:"100%", background:"none", border:"none", cursor:"pointer", padding:"20px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:16, fontFamily:"inherit", transition:"background 0.15s" }}
                    onMouseEnter={e=>e.currentTarget.style.background=C.bgOff}
                    onMouseLeave={e=>e.currentTarget.style.background="none"}>
                    <span style={{ fontSize:15.5, fontWeight:600, color:C.ink, textAlign:"left", lineHeight:1.45 }}>{faq.q}</span>
                    <span style={{ width:24, height:24, borderRadius:"50%", flexShrink:0, background: open===i ? C.blue : C.blueLight, border:`1px solid ${open===i ? C.blue : C.blueBorder}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, color: open===i ? "#fff" : C.blue, fontWeight:300, transition:"all 0.25s", transform: open===i ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  <div style={{ maxHeight: open===i ? 300 : 0, overflow:"hidden", transition:"max-height 0.35s ease" }}>
                    <p style={{ fontSize:15, color:C.inkLight, lineHeight:1.8, padding:"0 28px 20px" }}>{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
