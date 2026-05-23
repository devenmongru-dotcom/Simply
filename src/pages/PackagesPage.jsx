import { useState } from "react";
import Reveal from "../components/Reveal";
import C from "../styles/colors";
import { PLANS } from "../data/content";

const display = { fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, letterSpacing:"-0.04em", color:C.ink };
const overline = { fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.blue };

export default function PackagesPage({ setPage }) {
  const [hov, setHov] = useState(null);
  const go = () => { setPage("Contact"); window.scrollTo(0,0); };

  return (
    <div style={{ background:C.bgOff, minHeight:"100vh" }}>
      <section style={{ padding:"120px 5% 60px", textAlign:"center",
        background:`radial-gradient(ellipse 70% 50% at 50% 0%, ${C.blueLight}, transparent 70%), ${C.bg}` }}>
        <Reveal>
          <p style={overline}>Transparent Pricing</p>
          <h1 style={{ ...display, fontSize:"clamp(38px,5vw,64px)", marginTop:12, marginBottom:16, lineHeight:1.06 }}>
            Simple pricing.
            <span style={{ color:C.blue }}>Real results.</span>
          </h1>
          <p style={{ fontSize:17, color:C.inkLight, maxWidth:480, margin:"0 auto 14px" }}>
            No setup fees. No lock-in. Cancel anytime. Every plan ships live in one week.
          </p>
          <p style={{ fontSize:14, color:"#dc2626", fontWeight:600 }}>
            Design delivered in 72 hours. Site live within 7 days. Guaranteed.
          </p>
        </Reveal>
      </section>

      <section style={{ padding:"32px 5% 100px" }}>
        <div style={{ maxWidth:1100, margin:"0 auto",
          display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
          gap:20, alignItems:"stretch" }}>
          {PLANS.map((plan,i) => {
            const rec = plan.recommended;
            const hovered = hov===plan.name && !rec;
            return (
              <Reveal key={plan.name} delay={i*80}>
                <div
                  onMouseEnter={()=>setHov(plan.name)}
                  onMouseLeave={()=>setHov(null)}
                  style={{
                    background: rec ? C.ink : "#fff",
                    borderRadius:18,
                    padding:"36px 30px",
                    border: rec ? "none" : hovered ? `1.5px solid ${C.blue}` : `1px solid ${C.border}`,
                    boxShadow: rec ? "0 20px 60px rgba(13,17,23,0.18)"
                      : hovered ? "0 12px 36px rgba(37,99,235,0.1)" : "0 1px 6px rgba(0,0,0,0.04)",
                    transform: rec ? "scale(1.03)" : hovered ? "translateY(-4px)" : "none",
                    transition:"all 0.25s",
                    height:"100%", boxSizing:"border-box",
                    display:"flex", flexDirection:"column",
                    position:"relative",
                  }}>

                  {rec && (
                    <div style={{ position:"absolute", top:-1, left:"50%", transform:"translateX(-50%)",
                      background:C.blue, color:"#fff",
                      fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase",
                      padding:"5px 16px", borderRadius:"0 0 9px 9px" }}>
                      Best Value
                    </div>
                  )}

                  <div style={{ marginTop: rec ? 18 : 0 }}>
                    <span style={{
                      fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase",
                      color: rec ? "rgba(255,255,255,0.45)" : C.inkLight,
                      display:"block", marginBottom:16,
                    }}>{plan.tag}</span>

                    <h3 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800,
                      fontSize:28, letterSpacing:"-0.03em",
                      color: rec ? "#fff" : C.ink, marginBottom:8 }}>{plan.name}</h3>

                    <p style={{ fontSize:14, color: rec ? "rgba(255,255,255,0.5)" : C.inkLight,
                      lineHeight:1.65, marginBottom:24 }}>{plan.desc}</p>

                    <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:28 }}>
                      <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800,
                        fontSize:52, letterSpacing:"-0.045em",
                        color: rec ? "#fff" : C.ink }}>${plan.price}</span>
                      <span style={{ fontSize:15, color: rec ? "rgba(255,255,255,0.4)" : C.inkLight }}>/mo</span>
                    </div>

                    <div style={{ flex:1 }}>
                      {plan.features.map(f => (
                        <div key={f} style={{ display:"flex", gap:10, marginBottom:10, alignItems:"flex-start" }}>
                          <span style={{
                            width:18, height:18, borderRadius:"50%", flexShrink:0, marginTop:2,
                            background: rec ? "rgba(255,255,255,0.1)" : C.blueLight,
                            border: rec ? "1px solid rgba(255,255,255,0.18)" : `1px solid ${C.blueBorder}`,
                            display:"flex", alignItems:"center", justifyContent:"center",
                            fontSize:8.5, color: rec ? "#fff" : C.blue,
                          }}>✓</span>
                          <span style={{ fontSize:14, color: rec ? "rgba(255,255,255,0.75)" : C.inkMid, lineHeight:1.5 }}>{f}</span>
                        </div>
                      ))}
                    </div>

                    <button onClick={go}
                      style={{
                        marginTop:26, width:"100%", padding:"13px", borderRadius:9,
                        fontSize:14.5, fontWeight:700, fontFamily:"inherit", cursor:"pointer",
                        transition:"all 0.2s",
                        background: rec ? "#fff" : C.blue,
                        color: rec ? C.blue : "#fff",
                        border:"none",
                        boxShadow: rec ? "none" : "0 2px 8px rgba(37,99,235,0.22)",
                      }}
                      onMouseEnter={e=>{ e.currentTarget.style.opacity="0.9"; e.currentTarget.style.transform="translateY(-1px)"; }}
                      onMouseLeave={e=>{ e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="none"; }}>
                      Get Started →
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={250}>
          <p style={{ textAlign:"center", marginTop:44, fontSize:14, color:C.inkLight }}>
            Not sure which plan fits?{" "}
            <button onClick={go} style={{ background:"none", border:"none",
              color:C.blue, cursor:"pointer", fontWeight:600, fontSize:14, fontFamily:"inherit" }}>
              Let's talk →
            </button>
          </p>
        </Reveal>
      </section>
    </div>
  );
}
