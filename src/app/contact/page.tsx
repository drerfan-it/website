
"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, ICONS } from "@/lib/i18n";

export default function ContactPage() {
    const { language } = useLanguage();
    const t = translations[language].contact;

    const MailIcon = ICONS.contact.mail;
    const PhoneIcon = ICONS.contact.phone;
    const MapPinIcon = ICONS.contact.map;
    const ClockIcon = ICONS.contact.clock;

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
                        {t.title}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                        {t.subtitle}
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div className="bg-card p-8 rounded-lg shadow-lg">
                        <h2 className="font-headline text-2xl font-bold mb-6">{t.form.title}</h2>
                        <p className="text-muted-foreground mb-6">
                           {t.form.subtitle}
                        </p>
                        <ContactForm />
                    </div>
                    
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-headline text-2xl font-bold mb-4">{t.info.title}</h2>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-4">
                                    <PhoneIcon className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <span>{t.info.appointment}</span>
                                        <p className="font-semibold">01626-555511</p>
                                        <p className="font-semibold">01865-555500</p>
                                        <p className="font-semibold">01865-555511</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <MailIcon className="h-6 w-6 text-primary" />
                                    <span>contact@drerfan.com</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MapPinIcon className="h-6 w-6 text-primary mt-1" />
                                    <span>
                                        <strong>{t.info.addressTitle}</strong><br/>
                                        {t.info.addressLine1}<br/>
                                        {t.info.addressLine2}
                                    </span>
                                </li>
                            </ul>
                        </div>
                         <div>
                            <h2 className="font-headline text-2xl font-bold mb-4">{t.hours.title}</h2>
                            <ul className="space-y-3 text-lg text-muted-foreground">
                                <li className="flex items-center gap-4">
                                    <ClockIcon className="h-6 w-6 text-primary" />
                                    <span>{t.hours.days1}: {t.hours.time1}</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <ClockIcon className="h-6 w-6 text-primary" />
                                    <span>{t.hours.days2}: {t.hours.time2}</span>
                                </li>
                                 <li className="flex items-center gap-4">
                                    <ClockIcon className="h-6 w-6 text-primary" />
                                    <span>{t.hours.days3}: {t.hours.time3}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section className="mt-16 sm:mt-24">
                    <h2 className="font-headline text-center text-3xl md:text-4xl font-bold mb-8">{t.location.title}</h2>
                    <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
                        <a href="https://maps.google.com/?q=City+Tower,44/7+Panthapath,Dhaka" target="_blank" rel="noopener noreferrer">
                            <Image 
                                src="https://placehold.co/1200x600.png"
                                alt="Map to Dr Erfan Colorectal Center"
                                data-ai-hint="city map Dhaka"
                                width={1200}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
