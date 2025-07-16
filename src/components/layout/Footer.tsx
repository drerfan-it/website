
"use client";

import Link from "next/link";
import { HeartPulse, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, ICONS } from "@/lib/i18n";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const NAV_LINKS = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/resources",label: t.nav.resources },
    { href: "/contact", label: t.nav.contact },
  ];

  const socialLinks = [
    { href: "https://facebook.com/profdrerfan", icon: ICONS.footer.facebook },
    { href: "https://www.youtube.com/@prof.dr.smaerfan", icon: ICONS.footer.youtube },
  ];

  const clinicHours = [
    t.footer.hours_1,
    t.footer.hours_2,
  ];

  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <HeartPulse className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold">Dr Erfan Colorectal Center</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-4 mt-4">
                {socialLinks.map(link => (
                    <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                        <link.icon />
                    </Link>
                ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">{t.footer.contactUs}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <ICONS.footer.map className="h-4 w-4 text-primary mt-1" />
                <span>{t.contact.info.addressTitle}, {t.contact.info.addressLine1}, {t.contact.info.addressLine2}</span>
              </li>
              <li className="flex items-center gap-2">
                <ICONS.footer.phone className="h-4 w-4 text-primary" />
                <span>01626-555511</span>
              </li>
              <li className="flex items-center gap-2">
                <ICONS.footer.mail className="h-4 w-4 text-primary" />
                <span>contact@drerfan.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">{t.footer.clinicHours}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
                {clinicHours.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <div>
                            <span className="font-semibold text-foreground">{item.days}:</span>
                            <span className="ml-2">{item.time}</span>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
