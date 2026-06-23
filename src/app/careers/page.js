import InfoPage, { Section } from "@/components/layout/InfoPage";
import Link from "next/link";

export const metadata = { title: "Careers — Hardvanta" };

const values = [
  {
    icon: "🛠️",
    label: "Makers first",
    desc: "We work for people who build things — students, hobbyists, and engineers.",
  },
  {
    icon: "📦",
    label: "India-first mission",
    desc: "Making quality components accessible across India — that's our core mission.",
  },
  {
    icon: "🔋",
    label: "High ownership",
    desc: "Small team, big impact. Your work directly shapes what we build.",
  },
];

export default function CareersPage() {
  return (
    <InfoPage
      title="Build the future of making in India"
      intro="India's go-to store for robotics, electronics, and DIY engineering. If you want to help people bring their ideas to life — you belong here."
    >
      <Section heading="Why work with us">
        <p>
          We are a growing team passionate about makers and builders. Curiosity
          matters more than credentials here — if you have built something, that
          is your real resume.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.label}
              className="rounded-xl border border-border bg-muted/40 p-4"
            >
              <span className="mb-2 block text-2xl">{v.icon}</span>
              <p className="mb-1 font-semibold text-sm">{v.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section heading="Open positions">
        <div className="rounded-xl border border-dashed border-border px-6 py-10 text-center">
          <p className="text-3xl mb-3">📭</p>
          <p className="font-semibold text-base mb-1">No open roles right now</p>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-5">
            We are not actively hiring at the moment — but you can send us your
            resume for future openings.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send your resume &rarr;
          </Link>
        </div>
      </Section>
    </InfoPage>
  );
}