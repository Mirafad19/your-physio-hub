import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { CalendarCheck, Video, Dumbbell, MessageSquare, LineChart, ShieldCheck, FileText, CreditCard, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — GTD Clinic" },
      { name: "description", content: "Everything Gilead Digital Therapy Clinic offers: booking, telehealth, exercise prescription, progress tracking, secure messaging and more." },
      { property: "og:title", content: "Platform — GTD Clinic" },
      { property: "og:description", content: "Telehealth, exercises, messaging and progress tracking in one secure portal." },
    ],
    links: [{ rel: "canonical", href: "/platform" }],
  }),
  component: PlatformPage,
});

const items = [
  { icon: CalendarCheck, title: "Online booking", body: "Real-time availability, instant confirmations and reminders by email and SMS." },
  { icon: Video, title: "Secure telehealth", body: "HD video calls with screen sharing and built-in session notes." },
  { icon: Dumbbell, title: "Exercise prescription", body: "Video-demonstrated home plans with sets, reps and weekly check-ins." },
  { icon: LineChart, title: "Progress tracking", body: "Pain, function and compliance charts visible to you and your clinician." },
  { icon: MessageSquare, title: "Secure messaging", body: "Between-session support — share photos, ask questions, get adjustments." },
  { icon: FileText, title: "Treatment plans", body: "Clear goals, phases and review dates so you always know what's next." },
  { icon: CreditCard, title: "Easy payments", body: "Card, bank transfer and USSD — handled inside your patient portal." },
  { icon: ShieldCheck, title: "Private by design", body: "Encrypted records accessible only to you and your assigned clinician." },
];

function PlatformPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium text-primary">Platform</p>
        <h1 className="mt-2 font-display text-5xl tracking-tight">A full physiotherapy clinic, in your pocket.</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">The GTD Clinic patient portal brings every part of your recovery into one secure place — booking, treatment, messaging, payments and progress.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <Card key={i.title} className="border-border/60 p-6 shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><i.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg">{i.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{i.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Button asChild size="lg" className="rounded-full px-6">
            <Link to="/login">Open the portal <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
