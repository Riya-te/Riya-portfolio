import { motion } from "framer-motion";

export function AnimatedBackground() {
  // Deterministic particle positions so SSR & client match.
  const particles = Array.from({ length: 40 }, (_, i) => {
    const x = (i * 137.5) % 100;
    const y = (i * 53.7) % 100;
    const d = 8 + ((i * 7) % 10);
    const delay = (i % 10) * 0.4;
    return { x, y, d, delay };
  });

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* deep base */}
      <div className="absolute inset-0" style={{ background: "#050816" }} />
      {/* grid */}
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* blurred gradient blobs */}
      <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 60%)" }} />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 60%)", animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full opacity-20 blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 60%)", animationDelay: "-12s" }} />
      {/* particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: 2,
            height: 2,
            background: i % 3 === 0 ? "#06B6D4" : i % 3 === 1 ? "#8B5CF6" : "#3B82F6",
            boxShadow: "0 0 8px currentColor",
            color: i % 3 === 0 ? "#06B6D4" : i % 3 === 1 ? "#8B5CF6" : "#3B82F6",
          }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: p.d, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}