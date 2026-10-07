import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "./Section";
import awsCloudImage from "../../assets/certification/aws-cloud-practitoner-essential.pdf";
import elevanceSkillsImage from "../../assets/certification/elevanceskills-Cloud-Technology-Training-Certificate.pdf";
import hackathonImage from "../../assets/certification/kcc-noida-hackathon.pdf";
import mentorImage from "../../assets/certification/skillfied-mentor-intership.jpeg";
import ibmCertificateImage from "../../assets/certification/ibm_certificate.jpeg";
import ibmFinalistImage from "../../assets/certification/ibm_fiinalist.jpeg";

const certs = [
  { title: "AWS Cloud Practitioner Essentials", org: "AWS", year: "2025", color: "#FF9900", image: awsCloudImage },
  { title: "Cloud Technology Training", org: "ElevanceSkills", year: "2025", color: "#3B82F6", image: elevanceSkillsImage },
  { title: "KCC Noida Hackathon", org: "Hackathon", year: "2024", color: "#f89820", image: hackathonImage },
  { title: "Skillfied Mentor Internship", org: "Internship", year: "2024", color: "#10B981", image: mentorImage },
  { title: "IBM Expert Labs National Hackathon", org: "Certificate of Excellence", year: "2026", color: "#0F62FE", image: ibmCertificateImage },
  { title: "IBM National Hackathon winner 2026", org: "Coimbatore", year: "2026", color: "#8B5CF6", image: ibmFinalistImage },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications & |achievements">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass group relative overflow-hidden rounded-2xl p-4 transition-transform hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 size-36 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-30"
              style={{ background: c.color }} />
            <div className="flex items-center justify-between">
              <div className="grid size-11 place-items-center rounded-xl" style={{ background: `${c.color}22`, color: c.color }}>
                <Award className="size-5" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold leading-tight">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
            {c.image && (
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/20">
                {c.image.endsWith(".pdf") ? (
                  <a href={c.image} target="_blank" rel="noreferrer" className="block p-4 text-center text-sm text-[#06B6D4] hover:underline">
                    Open certificate PDF
                  </a>
                ) : (
                  <img src={c.image} alt={c.title} className="h-48 w-full object-cover" />
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}