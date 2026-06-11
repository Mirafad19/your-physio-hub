import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarCheck, Video, LineChart, ShieldCheck, ArrowRight,
  Dumbbell, MessageSquare, Sparkles, CheckCircle2, Quote,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GDP Clinic — Gilead Digital Physiotherapy, Lagos" },
      { name: "description", content: "Expert physiotherapy in Lagos and online across Nigeria. Book a consultation with Dr. Kola Fadahunsi, follow guided exercise plans and recover faster — all in one secure portal." },
      { property: "og:title", content: "GDP Clinic — Gilead Digital Physiotherapy" },
      { property: "og:description", content: "Expert physiotherapy in Lagos and online across Nigeria." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: CalendarCheck, title: "Effortless booking", body: "Pick a session type, see live availability and confirm in under a minute." },
  { icon: Video, title: "HD telehealth", body: "Secure video consultations from anywhere in Nigeria — notes saved automatically." },
  { icon: Dumbbell, title: "Guided exercise plans", body: "Demonstration videos, sets and reps prescribed and tracked weekly." },
  { icon: LineChart, title: "Recovery tracking", body: "Pain, function and compliance charts so your progress is always visible." },
  { icon: MessageSquare, title: "Direct messaging", body: "Ask questions, share photos and get adjustments between sessions." },
  { icon: ShieldCheck, title: "Private by design", body: "Encrypted records — accessible only to you and your clinician." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/40 via-background to-background" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
          <div className="flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit gap-1.5 rounded-full px-3 py-1">
              <Sparkles className="h-3 w-3" /> Telehealth across Nigeria
            </Badge>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Physiotherapy that follows you,<br />
              <span className="text-primary">not the other way around.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Gilead Digital Physiotherapy combines in-person care in Lagos with secure telehealth — so your recovery never has to wait for traffic, distance or schedule.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/login">Book a consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <Link to="/how-it-works">How it works</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-10 text-sm text-muted-foreground">
              <div><div className="font-display text-2xl text-foreground">1,200+</div>patients treated</div>
              <div><div className="font-display text-2xl text-foreground">4.9★</div>average rating</div>
              <div><div className="font-display text-2xl text-foreground">20+ yrs</div>clinical experience</div>
            </div>
          </div>

          {/* Hero card */}
          <Card className="relative overflow-hidden border-border/60 p-6 shadow-elevated">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-hero" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Next session</p>
                <p className="mt-1 font-display text-xl">Follow-up consultation</p>
              </div>
              <Badge className="bg-success text-success-foreground">Confirmed</Badge>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-border bg-muted/40 p-3">
                <p className="text-muted-foreground">Friday</p>
                <p className="font-display text-lg">12 Jun · 10:00</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/40 p-3">
                <p className="text-muted-foreground">Clinician</p>
                <p className="font-display text-lg">Dr. Kola Fadahunsi</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-primary/10 p-2 text-primary"><Dumbbell className="h-4 w-4" /></div>
                  <div><p className="text-sm font-medium">Today's exercises</p><p className="text-xs text-muted-foreground">4 of 6 complete</p></div>
                </div>
                <span className="text-sm font-medium text-success">+12%</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-accent text-accent-foreground p-2"><LineChart className="h-4 w-4" /></div>
                  <div><p className="text-sm font-medium">Pain trend</p><p className="text-xs text-muted-foreground">8 → 3 in 6 weeks</p></div>
                </div>
                <span className="text-sm font-medium text-primary">Improving</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Everything in one portal</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight">Built around the patient journey.</h2>
          <p className="mt-3 text-muted-foreground">From the first complaint to discharge, GDP Clinic keeps every detail organised and every party informed.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="border-border/60 p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.body}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Doctor spotlight */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1.4fr] md:items-center">
          <Card className="overflow-hidden border-border/60 p-8 shadow-card">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-display text-2xl text-primary">KF</div>
              <div>
                <p className="font-display text-xl">Dr. Kola Fadahunsi</p>
                <p className="text-sm text-muted-foreground">MPT · Lead Physiotherapist</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              "My goal is simple — get you moving without pain, and give you the tools to stay that way. Whether we meet in clinic or on a video call, you'll always know exactly what we're working on and why."
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <Badge variant="outline" className="rounded-full">Musculoskeletal</Badge>
              <Badge variant="outline" className="rounded-full">Post-surgical rehab</Badge>
              <Badge variant="outline" className="rounded-full">Sports injury</Badge>
            </div>
          </Card>
          <div>
            <h2 className="font-display text-4xl tracking-tight">A clinician who listens, a plan that adapts.</h2>
            <p className="mt-4 text-muted-foreground">Every patient at GDP Clinic begins with a thorough assessment — history, movement screen, and goals. From there we co-design a recovery plan that fits your life, not the other way around.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Comprehensive musculoskeletal assessment",
                "Hands-on therapy and modern manual techniques",
                "Personalised home exercise programme with video guides",
                "Ongoing messaging support between sessions",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {t}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 rounded-full px-6">
              <Link to="/login">Start your assessment <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl tracking-tight">What our patients say.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { quote: "Six weeks of back pain — gone in a month. The exercise videos kept me consistent.", who: "Adaeze O., Lagos" },
            { quote: "Telehealth was a lifesaver during the rains. Felt like Dr. Kola Fadahunsi was in the room with me.", who: "Emeka A., Abuja" },
            { quote: "Post-ACL recovery on track ahead of schedule. The progress tracking is brilliant.", who: "Fatima Y., Lagos" },
          ].map((t) => (
            <Card key={t.who} className="border-border/60 p-6 shadow-card">
              <Quote className="h-5 w-5 text-primary/40" />
              <p className="mt-3 text-sm leading-relaxed">{t.quote}</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{t.who}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-5xl tracking-tight">Recovery, on your schedule.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Speak with Dr. Kola Fadahunsi about your symptoms and goals — in clinic or online.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/login">Book a consultation <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link to="/contact">Contact the clinic</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
