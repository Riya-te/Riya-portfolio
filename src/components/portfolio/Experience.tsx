import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, MapPin, Calendar } from "lucide-react";

type Role = {
  role: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
  accent: string;
};

const timeline: Role[] = [
   {
  role: "AWS Cloud & DevOps Intern",
  company: "Elevance Skills",
  duration: "Jun 2026 – july 2026",
  location: "Remote",
  accent: "#F59E0B",
  achievements: [
    "Deployed and managed a cloud-native e-commerce application on AWS using EC2, CloudFront, and Application Load Balancer.",
    "Configured Route 53 custom domain, ACM SSL certificates, HTTPS enforcement, and DNS routing for secure application access.",
    "Implemented AWS WAF with managed security rules and designed a failover architecture using CloudFront-hosted maintenance pages.",
    "Provisioned and automated AWS infrastructure (VPC, EC2, EKS, S3, IAM) using Terraform and Infrastructure as Code.",
    "Built CI/CD pipelines with Jenkins and GitHub Actions, containerized applications using Docker, and deployed workloads to Kubernetes with Helm."
  ],
},

  {
    role: "DevOps Engineer Intern",
    company: "SkilledField Mentors",
    duration: "May 2026 – july",
    location: "Remote",
    accent: "#3B82F6",
    achievements: [
      "Building and maintaining CI/CD pipelines with Jenkins and GitHub Actions.",
      "Provisioning AWS infrastructure (EC2, VPC, EKS, S3) with Terraform.",
      "Containerising services with Docker and deploying to Kubernetes via Helm.",
      "Setting up monitoring & alerting with Prometheus and Grafana.",
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "Unwrite",
    duration: "November 2025 – January 2026",
    location: "Remote",
    accent: "#8B5CF6",
    achievements: [
      "Developed responsive UI components using React and Tailwind CSS.",
      "Built REST APIs with Node.js and Express integrated with MongoDB.",
      "Implemented authentication, role-based access, and reusable hooks.",
      "Collaborated using Git/GitHub workflows and code reviews.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've |worked"
      description="Hands-on internships shipping real DevOps and full-stack work.">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-[#06B6D4] sm:left-6" />
        <div className="space-y-8">
          {timeline.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-14 sm:pl-20"
            >
              <span
                className="absolute left-4 top-6 grid size-4 -translate-x-1/2 place-items-center rounded-full sm:left-6"
                style={{ background: t.accent, boxShadow: `0 0 16px ${t.accent}` }}
              />
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{t.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium" style={{ color: t.accent }}>
                      <Briefcase className="size-3.5" /> {t.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-xs text-muted-foreground sm:text-right">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="size-3" />{t.duration}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="size-3" />{t.location}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {t.achievements.map((a) => (
                    <li key={a} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: t.accent }} />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}