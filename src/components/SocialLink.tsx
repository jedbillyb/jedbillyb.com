import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
}

const SocialLink = ({ href, label, icon, external = true }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="social-link group"
    >
      <span className="text-muted-foreground transition-colors duration-300 group-hover:text-accent">
        {icon}
      </span>
    </a>
  );
};

export default SocialLink;
