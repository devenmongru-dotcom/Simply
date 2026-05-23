import Reveal from "../components/Reveal";
import C from "../styles/colors";
import { PROBLEMS, SERVICES, VALUE_PROPS, COMPARISON } from "../data/content";

const wrap    = { maxWidth:1200, margin:"0 auto" };
const D       = { fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, letterSpacing:"-0.04em", lineHeight:1.06, color:C.ink };
const body    = { fontSize:16, color:C.inkLight, lineHeight:1.75 };
const OL      = { fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.blue };
const primBtn = { display:"inline-flex", alignItems:"center", background:C.blue, color:"#fff", border:"none", cursor:"pointer", padding:"13px 28px", borderRadius:9, fontSize:15, fontWeight:600, transition:"all 0.2s", boxShadow:"0 2px 8px rgba(37,99,235,0.22)" };
const ghstBtn = { display:"inline-flex", alignItems:"center", background:"transparent", color:C.inkMid, border:`1.5px solid ${C.border}`, cursor:"pointer", padding:"13px 26px", borderRadius:9, fontSize:15, fontWeight:500, transition:"all 0.2s" };

export default function HomePage({ setPage }) {
  const go = p => () => { setPage(p); window.scrollTo(0,0); };
  return (
    <div style={{ background:C.bg }}>

      {/* ── HERO ── */}
      <section style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"120px 5% 80px", background:`radial-gradient(ellipse 80% 55% at 65% 0%, ${C.blueLight} 0%, transparent 65%), ${C.bg}`, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.35, backgroundImage:`radial-gradient(circle, ${C.blueBorder} 1px, transparent 1px)`, backgroundSize:"32px 32px", maskImage:"radial-gradient(ellipse 70% 80% at 70% 10%, black 10%, transparent 80%)" }}/>
        <div style={{ ...wrap, width:"100%", position:"relative", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          <div>
            <Reveal>
              <div style={{ display:"inline-flex", alignItems:"center", gap:7, background:C.blueLight, border:`1px solid ${C.blueBorder}`, borderRadius:100, padding:"5px 14px", marginBottom:28 }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:C.blue, display:"block" }}/>
                <span style={OL}>Toronto's Digital Growth Partner</span>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h1 style={{ ...D, fontSize:"clamp(40px,5.5vw,70px)", marginBottom:22 }}>
                Your competitors are winning online.<br/>
                <span style={{ color:C.blue }}>We're about to change that.</span>
              </h1>
            </Reveal>
            <Reveal delay={130}>
              <p style={{ ...body, fontSize:18, maxWidth:460, marginBottom:36 }}>
                Every day without a high-converting website is leads going to your competitor. We fix that — in one week, flat.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:36 }}>
                <button style={primBtn} onClick={go("Contact")}
                  onMouseEnter={e=>{ e.currentTarget.style.background=C.blueMid; e.currentTarget.style.transform="translateY(-1px)"; e.currentTarget.style.boxShadow="0 6px 20px rgba(37,99,235,0.3)"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.background=C.blue; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 2px 8px rgba(37,99,235,0.22)"; }}>
                  Book Free Call →
                </button>
                <button style={ghstBtn} onClick={go("Packages")}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor=C.blue; e.currentTarget.style.color=C.blue; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor=C.border; e.currentTarget.style.color=C.inkMid; }}>
                  See Packages
                </button>
              </div>
            </Reveal>
            <Reveal delay={270}>
              <div style={{ display:"flex", gap:24, flexWrap:"wrap" }}>
                {["Free strategy call","No contracts","Live in one week"].map(t => (
                  <div key={t} style={{ display:"flex", alignItems:"center", gap:7 }}>
                    <span style={{ width:16, height:16, borderRadius:"50%", background:C.blueLight, border:`1px solid ${C.blueBorder}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:C.blue, flexShrink:0 }}>✓</span>
                    <span style={{ fontSize:13, color:C.inkLight, fontWeight:500 }}>{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
              {[
                { n:"72hr", label:"Design delivered",   sub:"From brief to mockup" },
                { n:"1 wk", label:"Full site live",     sub:"Start to launch" },
                { n:"$0",    label:"Setup fees",          sub:"Never, on any plan" },
                { n:"$149", label:"Starting /month",    sub:"No setup fees ever" },
              ].map(({ n, label, sub }) => (
                <div key={label} style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:14, padding:"24px 20px", boxShadow:"0 2px 12px rgba(0,0,0,0.04)" }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:32, letterSpacing:"-0.04em", color:C.blue, lineHeight:1, marginBottom:8 }}>{n}</div>
                  <div style={{ fontWeight:600, color:C.ink, fontSize:14, marginBottom:3 }}>{label}</div>
                  <div style={{ fontSize:12, color:C.inkLight }}>{sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section style={{ padding:"90px 5%", background:C.bgOff, borderTop:`1px solid ${C.border}` }}>
        <div style={wrap}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:52 }}>
              <p style={OL}>The Data Is Clear</p>
              <h2 style={{ ...D, fontSize:"clamp(28px,4vw,48px)", marginTop:12, marginBottom:14 }}>
                Why your website matters more than you think.
              </h2>
              <p style={{ ...body, maxWidth:460, margin:"0 auto" }}>Research consistently shows how much your website affects customer behaviour. Here's what the data says.</p>
            </div>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:16 }}>
            {VALUE_PROPS.map((vp,i) => (
              <Reveal key={i} delay={i*60}>
                <div style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:16, padding:"32px 28px", boxShadow:"0 1px 6px rgba(0,0,0,0.04)", transition:"all 0.25s", height:"100%", boxSizing:"border-box" }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(37,99,235,0.1)"; e.currentTarget.style.borderColor=C.blueBorder; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 1px 6px rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor=C.border; }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:"clamp(44px,4vw,58px)", letterSpacing:"-0.045em", color:C.blue, lineHeight:1, marginBottom:14 }}>{vp.stat}</div>
                  <p style={{ fontSize:15, color:C.ink, lineHeight:1.6, marginBottom:10, fontWeight:500 }}>{vp.claim}</p>
                  <p style={{ fontSize:11, color:C.inkLight, letterSpacing:"0.06em", textTransform:"uppercase" }}>{vp.source}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN ── */}
      <section style={{ padding:"90px 5%", background:C.bg }}>
        <div style={wrap}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }}>
            <Reveal>
              <p style={{ ...OL, color:"#dc2626" }}>Sound Familiar?</p>
              <h2 style={{ ...D, fontSize:"clamp(28px,4vw,48px)", marginTop:12, marginBottom:18 }}>
                Your website could be
                <br/>costing you customers.
              </h2>
              <p style={body}>Most local websites aren't neutral — they're actively destroying trust and sending customers straight to competitors, silently, every single day.</p>
            </Reveal>
            <div style={{ display:"grid", gap:10 }}>
              {PROBLEMS.map((p,i) => (
                <Reveal key={p.title} delay={i*65}>
                  <div style={{ padding:"20px 22px", background:C.bgOff, border:`1px solid ${C.border}`, borderLeft:"3px solid #fca5a5", borderRadius:"0 12px 12px 0", transition:"all 0.2s" }}
                    onMouseEnter={e=>{ e.currentTarget.style.borderLeftColor="#dc2626"; e.currentTarget.style.background="#fff7f7"; }}
                    onMouseLeave={e=>{ e.currentTarget.style.borderLeftColor="#fca5a5"; e.currentTarget.style.background=C.bgOff; }}>
                    <div style={{ fontWeight:600, color:C.ink, fontSize:15, marginBottom:4 }}>{p.title}</div>
                    <div style={{ fontSize:14, color:C.inkLight, lineHeight:1.65 }}>{p.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding:"90px 5%", background:C.bgOff, borderTop:`1px solid ${C.border}` }} id="services-section">
        <div style={wrap}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:52 }}>
              <p style={OL}>What We Build</p>
              <h2 style={{ ...D, fontSize:"clamp(28px,4vw,48px)", marginTop:12, marginBottom:14 }}>
                Everything your business needs
                <br/>to win online.
              </h2>
              <p style={{ ...body, maxWidth:460, margin:"0 auto" }}>Every service engineered around one outcome: more customers calling your number or walking through your door.</p>
            </div>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:16 }}>
            {SERVICES.map((s,i) => (
              <Reveal key={s.title} delay={i*50}>
                <div style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:14, padding:"30px 26px", transition:"all 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.03)", height:"100%", boxSizing:"border-box" }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.borderColor=C.blueBorder; e.currentTarget.style.boxShadow="0 8px 24px rgba(37,99,235,0.09)"; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.borderColor=C.border; e.currentTarget.style.boxShadow="0 1px 4px rgba(0,0,0,0.03)"; }}>
                  <div style={{ width:32, height:32, borderRadius:8, marginBottom:16, background:C.blueLight, border:`1px solid ${C.blueBorder}`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11, fontWeight:700, color:C.blue }}>{String(i+1).padStart(2,"0")}</div>
                  <h3 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:17, fontWeight:700, color:C.ink, marginBottom:8 }}>{s.title}</h3>
                  <p style={{ fontSize:14, color:C.inkLight, lineHeight:1.7 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section style={{ padding:"90px 5%", background:C.bg }}>
        <div style={{ ...wrap, maxWidth:820 }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:44 }}>
              <p style={OL}>Why Simplyy</p>
              <h2 style={{ ...D, fontSize:"clamp(26px,4vw,46px)", marginTop:12 }}>
                Not all agencies
                <br/>are built the same.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div style={{ border:`1px solid ${C.border}`, borderRadius:16, overflow:"hidden", boxShadow:"0 2px 12px rgba(0,0,0,0.05)" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 140px 140px", padding:"14px 24px", background:C.bgOff, borderBottom:`1px solid ${C.border}` }}>
                <div/>
                <div style={{ textAlign:"center", fontSize:12, fontWeight:700, letterSpacing:"0.08em", color:C.blue }}>SIMPLYY</div>
                <div style={{ textAlign:"center", fontSize:12, fontWeight:700, letterSpacing:"0.08em", color:C.inkLight }}>TYPICAL AGENCY</div>
              </div>
              {COMPARISON.map((row,i) => (
                <div key={row.label} style={{ display:"grid", gridTemplateColumns:"1fr 140px 140px", padding:"14px 24px", background: i%2===0 ? "#fff" : C.bgOff, borderBottom: i<COMPARISON.length-1 ? `1px solid ${C.border}` : "none", alignItems:"center" }}>
                  <span style={{ fontSize:14, color:C.inkMid, fontWeight:500 }}>{row.label}</span>
                  <div style={{ textAlign:"center" }}>
                    <span style={{ display:"inline-flex", width:22, height:22, borderRadius:"50%", background:"rgba(16,185,129,0.1)", border:"1px solid rgba(16,185,129,0.25)", alignItems:"center", justifyContent:"center", fontSize:10, color:C.green }}>✓</span>
                  </div>
                  <div style={{ textAlign:"center" }}>
                    {row.them===false
                      ? <span style={{ display:"inline-flex", width:22, height:22, borderRadius:"50%", background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.2)", alignItems:"center", justifyContent:"center", fontSize:10, color:C.red }}>✕</span>
                      : <span style={{ fontSize:11, color:C.inkLight, fontStyle:"italic" }}>{row.them}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding:"110px 5%", textAlign:"center", background:C.ink, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.06, backgroundImage:`radial-gradient(circle, #2563eb 1px, transparent 1px)`, backgroundSize:"32px 32px" }}/>
        <div style={{ maxWidth:600, margin:"0 auto", position:"relative" }}>
          <Reveal>
            <p style={{ ...OL, color:"#93c5fd" }}>Zero Risk. Full Speed.</p>
            <h2 style={{ ...D, fontSize:"clamp(30px,4.5vw,56px)", color:"#fff", marginTop:16, marginBottom:20 }}>
              Live in one week.
              <br/><span style={{ color:"#93c5fd" }}>Leads from day one.</span>
            </h2>
            <p style={{ fontSize:17, color:"rgba(255,255,255,0.55)", lineHeight:1.8, maxWidth:460, margin:"0 auto 40px" }}>
              One free call. We'll audit your online presence and show you exactly what we'd fix — whether you hire us or not.
            </p>
            <button onClick={go("Contact")}
              style={{ background:"#fff", color:C.blue, border:"none", cursor:"pointer", padding:"15px 40px", borderRadius:10, fontSize:16, fontWeight:700, fontFamily:"inherit", boxShadow:"0 4px 20px rgba(0,0,0,0.2)", transition:"all 0.2s", display:"inline-block", marginBottom:20 }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(0,0,0,0.3)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.2)"; }}>
              Book My Free Call →
            </button>
            <p style={{ fontSize:13, color:"rgba(255,255,255,0.3)" }}>Free · No commitment · Reply within 24 hours</p>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
