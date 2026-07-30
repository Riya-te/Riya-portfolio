import { useState } from "react";
import { Section } from "./Section";
import { ExternalLink, GitBranch } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const GH_USER = "Riya-te";

const topLanguages = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "AWS",
  "Docker",
  "Terraform",
];

export function GitHubSection() {
  const [statsError, setStatsError] = useState(false);
  const [streakError, setStreakError] = useState(false);
  

  return (
    <Section id="github" eyebrow="Open Source" title="On |GitHub"
      description="A live snapshot of my GitHub profile, stats, top languages, and contribution streak.">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="glass rounded-2xl p-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ExternalLink className="size-5" />
              <span className="font-display font-semibold">@{GH_USER}</span>
            </div>
            <a href={`https://github.com/${GH_USER}`} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#06B6D4] hover:underline">
              View profile <ExternalLink className="size-3" />
            </a>
          </div>

          {!statsError ? (
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GH_USER}&show_icons=true&hide_border=true&bg_color=050816&title_color=06B6D4&icon_color=8B5CF6&text_color=ffffff&count_private=true`}
              alt={`${GH_USER} GitHub stats`}
              className="w-full rounded-xl"
              loading="lazy"
              onError={() => setStatsError(true)}
            />
          ) : (
            <img
              src={`https://ghchart.rshah.org/06B6D4/${GH_USER}`}
              alt={`${GH_USER} contribution chart`}
              className="w-full rounded-xl"
              loading="lazy"
              onError={() => setStatsError(false)}
            />
          )}

          {!streakError ? (
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GH_USER}&theme=transparent&hide_border=true&ring=06B6D4&fire=8B5CF6&currStreakLabel=06B6D4`}
              alt={`${GH_USER} GitHub streak`}
              className="mt-4 w-full rounded-xl"
              loading="lazy"
              onError={() => setStreakError(true)}
            />
          ) : (
            <div className="mt-4 flex min-h-24 items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/5 p-4 text-center text-sm text-muted-foreground">
              Streak image unavailable. <a href={`https://github.com/${GH_USER}`} target="_blank" rel="noreferrer" className="ml-1 text-[#06B6D4] hover:underline">View streak</a>
            </div>
          )}
        </div>

        <div className="glass flex flex-col rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-3xl bg-[#0f172a] text-[#38bdf8] shadow-lg shadow-[#0f172a]/40">
              <GitBranch className="size-7" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold">Top Languages</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                GitHub language stats may be unavailable, so here’s a snapshot of my core stack instead.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {topLanguages.map((language) => (
              <span key={language} className="rounded-full bg-white/5 px-4 py-3 text-sm font-medium text-muted-foreground">
                {language}
              </span>
            ))}
          </div>

          <a
            href={`https://github.com/${GH_USER}`}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg,#3B82F6,#8B5CF6)" }}
          >
            <ExternalLink className="size-4" /> Visit GitHub Profile
          </a>
          <a
            href="https://leetcode.com/u/Riya_kumari10/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl border border-[#F59E0B] bg-[#f8f0d9] px-4 py-3 text-sm font-semibold text-[#78350f] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#f59e0b]/20"
          >
            <SiLeetcode className="size-5" />
            LeetCode Profile
          </a>
        </div>
      </div>
{/* 
      <div className="glass mt-6 overflow-x-auto rounded-2xl p-6">
        <h3 className="mb-4 font-display font-semibold">Contribution Activity</h3>
        {!chartError ? (
          <img
            src={`https://ghchart.rshah.org/06B6D4/${GH_USER}`}
            alt={`${GH_USER} contribution chart`}
            className="w-full min-w-[600px]"
            loading="lazy"
            onError={() => setChartError(true)}
          />
        ) : (
          <div className="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/5 p-6 text-center text-sm text-muted-foreground">
            Contribution chart unavailable right now. <a href={`https://github.com/${GH_USER}`} target="_blank" rel="noreferrer" className="ml-1 text-[#06B6D4] hover:underline">Visit GitHub</a>
          </div>
        )}
      </div> */}
    </Section>
  );
}