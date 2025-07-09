import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AppointmentModal } from "@/components/AppointmentModal";
import { FAQS, RESOURCES } from "@/lib/constants";

export default function ResourcesPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
                        Patient Resources
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                        Information and tools to support you throughout your treatment journey.
                    </p>
                </header>

                <section className="mb-16 sm:mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Answers to common questions about our procedures and care.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        {FAQS.map((faq, index) => (
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
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Guides & Downloads</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Downloadable resources to help you prepare and recover.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {RESOURCES.map((resource) => (
                            <Card key={resource.title} className="text-center flex flex-col">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                                       <resource.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>{resource.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <p className="text-muted-foreground flex-grow">{resource.description}</p>
                                    <Button asChild className="mt-4 w-full">
                                        <a href={resource.link} target="_blank" rel="noopener noreferrer">Download PDF</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                
                <section className="bg-secondary rounded-lg p-8 md:p-12 text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Have More Questions?</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">We're here to help. Schedule a consultation to discuss your specific needs and concerns with Prof. Dr. Erfan.</p>
                    <div className="mt-8">
                      <AppointmentModal>
                        <Button size="lg">
                          Book a Consultation
                        </Button>
                      </AppointmentModal>
                    </div>
                </section>
            </div>
        </div>
    );
}
