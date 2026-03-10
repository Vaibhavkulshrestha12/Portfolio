import { useState } from "react";
import StarBorder from "../ui/StarBorder";

// ── Certification Badges ─────────────────────────────────────────────────────
const certBadges = [
  {
    id: "aws-saa",
    src: "/images/aws-certified-solutions-architect-associate.png",
    name: "AWS Certified",
    sub: "Solutions Architect – Associate",
    issuer: "Amazon Web Services",
  },
  {
    id: "oci-devops",
    src: "/images/OCI25DOPOCP.png",
    name: "OCI DevOps",
    sub: "Professional",
    issuer: "Oracle Cloud Infrastructure",
  },
  {
    id: "oci-ai",
    src: "/images/OCI25AICFAV1.png",
    name: "OCI AI Foundations",
    sub: "Associate",
    issuer: "Oracle Cloud Infrastructure",
  },
  {
    id: "oci-dev",
    src: "/images/OCID25CP.png",
    name: "OCI Developer",
    sub: "Professional",
    issuer: "Oracle Cloud Infrastructure",
  },
];

// ── Badge Card ────────────────────────────────────────────────────────────────
const CertBadgeCard = ({
  src,
  name,
  sub,
  issuer,
}: {
  src: string;
  name: string;
  sub: string;
  issuer: string;
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <StarBorder as="div" className="w-full" color="#f59e0b" speed="5s">
      <div className="flex flex-col items-center gap-3 p-4">
        <div className="w-24 h-24 flex items-center justify-center">
          {imgError ? (
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.05)", border: "2px dashed rgba(255,255,255,0.2)" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(255,255,255,0.4)" }}>
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          ) : (
            <img
              src={src}
              alt={`${name} ${sub}`}
              className="w-24 h-24 object-contain"
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <div className="text-center">
          <p className="text-sm font-bold leading-tight text-white">{name}</p>
          <p className="text-xs mt-0.5 leading-tight text-gray-400">{sub}</p>
          <p className="text-xs mt-2 font-medium px-2 py-0.5 rounded inline-block bg-white/10 border border-white/10 text-gray-400">
            {issuer}
          </p>
        </div>
      </div>
    </StarBorder>
  );
};

export const ModernAchievements = () => {
  return (
    <section className="section-padding" id="achievements">
      <div className="container-custom">

        <div className="text-center mb-12">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full border mb-6"
            style={{ background: "var(--bg-secondary)", borderColor: "var(--accent-primary)", color: "var(--accent-primary)" }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase">Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span style={{ color: "var(--text-primary)" }}>Key </span>
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Milestones from competitions, certifications, and community events
          </p>
        </div>

        <div
          className="rounded-xl border p-6 mb-6"
          style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                Certification Badges
              </p>
              
            </div>
            <span
              className="text-xs font-medium px-2.5 py-1 rounded"
              style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
            >
              4 badges
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {certBadges.map((badge) => (
              <CertBadgeCard key={badge.id} {...badge} />
            ))}
          </div>
        </div>

        {/* Hackathon Record — 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Smart India Hackathon */}
          <div
            className="rounded-xl p-5"
            style={{
              background: "var(--bg-secondary)",
              borderTop: "1px solid var(--border)",
              borderRight: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              borderLeft: "3px solid var(--accent-primary)",
            }}
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                Hackathons
              </h3>
              <span
                className="flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded"
                style={{
                  background: "rgba(251,191,36,0.10)",
                  border: "1px solid rgba(251,191,36,0.25)",
                  color: "var(--accent-primary)",
                }}
              >
                Top 3
              </span>
            </div>
            <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
             Intra-University and Nationals
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              2x national qualifier · 3 internal wins · competed in EdTech &amp; Agriculture verticals.
            </p>
          </div>

          {/* MSME Hackathon */}
          <div
            className="rounded-xl p-5"
            style={{
              background: "var(--bg-secondary)",
              borderTop: "1px solid var(--border)",
              borderRight: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              borderLeft: "3px solid var(--accent-primary)",
            }}
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                MSME National Hackathon
              </h3>
              <span
                className="flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded"
                style={{
                  background: "rgba(251,191,36,0.10)",
                  border: "1px solid rgba(251,191,36,0.25)",
                  color: "var(--accent-primary)",
                }}
              >
                Winner
              </span>
            </div>
            <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
              Ministry of MSME · 2024
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              1st place · ₹3.5L funding secured · built Kisan Connect, an agri-tech marketplace now in production.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};