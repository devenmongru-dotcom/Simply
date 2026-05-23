import C from "../styles/colors";
import { FOOTER_LINKS } from "../data/content";

// Company links map
const COMPANY_MAP = {
  "About Us":     { page:"About" },
  "Our Process":  { page:"Process" },
  "Contact Us":   { page:"Contact" },
  "Book a Call":  { page:"Contact" },
};

export default function Footer({ setPage }) {
  const goPage = p => { setPage(p); window.scrollTo(0,0); };

  const handleLink = (title, link) => {
    if (title === "Pages") {
      goPage(link);
    } else if (title === "Services") {
      // Navigate to Home then scroll to services section
      setPage("Home");
      setTimeout(() => {
        const el = document.getElementById("services-section");
        if (el) el.scrollIntoView({ behavior:"smooth", block:"start" });
        else window.scrollTo({ top: 800, behavior:"smooth" });
      }, 80);
    } else if (title === "Company") {
      const dest = COMPANY_MAP[link];
      if (dest) goPage(dest.page);
    }
  };

  return (
    <footer style={{ background:C.ink, padding:"60px 5% 28px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, marginBottom:48 }}>

          {/* Brand col */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <svg width={34} height={34} viewBox="0 0 44 44" fill="none">
                <defs>
                  <linearGradient id="flg" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#1d4ed8"/>
                  </linearGradient>
                </defs>
                <rect width="44" height="44" rx="12" fill="url(#flg)"/>
                <rect x="9" y="9" width="26" height="11" rx="5.5" fill="white"/>
                <rect x="9" y="16.5" width="26" height="11" rx="5.5" fill="white" opacity="0.3"/>
                <rect x="9" y="24" width="26" height="11" rx="5.5" fill="white"/>
                <rect x="9" y="16" width="13" height="7" fill="url(#flg)"/>
                <rect x="22" y="21" width="13" height="7" fill="url(#flg)"/>
              </svg>
              <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:22, letterSpacing:"-0.03em", color:"#fff" }}>Simplyy</span>
            </div>
            <p style={{ fontSize:14, color:"rgba(255,255,255,0.38)", lineHeight:1.8, marginTop:16, maxWidth:240 }}>
              Premium websites for local businesses. Live in one week.
            </p>
            <p style={{ fontSize:11, color:"rgba(255,255,255,0.2)", marginTop:12, letterSpacing:"0.1em", textTransform:"uppercase" }}>
              Simple · Affordable · Effective
            </p>
          </div>

          {/* Link cols */}
          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title}>
              <div style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.28)", letterSpacing:"0.12em", textTransform:"uppercase", fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:18 }}>
                {title}
              </div>
              {links.map(l => (
                <button key={l}
                  onClick={() => handleLink(title, l)}
                  style={{ display:"block", background:"none", border:"none", cursor:"pointer", fontSize:14, color:"rgba(255,255,255,0.45)", marginBottom:9, padding:0, fontFamily:"inherit", textAlign:"left", transition:"color 0.15s" }}
                  onMouseEnter={e=>e.target.style.color="#fff"}
                  onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.45)"}
                >{l}</button>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:24, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
          <p style={{ fontSize:13, color:"rgba(255,255,255,0.22)" }}>© 2025 Simplyy. All rights reserved.</p>
          <p style={{ fontSize:13, color:"rgba(255,255,255,0.22)" }}>Toronto, Ontario 🇨🇦</p>
        </div>
      </div>
    </footer>
  );
}
