import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Noir Collective",
    category: "Brand Identity",
    year: "2024",
    color: "#1a1a1a",
    accent: "#F5C842",
    tags: ["Logo", "Guidelines"],
    preview: "NC",
    size: "large",
    position: "center",
  },
  {
    id: 2,
    title: "Afro Pulse",
    category: "Poster Series",
    year: "2024",
    color: "#0f0f0f",
    accent: "#FF6B35",
    tags: ["Print", "Culture"],
    preview: "AP",
    size: "small",
    position: "left-top",
  },
  {
    id: 3,
    title: "Lumière Studio",
    category: "Social Media",
    year: "2023",
    color: "#111111",
    accent: "#A8E6CF",
    tags: ["Digital", "Content"],
    preview: "LS",
    size: "small",
    position: "right-top",
  },
  {
    id: 4,
    title: "Onyx Festival",
    category: "Event Branding",
    year: "2024",
    color: "#0d0d0d",
    accent: "#C9B8FF",
    tags: ["Event", "Print"],
    preview: "OF",
    size: "medium",
    position: "left-bottom",
  },
  {
    id: 5,
    title: "Kente Labs",
    category: "Brand System",
    year: "2023",
    color: "#141414",
    accent: "#F5C842",
    tags: ["Identity", "Web"],
    preview: "KL",
    size: "medium",
    position: "right-bottom",
  },
];

const floatKeyframes = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

