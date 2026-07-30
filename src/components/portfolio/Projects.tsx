import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, ChevronDown } from "lucide-react";
import evershopImage from "../../assets/projects/evershop.png";
import wanderlustImage from "../../assets/projects/wanderlust.png";
import netflixImage from "../../assets/projects/netflix.png";
import costOptimizerImage from "../../assets/projects/aws-cost-optimizer.png";
import bookManagementImage from "../../assets/projects/book-management.png";
import gamingImage from "../../assets/projects/gaming.png";

type Project = {
  title: string;
  blurb: string;
  details: string;
  tech: string[];
  gradient: string;
  image?: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [

    {
  title: "Evershop Cloud Deployment",
  blurb: "Enterprise-style e-commerce application deployed on AWS with secure networking, custom domain, and cloud infrastructure.",
  details: "Deployed the Evershop application on AWS using EC2, Application Load Balancer, CloudFront, and Route 53 with a custom domain. Configured ACM SSL certificates for end-to-end HTTPS, integrated AWS WAF with managed security rules, and implemented DNS failover to a CloudFront-hosted maintenance site for improved availability. Automated infrastructure provisioning with Terraform and followed cloud architecture best practices for scalability, security, and reliability.",
  tech: ["AWS", "EC2", "Route 53", "CloudFront", "Application Load Balancer", "ACM", "AWS WAF", "Terraform", "Docker"],
  gradient: "linear-gradient(135deg,#F59E0B,#EF4444)",
  image: evershopImage,
  github: "https://github.com/Riya-te/aws-evershop-cloud-deployment-intership-project.git",
  demo: "https://evershop.riyaa.xyz"

  },
  {
    title: "Wanderlust Mega Project",
    blurb: "Production-style travel listing platform deployed end-to-end on AWS with full CI/CD and observability.",
    details: "Node.js + Express + MongoDB app containerised with Docker, deployed to Kubernetes on AWS EKS via Helm. Jenkins multi-stage pipeline handles build, SonarQube quality gates, Trivy image scans, and ArgoCD GitOps deployment. Prometheus + Grafana stack monitors cluster health and SLOs.",
    tech: ["AWS", "EKS", "Docker", "Kubernetes", "Jenkins", "ArgoCD", "Terraform", "Prometheus", "Grafana"],
    gradient: "linear-gradient(135deg,#3B82F6,#06B6D4)",
    image: wanderlustImage,
    github: "https://github.com/Riya-te/Wanderlust-Mega-Project-k8s.git",
  },
  {
    title: "Netflix DevSecOps Project",
    blurb: "Production-grade DevSecOps pipeline for a Netflix-clone with security scanning baked into every stage.",
    details: "Jenkins pipeline runs SonarQube quality gates, Trivy image scans, OWASP dependency checks, then deploys to Kubernetes with ArgoCD. Monitoring via Prometheus & Grafana, secrets managed via Kubernetes Secrets + IAM.",
    tech: ["Docker", "Jenkins", "SonarQube", "Trivy", "Kubernetes", "ArgoCD"],
    gradient: "linear-gradient(135deg,#ef4444,#8B5CF6)",
    image: netflixImage,
    github: "https://github.com/Riya-te",
  },
  {
  title: "AWS Cost Optimization System",
  blurb: "Cloud cost monitoring and optimization solution that identifies underutilized AWS resources and automates cost-saving recommendations.",
  details: "Built an AWS cost optimization platform using Python (Boto3), AWS Lambda, EventBridge, SNS, and CloudWatch to analyze EC2 instances, EBS volumes, Elastic IPs, and RDS resources. Automated scheduled resource scans, generated optimization reports, and sent email notifications for idle or underutilized resources, helping improve cloud cost efficiency through automation and FinOps best practices.",
  tech: [
    "AWS","Python","Boto3","Lambda","EventBridge","CloudWatch","SNS","EC2","EBS","RDS","IAM"
  ],
  gradient: "linear-gradient(135deg,#10B981,#3B82F6)",
  image: costOptimizerImage,
  github: "https://github.com/Riya-te/aws-cost-optimization"
},
  {
    title: "AWS Book Management Platform",
    blurb: "Full-stack platform for librarians to manage catalog, loans, and members with role-based access.",
    details: "React + Node.js + MySQL on AWS EC2 behind an Application Load Balancer. JWT auth, file uploads to S3, CloudWatch alarms on API errors, and IAM-scoped credentials.",
    tech: ["React", "Node.js", "MySQL", "AWS EC2", "S3", "IAM"],
    gradient: "linear-gradient(135deg,#06B6D4,#3B82F6)",
    image: bookManagementImage,
    github: "https://github.com/Riya-te",
  },

{
  title: "Cloud Native Gaming Platform",
  blurb: "Cloud-native multiplayer gaming platform built with modern DevOps practices and automated deployment on AWS.",
  details: "Developed and deployed a cloud-native gaming platform using Docker and Kubernetes on AWS. Automated infrastructure provisioning with Terraform and implemented CI/CD pipelines using Jenkins and GitHub Actions. Integrated monitoring with Prometheus and Grafana for real-time observability, enabling scalable, reliable, and production-ready application deployment.",
  tech: [
    "AWS","Docker","Kubernetes","Terraform","Jenkins", "GitHub Actions", "Prometheus", "Grafana"
  ],
  gradient: "linear-gradient(135deg,#8B5CF6,#3B82F6)",
  image: gamingImage,
  github: "https://github.com/Riya-te/cloud-native-gaming-platform-v2"
},
];

const _legacyProjects: Project[] = [
  {
    title: "End-to-End DevOps Pipeline",
    blurb: "Complete CI/CD pipeline provisioning AWS infra and deploying to Kubernetes with full observability.",
    details: "Provisioned VPC, EKS, and RDS via Terraform. Jenkins builds Docker images, runs tests, pushes to ECR, and deploys with Helm. Prometheus & Grafana monitor cluster health, app latency, and SLO burn-rates.",
    tech: ["AWS", "Docker", "Jenkins", "Terraform", "Kubernetes", "Prometheus", "Grafana"],
    gradient: "linear-gradient(135deg,#3B82F6,#8B5CF6)",
  },
  {
    title: "Book Management Platform",
    blurb: "Full-stack platform for librarians to manage catalog, loans, and members with role-based access.",
    details: "React + Node.js + MySQL on AWS EC2 behind an Application Load Balancer. JWT auth, file uploads to S3, and CloudWatch alarms on API errors.",
    tech: ["React", "Node.js", "MySQL", "AWS"],
    gradient: "linear-gradient(135deg,#06B6D4,#3B82F6)",
  },
 
  {
    title: "Netflix DevSecOps Project",
    blurb: "Production-grade DevSecOps pipeline for a Netflix-clone with security scanning baked into every stage.",
    details: "Jenkins pipeline runs SonarQube quality gates, Trivy image scans, OWASP dependency checks, then deploys to Kubernetes with ArgoCD.",
    tech: ["Docker", "Jenkins", "SonarQube", "Trivy", "Kubernetes"],
    gradient: "linear-gradient(135deg,#ef4444,#8B5CF6)",
  },
 {
  title: "AWS Cost Optimization System",
  blurb: "Cloud cost monitoring and optimization solution that identifies underutilized AWS resources and automates cost-saving recommendations.",
  details: "Built an AWS cost optimization platform using Python (Boto3), AWS Lambda, EventBridge, SNS, and CloudWatch to analyze EC2 instances, EBS volumes, Elastic IPs, and RDS resources. Automated scheduled resource scans, generated optimization reports, and sent email notifications for idle or underutilized resources, helping improve cloud cost efficiency through automation and FinOps best practices.",
  tech: [
    "AWS","Python","Boto3","Lambda","EventBridge","CloudWatch","SNS","EC2","EBS","RDS","IAM"
  ],
  gradient: "linear-gradient(135deg,#10B981,#3B82F6)",
  github: "https://github.com/Riya-te/aws-cost-optimization"
},
  {
  title: "Cloud Native Gaming Platform",
  blurb: "Cloud-native multiplayer gaming platform built with modern DevOps practices and automated deployment on AWS.",
  details: "Developed and deployed a cloud-native gaming platform using Docker and Kubernetes on AWS. Automated infrastructure provisioning with Terraform and implemented CI/CD pipelines using Jenkins and GitHub Actions. Integrated monitoring with Prometheus and Grafana for real-time observability, enabling scalable, reliable, and production-ready application deployment.",
  tech: [
    "AWS","Docker","Kubernetes","Terraform","Jenkins", "GitHub Actions", "Prometheus", "Grafana"
  ],
  gradient: "linear-gradient(135deg,#8B5CF6,#3B82F6)",
  github: "https://github.com/Riya-te/cloud-native-gaming-platform-v2"
},
];
void _legacyProjects;

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      className="glass group relative flex flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-2"
    >
      {/* Cover */}
      <div className="relative h-44 overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
          {p.image ? (
            <img src={p.image} alt={`${p.title} preview`} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full" style={{ background: p.gradient }} />
          )}
        </div>
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 font-mono text-xs text-white/80">/{p.title.toLowerCase().replace(/\s+/g, "-")}</div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-display text-xl font-semibold">{p.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span key={t} className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="border-t border-white/10 pt-4 text-sm text-muted-foreground">{p.details}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex gap-2">
              <a href={p.github ?? "https://github.com"} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-white/10">
              <ExternalLink className="size-3.5" /> Code
            </a>
            {p.demo ? (
              <a href={p.demo} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white"
                style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)" }}>
                <ExternalLink className="size-3.5" /> Live
              </a>
            ) : null}
          </div>
          <button onClick={() => setOpen(!open)} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
            {open ? "Less" : "More"}
            <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects I've |shipped"
      description="A mix of cloud infrastructure, full-stack platforms, and a touch of machine learning.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}