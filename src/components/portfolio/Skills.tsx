import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  SiJavascript, SiReact, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql,
  SiDocker, SiKubernetes, SiJenkins, SiTerraform, SiGithubactions,
  SiNginx, SiLinux, SiGit, SiPrometheus, SiGrafana, SiGithub,
  SiHelm, SiArgo,
  SiCplusplus, SiApachemaven, SiApachetomcat,
} from "react-icons/si";
import { FaJava, FaAws, FaShieldAlt, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

type Skill = { name: string; Icon: IconType; color: string };
type Group = { title: string; skills: Skill[] };

const groups: Group[] = [
  { title: "Programming", skills: [
    { name: "Java", Icon: FaJava, color: "#f89820" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "SQL", Icon: FaDatabase, color: "#00758F" },
    { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  ]},
  { title: "Frontend", skills: [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", Icon: SiCss, color: "#1572B6" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  ]},
  { title: "Backend", skills: [
    { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Express.js", Icon: SiExpress, color: "#ffffff" },
    { name: "REST APIs", Icon: FaShieldAlt, color: "#06B6D4" },
  ]},
  { title: "Databases", skills: [
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  ]},
  { title: "Cloud (AWS)", skills: [
    { name: "EC2", Icon: FaAws, color: "#FF9900" },
    { name: "IAM", Icon: FaAws, color: "#FF9900" },
    { name: "VPC", Icon: FaAws, color: "#FF9900" },
    { name: "RDS", Icon: FaAws, color: "#FF9900" },
    { name: "S3", Icon: FaAws, color: "#FF9900" },
    { name: "Route 53", Icon: FaAws, color: "#FF9900" },
    { name: "EKS", Icon: SiKubernetes, color: "#326CE5" },
  ]},
  { title: "DevOps", skills: [
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
    { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
    { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
    { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
    { name: "Helm", Icon: SiHelm, color: "#0F1689" },
    { name: "ArgoCD", Icon: SiArgo, color: "#EF7B4D" },
    { name: "SonarQube", Icon: FaShieldAlt, color: "#4E9BCD" },
    { name: "Trivy", Icon: FaShieldAlt, color: "#1904DA" },
    { name: "Prometheus", Icon: SiPrometheus, color: "#E6522C" },
    { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
    { name: "Nginx", Icon: SiNginx, color: "#009639" },
  ]},
  { title: "Tools", skills: [
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
    { name: "Linux", Icon: SiLinux, color: "#FCC624" },
    { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
    { name: "Maven", Icon: SiApachemaven, color: "#C71A36" },
    { name: "Tomcat", Icon: SiApachetomcat, color: "#F8DC75" },
  ]},
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Tech Stack" title="Tools I work |with daily"
      description="A versatile toolkit spanning the entire stack — from pixels to production.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-40"
              style={{ background: "radial-gradient(circle,#3B82F6,transparent)" }} />
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {g.title}
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {g.skills.map((s) => (
                <div key={s.name} className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.07]">
                  <s.Icon size={20} color={s.color} />
                  <span className="text-sm font-medium">{s.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}