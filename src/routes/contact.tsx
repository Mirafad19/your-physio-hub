import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GDP Clinic" },
      { name: "description", content: "Get in touch with Gilead Digital Physiotherapy in Lagos. Phone, email or send a message." },
      { property: "og:title", content: "Contact — GDP Clinic" },
      { property: "og:description", content: "Reach Gilead Digital Physiotherapy for bookings, enquiries or partnerships." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-medium text-primary">Contact</p>
          <h1 className="mt-2 font-display text-5xl tracking-tight">We'd love to hear from you.</h1>
          <p className="mt-4 text-muted-foreground">For bookings, pricing enquiries and partnership opportunities, reach us directly or send a message — Dr. Kola Fadahunsi's team will respond within one working day.</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-primary" /><div><div className="font-medium">+234 800 000 0000</div><div className="text-muted-foreground">Mon–Sat, 8am–6pm WAT</div></div></li>
            <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-primary" /><div><div className="font-medium">hello@gtdclinic.ng</div><div className="text-muted-foreground">General enquiries</div></div></li>
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /><div><div className="font-medium">Lekki Phase 1, Lagos</div><div className="text-muted-foreground">By appointment only</div></div></li>
          </ul>
        </div>
        <Card className="border-border/60 p-6 shadow-card">
          <form
            className="space-y-4"
            onSubmit={(e) => { e.preventDefault(); toast.success("Message sent — we'll be in touch shortly."); (e.target as HTMLFormElement).reset(); }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5"><Label htmlFor="name">Full name</Label><Input id="name" required /></div>
              <div className="space-y-1.5"><Label htmlFor="email">Email</Label><Input id="email" type="email" required /></div>
            </div>
            <div className="space-y-1.5"><Label htmlFor="phone">Phone (optional)</Label><Input id="phone" type="tel" /></div>
            <div className="space-y-1.5"><Label htmlFor="message">How can we help?</Label><Textarea id="message" rows={5} required /></div>
            <Button type="submit" className="w-full rounded-full">Send message</Button>
          </form>
        </Card>
      </section>
      <SiteFooter />
    </div>
  );
}
