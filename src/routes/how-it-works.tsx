import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — GDP Clinic" },
      { name: "description", content: "From registration to discharge — the four-step GDP Clinic recovery journey." },
      { property: "og:title", content: "How it works — GDP Clinic" },
      { property: "og:description", content: "Register, book, consult and recover with Gilead Digital Physiotherapy." },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorks,
});

const steps = [
  { n: "01", title: "Register", body: "Create your account and tell us about your history, symptoms and goals." },
  { n: "02", title: "Book a session", body: "Pick from initial consult, follow-up, exercise review or post-op rehab — in clinic or online." },
  { n: "03", title: "Consult & plan", body: "Meet Dr. Kola Fadahunsi for a full assessment. Leave with a personalised treatment plan." },
  { n: "04", title: "Recover, supported", body: "Follow your exercises, message between sessions and track progress every week." },
];

function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium text-primary">How it works</p>
        <h1 className="mt-2 font-display text-5xl tracking-tight">Care in four clear steps.</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">No surprises, no guesswork. Here's what to expect from your first visit to discharge.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border/60 bg-card p-8 shadow-card">
              <span className="font-display text-5xl text-primary/30">{s.n}</span>
              <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link to="/login">Get started <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
