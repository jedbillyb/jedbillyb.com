import { ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
];

const Navigation = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-center">
        <ul className="flex items-center gap-8 bg-card/30 backdrop-blur-md border border-border/30 rounded-full px-8 py-3">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export const ScrollIndicator = () => (
  <button
    onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
    className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
    aria-label="Scroll down"
  >
    <span className="text-sm font-medium tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
      Explore
    </span>
    <div className="flex flex-col items-center animate-bounce">
      <ChevronDown className="w-5 h-5" />
      <ChevronDown className="w-5 h-5 -mt-3 opacity-50" />
    </div>
  </button>
);

export default Navigation;
