import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GTD Clinic" },
      { name: "description", content: "Gilead Digital Therapy Clinic is a Lagos-based physiotherapy practice combining hands-on care with modern telehealth." },
      { property: "og:title", content: "About — GTD Clinic" },
      { property: "og:description", content: "A Lagos-based physiotherapy clinic with a digital-first approach." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm font-medium text-primary">About</p>
        <h1 className="mt-2 font-display text-5xl tracking-tight">Modern physiotherapy, rooted in Lagos.</h1>
        <p className="mt-6 text-lg text-muted-foreground">Gilead Digital Therapy Clinic was founded to make excellent physiotherapy care genuinely accessible — across Lagos and the rest of Nigeria. We blend evidence-based, hands-on treatment with a digital platform that keeps care going between visits.</p>

        <Card className="mt-10 border-border/60 p-8 shadow-card">
          <h2 className="font-display text-2xl">Led by Dr. Kola Fadahunsi</h2>
          <p className="mt-3 text-muted-foreground">Dr. Fadahunsi is a licensed physiotherapist with over a decade of clinical experience in musculoskeletal, post-surgical and sports rehabilitation. He founded GTD Clinic to bring high-quality care to patients who couldn't always make it into a traditional practice.</p>
        </Card>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { k: "Mission", v: "Help every patient move better, with less pain, faster." },
            { k: "Approach", v: "Evidence-based, personalised, technology-supported." },
            { k: "Reach", v: "In-clinic in Lagos; telehealth nationwide." },
          ].map((b) => (
            <Card key={b.k} className="border-border/60 p-5 shadow-card">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{b.k}</p>
              <p className="mt-2 text-sm">{b.v}</p>
            </Card>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
