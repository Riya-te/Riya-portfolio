import { motion } from "framer-motion";
import { Section } from "./Section";
import { Trophy, GraduationCap, Users, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Achievement = {
  Icon: LucideIcon;
  title: string;
  detail: string;
  color: string;
};

const achievements: Achievement[] = [
  {
    Icon: Trophy,
    title: "530+ LeetCode Problems",
    detail: "Consistent problem solving across data structures, algorithms, SQL, and system design patterns.",
    color: "#F59E0B",
  },
  {
    Icon: GraduationCap,
    title: "CGPA 9.45",
    detail: "Maintained a top-tier academic record while building hands-on DevOps and full-stack projects.",
    color: "#3B82F6",
  },
  {
    Icon: Users,
    title: "Executive Member — SBU Coding Club",
    detail: "Organising coding events, mentoring juniors, and leading hands-on technical workshops.",
    color: "#8B5CF6",
  },
  {
    Icon: Rocket,
    title: "Multiple Production-grade DevOps Projects",
    detail: "Shipped end-to-end pipelines on AWS with Kubernetes, Terraform, Jenkins, ArgoCD, and observability.",
    color: "#06B6D4",
  },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Highlights" title="Achievements & |milestones"
      description="Moments and metrics that mark the journey so far.">
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 size-36 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-30"
              style={{ background: a.color }} />
            <div className="flex items-start gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-xl"
                style={{ background: `${a.color}22`, color: a.color }}>
                <a.Icon className="size-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-tight">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}