@keyframes float-1 {
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-14px) rotate(-1deg); }
}
@keyframes float-2 {
  0%, 100% { transform: translateY(0px) rotate(2deg); }
  50% { transform: translateY(-10px) rotate(3deg); }
}
@keyframes float-3 {
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50% { transform: translateY(-18px) rotate(-2deg); }
}
@keyframes float-4 {
  0%, 100% { transform: translateY(0px) rotate(1.5deg); }
  50% { transform: translateY(-12px) rotate(0.5deg); }
}
@keyframes float-center {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-8px) scale(1.008); }
}
@keyframes reveal-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes reveal-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes glow-pulse {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.28; }
}
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
`;

function ProjectCard({ project, animClass, delay, onHover }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => { setHovered(true); onHover(project.id); }}
      onMouseLeave={() => { setHovered(false); onHover(null); }}
      style={{
        background: `linear-gradient(145deg, ${project.color} 0%, #0a0a0a 100%)`,
        border: `1px solid ${hovered ? project.accent + "60" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "16px",
        padding: "20px",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        transform: hovered ? "translateY(-6px) scale(1.03)" : "none",
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px ${project.accent}40`
          : "0 8px 32px rgba(0,0,0,0.4)",
        backdropFilter: "blur(12px)",
        animation: `${animClass} ${2.8 + delay * 0.4}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: `radial-gradient(circle at top right, ${project.accent}15, transparent 60%)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
      }} />

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "16px",
        position: "relative",
      }}>
        <div style={{
          width: "44px",
          height: "44px",
          borderRadius: "10px",
          background: `linear-gradient(135deg, ${project.accent}30, ${project.accent}10)`,
          border: `1px solid ${project.accent}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "13px",
          fontWeight: "600",
          color: project.accent,
          letterSpacing: "1px",
        }}>{project.preview}</div>
        <span style={{
          fontSize: "11px",
          color: "rgba(255,255,255,0.35)",
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.5px",
        }}>{project.year}</span>
      </div>

      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "17px",
        fontWeight: "600",
        color: "rgba(255,255,255,0.92)",
        margin: "0 0 4px",
        letterSpacing: "0.3px",
      }}>{project.title}</p>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "11px",
        color: "rgba(255,255,255,0.4)",
        margin: "0 0 14px",
        fontWeight: "300",
        textTransform: "uppercase",
        letterSpacing: "1.5px",
      }}>{project.category}</p>

      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: "10px",
            padding: "3px 8px",
            borderRadius: "100px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.8px",
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function CentralCard({ hovered }) {
  return (
    <div style={{
      background: "linear-gradient(160deg, #161616 0%, #0a0a0a 100%)",
      border: `1px solid ${hovered ? "rgba(245,200,66,0.3)" : "rgba(255,255,255,0.1)"}`,
      borderRadius: "24px",
      padding: "32px",
      transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
      boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
      animation: "float-center 4s ease-in-out infinite",
      position: "relative",
      overflow: "hidden",
      minHeight: "340px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      <div style={{
        position: "absolute",
        top: "-40px", right: "-40px",
        width: "200px", height: "200px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,200,66,0.12) 0%, transparent 70%)",
        animation: "glow-pulse 3s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-60px", left: "-30px",
        width: "180px", height: "180px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,184,255,0.08) 0%, transparent 70%)",
        animation: "glow-pulse 4s ease-in-out infinite",
        animationDelay: "1.5s",
      }} />

      <div style={{ position: "relative" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
        }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}>Featured Work</div>
          <div style={{
            width: "28px", height: "28px",
            borderRadius: "50%",
            border: "1px solid rgba(245,200,66,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#F5C842" }} />
          </div>
        </div>

        <div style={{
          width: "100%",
          height: "160px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(245,200,66,0.06) 0%, rgba(200,184,255,0.04) 100%)",
          }} />
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "52px",
            fontWeight: "300",
            color: "rgba(245,200,66,0.6)",
            letterSpacing: "-2px",
            lineHeight: 1,
            fontStyle: "italic",
          }}>CT</div>
          <div style={{
            position: "absolute",
            bottom: "12px", right: "14px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "9px",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}>Brand Identity</div>
        </div>
      </div>

      <div>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "22px",
          fontWeight: "600",
          color: "rgba(255,255,255,0.9)",
          margin: "0 0 6px",
          letterSpacing: "0.2px",
        }}>Charmel Tobou Studio</p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px",
          color: "rgba(255,255,255,0.35)",
          margin: "0 0 18px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontWeight: "300",
        }}>Graphic Design & Creative Dev</p>
        <div style={{ display: "flex", gap: "8px" }}>
          {["Identity", "Digital", "Print", "Motion"].map((t) => (
            <span key={t} style={{
              fontSize: "10px",
              padding: "3px 9px",
              borderRadius: "100px",
              background: "rgba(245,200,66,0.08)",
              border: "1px solid rgba(245,200,66,0.2)",
              color: "rgba(245,200,66,0.7)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.8px",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestSection() {
  const [mounted, setMounted] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const floatAnims = ["float-1", "float-2", "float-3", "float-4"];

  return (
    <>
      <style>{floatKeyframes}</style>
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          background: "#080808",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'DM Sans', sans-serif",
          padding: "80px 24px 60px",
        }}
      >
        {/* Background atmosphere */}
        <div style={{
          position: "absolute",
          top: "10%", left: "50%",
          transform: "translateX(-50%)",
          width: "700px", height: "500px",
          background: "radial-gradient(ellipse, rgba(245,200,66,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
          animation: "glow-pulse 5s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute",
          bottom: "0", left: "20%",
          width: "400px", height: "300px",
          background: "radial-gradient(ellipse, rgba(200,184,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Nav hint */}
        <div style={{
          position: "absolute",
          top: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "40px",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 0.2s",
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "18px",
            fontWeight: "600",
            color: "rgba(255,255,255,0.9)",
            letterSpacing: "1px",
          }}>CT</span>
          <div style={{ display: "flex", gap: "28px" }}>
            {["Work", "Studio", "Contact"].map((item) => (
              <span key={item} style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
            //   onMouseEnter={(e) => e.target.style.color = "rgba(255,255,255,0.8)"}
            //   onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.35)"}
              >{item}</span>
            ))}
          </div>
          <div style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: "#F5C842",
            boxShadow: "0 0 10px rgba(245,200,66,0.6)",
          }} />
        </div>

        {/* Headline */}
        <div style={{
          textAlign: "center",
          maxWidth: "780px",
          marginBottom: "20px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.3s",
          zIndex: 10,
          position: "relative",
        }}>
          <div style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(245,200,66,0.7)",
            marginBottom: "20px",
            fontWeight: "300",
          }}>Graphic Designer & Creative Developer</div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px, 8vw, 96px)",
            fontWeight: "300",
            lineHeight: "1.05",
            letterSpacing: "-2px",
            margin: "0 0 8px",
            color: "rgba(255,255,255,0.95)",
          }}>
            Design that is{" "}
            <em style={{
              fontStyle: "italic",
              color: "#F5C842",
              background: "linear-gradient(90deg, #F5C842, #FFE066, #F5C842)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 4s linear infinite",
            }}>bold,</em>
          </h1>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(52px, 8vw, 96px)",
            fontWeight: "300",
            lineHeight: "1.05",
            letterSpacing: "-2px",
            margin: "0",
            color: "rgba(255,255,255,0.95)",
          }}>
            minimal & intentional.
          </h1>
        </div>

        {/* Subtitle */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(14px, 1.8vw, 17px)",
          color: "rgba(255,255,255,0.4)",
          textAlign: "center",
          maxWidth: "480px",
          lineHeight: "1.75",
          marginBottom: "36px",
          fontWeight: "300",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.5s",
          zIndex: 10,
          position: "relative",
        }}>
          Creating bold visual identities and digital experiences for brands,
          entrepreneurs and cultural projects.
        </p>

        {/* CTA */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "72px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.23, 1, 0.32, 1) 0.65s",
          zIndex: 10,
          position: "relative",
        }}>
          <button
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F5C842";
              e.currentTarget.style.color = "#080808";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#F5C842";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            style={{
              background: "transparent",
              border: "1px solid rgba(245,200,66,0.5)",
              borderRadius: "100px",
              padding: "13px 32px",
              color: "#F5C842",
              fontSize: "13px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: "400",
            }}
          >
            View Selected Work
          </button>
          <button
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.8)";
              e.currentTarget.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.3)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.3)",
              fontSize: "13px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Let's Talk <span>→</span>
          </button>
        </div>

        {/* Floating cards composition */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1000px",
            height: "420px",
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 0.8s",
            transform: `perspective(1200px) rotateX(${mousePos.y * 3}deg) rotateY(${mousePos.x * -3}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Left top card */}
          <div style={{
            position: "absolute",
            left: "0%",
            top: "0%",
            width: "210px",
            zIndex: 4,
          }}>
            <ProjectCard
              project={projects[1]}
              animClass="float-1"
              delay={0}
              onHover={setHoveredId}
            />
          </div>

          {/* Left bottom card */}
          <div style={{
            position: "absolute",
            left: "4%",
            bottom: "0%",
            width: "220px",
            zIndex: 4,
          }}>
            <ProjectCard
              project={projects[3]}
              animClass="float-3"
              delay={0.7}
              onHover={setHoveredId}
            />
          </div>

          {/* CENTER dominant card */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            zIndex: 10,
          }}>
            <CentralCard hovered={hoveredId !== null} />
          </div>

          {/* Right top card */}
          <div style={{
            position: "absolute",
            right: "0%",
            top: "0%",
            width: "210px",
            zIndex: 4,
          }}>
            <ProjectCard
              project={projects[2]}
              animClass="float-2"
              delay={0.4}
              onHover={setHoveredId}
            />
          </div>

          {/* Right bottom card */}
          <div style={{
            position: "absolute",
            right: "4%",
            bottom: "0%",
            width: "220px",
            zIndex: 4,
          }}>
            <ProjectCard
              project={projects[4]}
              animClass="float-4"
              delay={1}
              onHover={setHoveredId}
            />
          </div>

          {/* Subtle connecting glow lines */}
          <svg style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            opacity: 0.15,
            zIndex: 2,
          }}>
            <line x1="22%" y1="30%" x2="50%" y2="50%" stroke="rgba(245,200,66,0.4)" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="78%" y1="30%" x2="50%" y2="50%" stroke="rgba(245,200,66,0.4)" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="18%" y1="75%" x2="50%" y2="50%" stroke="rgba(200,184,255,0.3)" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="82%" y1="75%" x2="50%" y2="50%" stroke="rgba(200,184,255,0.3)" strokeWidth="0.5" strokeDasharray="4 8" />
          </svg>
        </div>

        {/* Bottom tagline row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "52px",
          opacity: mounted ? 0.45 : 0,
          transition: "opacity 1s ease 1.2s",
          zIndex: 10,
          position: "relative",
        }}>
          {["Minimal.", "Bold.", "Intentional."].map((word, i) => (
            <span key={word} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "15px",
              fontWeight: "300",
              color: i === 1 ? "#F5C842" : "rgba(255,255,255,0.5)",
              fontStyle: i === 1 ? "italic" : "normal",
              letterSpacing: "2px",
            }}>{word}</span>
          ))}
        </div>
      </section>
    </>
  );
}