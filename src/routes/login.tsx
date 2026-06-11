import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Activity, UserRound, Stethoscope, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — GDP Clinic" },
      { name: "description", content: "Sign in to your GDP Clinic portal as a patient, physiotherapist or administrator." },
    ],
  }),
  component: LoginPage,
});

const roles = [
  { to: "/patient", title: "Patient", body: "Book appointments, follow plans, message your physio.", icon: UserRound },
  { to: "/physio", title: "Physiotherapist", body: "Manage caseload, run telehealth and prescribe exercises.", icon: Stethoscope },
  { to: "/admin", title: "Administrator", body: "Oversee revenue, users and platform analytics.", icon: ShieldCheck },
];

function LoginPage() {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Left brand panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-hero p-10 text-primary-foreground md:flex">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
            <Activity className="h-5 w-5" />
          </div>
          <span className="font-display text-xl">GDP Clinic</span>
        </Link>
        <div className="space-y-4">
          <h1 className="font-display text-4xl leading-tight">Welcome back.<br/>Your recovery, organised.</h1>
          <p className="max-w-md text-white/80">A secure clinical workspace for patients, physiotherapists and administrators across Nigeria.</p>
        </div>
        <p className="text-xs text-white/60">© 2026 Gilead Digital Physiotherapy</p>
      </div>

      {/* Right sign-in */}
      <div className="flex items-center justify-center bg-background p-6">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Activity className="h-4 w-4" />
            </div>
            <span className="font-display text-lg">GDP Clinic</span>
          </div>

          <h2 className="font-display text-3xl tracking-tight">Sign in</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">Choose a portal below to explore the prototype.</p>

          <Card className="mt-6 space-y-4 p-5 shadow-card">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" defaultValue="demo@kinetix.ng" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pw">Password</Label>
              <Input id="pw" type="password" defaultValue="••••••••" />
            </div>
          </Card>

          <p className="mt-5 mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Continue as</p>
          <div className="grid gap-2">
            {roles.map((r) => (
              <Button key={r.to} asChild variant="outline" className="h-auto justify-start gap-3 py-3 text-left">
                <Link to={r.to}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <r.icon className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">{r.title}</span>
                    <span className="text-xs text-muted-foreground">{r.body}</span>
                  </div>
                </Link>
              </Button>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            New here? <Link to="/login" className="font-medium text-primary hover:underline">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
