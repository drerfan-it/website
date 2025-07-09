import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
                        Get In Touch
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                        We're here to answer your questions and help you schedule a consultation.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div className="bg-card p-8 rounded-lg shadow-lg">
                        <h2 className="font-headline text-2xl font-bold mb-6">Send Us a Message</h2>
                        <p className="text-muted-foreground mb-6">
                           Please use this form for general inquiries only. For medical questions, please book an appointment. The form is HIPAA compliant for your privacy.
                        </p>
                        <ContactForm />
                    </div>
                    
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-headline text-2xl font-bold mb-4">Contact Information</h2>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <span>For Appointment:</span>
                                        <p className="font-semibold">01626-555511</p>
                                        <p className="font-semibold">01865-555500</p>
                                        <p className="font-semibold">01865-555511</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                    <span>contact@drerfan.com</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <span>
                                        <strong>Dr. Erfan Colorectal Center</strong><br/>
                                        City Tower, 44/7 Panthapath<br/>
                                        Dhaka-1205, Bangladesh
                                    </span>
                                </li>
                            </ul>
                        </div>
                         <div>
                            <h2 className="font-headline text-2xl font-bold mb-4">Clinic Hours</h2>
                            <ul className="space-y-3 text-lg text-muted-foreground">
                                <li className="flex items-center gap-4">
                                    <Clock className="h-6 w-6 text-primary" />
                                    <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
                                </li>
                                 <li className="flex items-center gap-4">
                                    <Clock className="h-6 w-6 text-primary" />
                                    <span>Saturday: 10:00 AM - 2:00 PM</span>
                                </li>
                                 <li className="flex items-center gap-4">
                                    <Clock className="h-6 w-6 text-primary" />
                                    <span>Sunday: Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section className="mt-16 sm:mt-24">
                    <h2 className="font-headline text-center text-3xl md:text-4xl font-bold mb-8">Our Location</h2>
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
