import { useState, useEffect } from "react";
import SimplyLogo from "./SimplyLogo";
import C from "../styles/colors";
import { NAV_LINKS } from "../data/content";

export default function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position:"fixed", top:0, left:0, right:0, zIndex:200,
      padding:"0 5%",
      background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      transition:"all 0.3s ease",
    }}>
      <div style={{
        maxWidth:1200, margin:"0 auto",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        height:68,
      }}>
        <button onClick={() => { setPage("Home"); window.scrollTo(0,0); }}
          style={{ background:"none", border:"none", cursor:"pointer", padding:0 }}>
          <SimplyLogo size={32}/>
        </button>

        <div style={{ display:"flex", alignItems:"center", gap:2 }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => { setPage(l); window.scrollTo(0,0); }}
              style={{
                background: page===l ? C.blueLight : "none",
                border:"none", cursor:"pointer",
                padding:"7px 14px", borderRadius:7,
                fontSize:14, fontWeight:500,
                color: page===l ? C.blue : C.inkMid,
                transition:"all 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.bgOff; e.currentTarget.style.color = C.ink; }}
              onMouseLeave={e => { e.currentTarget.style.background = page===l ? C.blueLight : "none"; e.currentTarget.style.color = page===l ? C.blue : C.inkMid; }}
            >{l}</button>
          ))}

          <button onClick={() => { setPage("Contact"); window.scrollTo(0,0); }}
            style={{
              marginLeft:10,
              background: C.blue,
              color:"#fff", border:"none", cursor:"pointer",
              padding:"9px 20px", borderRadius:8,
              fontSize:14, fontWeight:600,
              transition:"all 0.2s",
              boxShadow:"0 1px 3px rgba(37,99,235,0.25)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = C.blueMid; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(37,99,235,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.blue; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 1px 3px rgba(37,99,235,0.25)"; }}
          >Get Started</button>
        </div>
      </div>
    </nav>
  );
}
