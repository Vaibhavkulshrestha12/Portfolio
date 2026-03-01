import { Eye } from "lucide-react";
import { useVisitorCount } from "../../hooks/useVisitorCount";

export const Footer = () => {
  const count = useVisitorCount();

  const ordinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] ?? s[v] ?? s[0];
  };

  return (
    <footer
      className="py-10 px-4"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
        {/* Visitor counter pill */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border"
          style={{
            background: "var(--bg-secondary)",
            borderColor: "var(--border)",
          }}
        >
          <Eye className="w-4 h-4 flex-shrink-0" style={{ color: "var(--text-secondary)" }} />
          {count !== null ? (
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
              You are the{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                {count.toLocaleString()}
                <sup className="text-[9px]">{ordinal(count)}</sup>
              </strong>{" "}
              visitor
            </span>
          ) : (
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
              Counting visitors…
            </span>
          )}
        </div>

        {/* Copyright */}
        <div className="text-center space-y-0.5">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Design &amp; Developed by{" "}
            <span className="font-semibold" style={{ color: "var(--text-secondary)" }}>
              Vaibhav
            </span>
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

