import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logo from "@/assets/gtd-logo.png";

const nav = [
  { to: "/platform", label: "Platform" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/clinicians", label: "For clinicians" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="GDP Clinic" width={32} height={32} className="h-8 w-8" />
          <div className="leading-tight">
            <div className="font-display text-base font-semibold tracking-tight">GDP Clinic</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Gilead Digital Physiotherapy</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-foreground font-medium" }}
              className="hover:text-foreground transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm"><Link to="/login">Sign in</Link></Button>
          <Button asChild size="sm"><Link to="/login">Book a consult</Link></Button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" width={20} height={20} className="h-5 w-5" />
          <p>© {new Date().getFullYear()} Gilead Digital Physiotherapy, Lagos.</p>
        </div>
        <div className="flex gap-6">
          <Link to="/about" className="hover:text-foreground">About</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
          <a href="#" className="hover:text-foreground">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
