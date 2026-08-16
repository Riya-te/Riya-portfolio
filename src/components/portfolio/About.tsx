import { motion } from "framer-motion";
import { Section } from "./Section";
import { Cloud, Code2, Cpu, GitBranch } from "lucide-react";

const stats = [
  { icon: Cloud, label: "Cloud", value: "AWS" },
  { icon: Code2, label: "CGPA", value: "9.45" },
  { icon: GitBranch, label: "DSA Problems", value: "530+" },
  { icon: Cpu, label: "Focus", value: "DevOps" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Engineer behind the |infrastructure">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          <p>
            I'm a <span className="font-semibold text-foreground">Computer Science student</span> with a
            deep passion for <span className="font-semibold text-foreground">DevOps</span>,
            <span className="font-semibold text-foreground"> Cloud Computing</span>, and
            <span className="font-semibold text-foreground"> Full Stack Development</span>.
            I love turning complex systems into simple, automated workflows — from React
            UIs to Kubernetes clusters orchestrated on AWS.
          </p>
          <p>
            My core interests span <span className="text-gradient font-semibold">Kubernetes, Infrastructure as Code,
            CI/CD automation</span>, and building reliable cloud-native platforms with
            Docker, Terraform, Jenkins, ArgoCD, and Prometheus.
          </p>
          <p>
            Alongside engineering, I sharpen my <span className="font-semibold text-foreground">problem-solving</span>
            on LeetCode (530+ problems solved) and serve as an Executive Member of the
            SBU Coding Club — a continuous learner shipping production-grade DevOps
            projects and full-stack applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass group rounded-2xl p-5 transition-transform hover:-translate-y-1">
              <s.icon className="size-6 text-[#06B6D4] transition-transform group-hover:scale-110" />
              <div className="mt-4 font-display text-2xl font-bold">{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}