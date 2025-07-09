import Link from "next/link";
import { HeartPulse, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <HeartPulse className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold">Dr Erfan</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Leading colorectal care with advanced laser technology.
            </p>
            <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
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
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Medical Lane, Health City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@drerfan.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Clinic Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                <li>Saturday: 10:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dr Erfan Colorectal Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
