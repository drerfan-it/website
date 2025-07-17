
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AppointmentModal } from "@/components/AppointmentModal";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, ICONS } from "@/lib/i18n";
import type { ElementType } from "react";
import { BookText } from "lucide-react";

const INITIAL_VIDEO_COUNT = 4;

export default function ResourcesPage() {
    const { language } = useLanguage();
    const t = translations[language].resources;
    const [visibleVideos, setVisibleVideos] = useState(INITIAL_VIDEO_COUNT);

    const getIconForResource = (title: string): ElementType => {
        const iconKey = title as keyof typeof ICONS.resources;
        return ICONS.resources[iconKey] || BookText;
    };

    const showMoreVideos = () => {
        setVisibleVideos(t.videoPortfolio.items.length);
    };

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

                <section className="mb-16 sm:mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">{t.videoPortfolio.title}</h2>
                        <p className="mt-4 text-lg text-muted-foreground">{t.videoPortfolio.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.videoPortfolio.items.slice(0, visibleVideos).map((video) => (
                            <div key={video.id} className="aspect-video">
                                <iframe
                                    className="w-full h-full rounded-lg shadow-lg"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        ))}
                    </div>
                    {visibleVideos < t.videoPortfolio.items.length && (
                        <div className="text-center mt-12">
                            <Button onClick={showMoreVideos} size="lg">
                                {t.videoPortfolio.seeMore}
                            </Button>
                        </div>
                    )}
                </section>

                <section className="mb-16 sm:mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">{t.faq.title}</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                           {t.faq.subtitle}
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        {t.faq.items.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-bold text-lg">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                <section className="mb-16 sm:mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">{t.guides.title}</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            {t.guides.subtitle}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.guides.items.map((resource) => {
                            const ResourceIcon = getIconForResource(resource.title);
                            return (
                            <Card key={resource.title} className="text-center flex flex-col">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                                       <ResourceIcon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>{resource.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <p className="text-muted-foreground flex-grow">{resource.description}</p>
                                    <Button asChild className="mt-4 w-full">
                                        <a href={resource.link} target="_blank" rel="noopener noreferrer">{t.guides.button}</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        )})}
                    </div>
                </section>

                <section className="bg-secondary rounded-lg p-8 md:p-12 text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">{t.cta.title}</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t.cta.subtitle}</p>
                    <div className="mt-8">
                      <AppointmentModal>
                        <Button size="lg">
                          {t.cta.button}
                        </Button>
                      </AppointmentModal>
                    </div>
                </section>
            </div>
        </div>
    );
}
