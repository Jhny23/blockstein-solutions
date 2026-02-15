"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Contact", href: "#contact" },
    ],
    services: [
      { label: "Brand Strategy", href: "#services" },
      { label: "Distribution", href: "#services" },
      { label: "Performance Marketing", href: "#services" },
      { label: "Growth Engineering", href: "#services" },
    ],
    connect: [
      { label: "Twitter / X", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Email", href: "mailto:hello@blockstein.co" },
    ],
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-muted)] rounded-lg transform rotate-45" />
                <div className="absolute inset-1 bg-[var(--bg-secondary)] rounded-md transform rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-[var(--accent)] font-semibold text-sm">
                  B
                </span>
              </div>
              <span className="text-lg font-medium">Blockstein</span>
            </a>
            <p className="text-sm text-[var(--text-muted)] max-w-xs">
              Strategic growth partner for tech companies and modern brands
              ready to scale with precision.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="label mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors link-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="label mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors link-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect links */}
          <div>
            <h4 className="label mb-6">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors link-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[var(--border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-[var(--text-muted)]">
            &copy; {currentYear} Blockstein Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
            <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
