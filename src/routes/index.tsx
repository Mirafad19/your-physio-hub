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

          {/* Hero card — what we treat */}
          <Card className="relative overflow-hidden border-border/60 p-6 shadow-elevated">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-hero" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">What we treat</p>
                <p className="mt-1 font-display text-xl">Conditions we see every week</p>
              </div>
              <Badge variant="outline" className="border-success/40 text-success">In clinic & online</Badge>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
              {[
                "Lower back & sciatica",
                "Neck & shoulder pain",
                "Post-surgery rehab",
                "Sports & ACL recovery",
                "Knee & hip pain",
                "Stroke & neuro rehab",
              ].map((c) => (
                <div key={c} className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="truncate">{c}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-accent/30 p-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="uppercase tracking-wider">Typical recovery window</span>
                <span className="text-success">87% report improvement</span>
              </div>
              <div className="mt-3 flex items-end gap-1.5">
                {[28, 42, 58, 70, 80, 88].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-primary" style={{ height: `${h * 0.5 + 12}px` }} />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                <span>Wk 1</span><span>Wk 3</span><span>Wk 6</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4 text-center">
              <div>
                <p className="font-display text-lg text-foreground">48h</p>
                <p className="text-[11px] text-muted-foreground">Avg. booking lead time</p>
              </div>
              <div>
                <p className="font-display text-lg text-foreground">₦0</p>
                <p className="text-[11px] text-muted-foreground">To create an account</p>
              </div>
              <div>
                <p className="font-display text-lg text-foreground">36</p>
                <p className="text-[11px] text-muted-foreground">States served online</p>
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
