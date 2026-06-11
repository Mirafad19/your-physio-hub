import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { Stethoscope, ClipboardList, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/clinicians")({
  head: () => ({
    meta: [
      { title: "For clinicians — GDP Clinic" },
      { name: "description", content: "Tools built for physiotherapists: caseload management, telehealth, exercise prescription and reporting." },
      { property: "og:title", content: "For clinicians — GDP Clinic" },
      { property: "og:description", content: "Run your physiotherapy practice with modern, secure tools." },
    ],
    links: [{ rel: "canonical", href: "/clinicians" }],
  }),
  component: Clinicians,
});

function Clinicians() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium text-primary">For clinicians</p>
        <h1 className="mt-2 font-display text-5xl tracking-tight">Spend more time treating, less time on admin.</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">GDP Clinic gives physiotherapists a single workspace for caseload, scheduling, telehealth and clinical documentation.</p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { icon: Users, title: "Caseload at a glance", body: "Active patients, compliance scores and upcoming reviews on one screen." },
            { icon: ClipboardList, title: "Plan builder", body: "Drag-and-drop exercises into structured phases and goals — share instantly." },
            { icon: Stethoscope, title: "Built for telehealth", body: "Run secure video sessions with notes saved straight to the patient record." },
          ].map((c) => (
            <Card key={c.title} className="border-border/60 p-6 shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><c.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg">{c.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link to="/login">Open the clinician portal <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
