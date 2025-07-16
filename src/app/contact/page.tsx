
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
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.24173725987484!2d90.38477955540634!3d23.75209337373126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9005c035647%3A0xb0d030a718395e4a!2sDr%20Erfan%20Colorectal%20Center!5e0!3m2!1sen!2sbd!4v1752668670716!5m2!1sen!2sbd" 
                            className="w-full h-full"
                            style={{border:0}} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </section>
            </div>
        </div>
    );
}
