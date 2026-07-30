import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, ExternalLink } from "lucide-react";
import resumeUrl from "@/assets/riya_kumari_resume_v6.pdf?url";
import {
  SiDocker, SiKubernetes, SiTerraform, SiJenkins,
  SiGithub, SiLinux, SiReact, SiNodedotjs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const roles = [
  "DevOps Engineer",
  "Full Stack Developer",
  "Cloud Enthusiast",
  "AWS & Kubernetes Engineer",
];

function useTyping() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      const next = deleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);
      setText(next);
      if (!deleting && next === current) setTimeout(() => setDeleting(true), 1400);
      else if (deleting && next === "") {
        setDeleting(false);
        setIdx((idx + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return text;
}

const floatingTech = [
  { Icon: SiDocker, color: "#2496ED", pos: "top-[8%] left-[6%]", delay: 0 },
  { Icon: SiKubernetes, color: "#326CE5", pos: "top-[18%] right-[10%]", delay: 0.6 },
  { Icon: FaAws, color: "#FF9900", pos: "top-[55%] left-[2%]", delay: 1.1 },
  { Icon: SiTerraform, color: "#7B42BC", pos: "bottom-[12%] left-[18%]", delay: 0.3 },
  { Icon: SiJenkins, color: "#D24939", pos: "bottom-[22%] right-[6%]", delay: 0.9 },
  { Icon: SiGithub, color: "#ffffff", pos: "top-[42%] right-[2%]", delay: 1.4 },
  { Icon: SiLinux, color: "#FCC624", pos: "bottom-[5%] left-[45%]", delay: 0.5 },
  { Icon: SiReact, color: "#61DAFB", pos: "top-[5%] right-[40%]", delay: 1.7 },
  { Icon: SiNodedotjs, color: "#5FA04E", pos: "bottom-[35%] left-[42%]", delay: 2.1 },
];

export function Hero() {
  const typed = useTyping();

  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-16">
      <div className="grid w-full items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities
          </motion.span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Riya Kumari</span>
          </h1>

          <div className="mt-4 flex h-10 items-center text-2xl font-semibold text-muted-foreground sm:text-3xl">
            <span className="font-mono text-[#06B6D4]">{">"}</span>
            <span className="ml-3 text-foreground">{typed}</span>
            <span className="ml-1 inline-block h-7 w-[2px] animate-pulse bg-[#06B6D4]" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build scalable cloud infrastructure, automate CI/CD pipelines, and
            develop modern full-stack applications using AWS, Docker, Kubernetes,
            Terraform, Jenkins, React, and Node.js.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_-8px_#3B82F6] transition-transform hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)" }}
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              download="Riya_Kumari_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-xs text-muted-foreground">
            <a href="https://github.com/Riya-te" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground"><ExternalLink className="size-5" /></a>
            <span className="h-px w-12 bg-white/10" />
            <span>Trusted by 5+ production deployments</span>
          </div>
        </motion.div>

        {/* Right: 3D-ish workstation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square w-full"
        >
          {/* Glow ring */}
          <div className="absolute inset-6 rounded-full opacity-40 blur-3xl"
            style={{ background: "conic-gradient(from 90deg,#3B82F6,#8B5CF6,#06B6D4,#3B82F6)" }} />

          {/* Monitor stack */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 grid place-items-center"
          >
            <div className="glass relative w-[78%] rounded-2xl p-3 shadow-2xl">
              {/* Top bar */}
              <div className="mb-3 flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-yellow-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-[10px] text-muted-foreground">riya@devops: ~/infra</span>
              </div>
              {/* Terminal */}
              <div className="rounded-lg bg-black/60 p-4 font-mono text-[11px] leading-relaxed">
                <p><span className="text-emerald-400">➜</span> <span className="text-[#06B6D4]">terraform</span> apply -auto-approve</p>
                <p className="text-muted-foreground">Plan: 14 to add, 0 to change, 0 to destroy.</p>
                <p><span className="text-emerald-400">✓</span> aws_eks_cluster.prod: <span className="text-[#8B5CF6]">created</span></p>
                <p><span className="text-emerald-400">✓</span> kubernetes_deployment.api: <span className="text-[#8B5CF6]">rolling</span></p>
                <p><span className="text-emerald-400">➜</span> <span className="text-[#06B6D4]">kubectl</span> get pods -n prod</p>
                <p>api-7f4...   <span className="text-emerald-400">Running</span></p>
                <p>web-9c2...  <span className="text-emerald-400">Running</span></p>
                <p>worker-3b1.. <span className="text-emerald-400">Running</span></p>
                <p className="mt-1"><span className="text-[#3B82F6]">▌</span></p>
              </div>
              {/* Mini cards */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { label: "Uptime", value: "99.99%", color: "#06B6D4" },
                  { label: "Deploys", value: "1.2k", color: "#8B5CF6" },
                  { label: "Latency", value: "42ms", color: "#3B82F6" },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg bg-white/5 p-2">
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
                    <div className="font-mono text-sm font-bold" style={{ color: s.color }}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating tech icons */}
          {floatingTech.map(({ Icon, color, pos, delay }, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, delay, ease: "easeInOut" }}
              className={`absolute ${pos} glass grid size-12 place-items-center rounded-xl shadow-lg`}
            >
              <Icon size={22} color={color} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}