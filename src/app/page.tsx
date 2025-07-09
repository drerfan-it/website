import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Stethoscope, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentModal } from "@/components/AppointmentModal";
import Link from "next/link";
import { STATS, CONDITIONS_TREATED, WHY_CHOOSE_US } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <ConditionsSection />
      <WhyChooseUsSection />
      <ServicesPreviewSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A modern and clean medical clinic interior"
        data-ai-hint="medical clinic interior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div className="max-w-3xl px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Advanced Colorectal Care by Prof. Dr. S. M. A. Erfan
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Pioneer in painless, bloodless laser surgery for Piles, Fistula, Fissure & Pilonidal Sinus in Bangladesh.
          </p>
          <div className="mt-8">
            <AppointmentModal>
              <Button size="lg">
                Book an Appointment
              </Button>
            </AppointmentModal>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <Card key={stat.label} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConditionsSection() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Conditions We Treat</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Specialized laser treatments for a wide range of colorectal conditions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONDITIONS_TREATED.map((condition) => (
            <Card key={condition} className="bg-card">
              <CardContent className="p-6 flex items-center gap-4">
                <HeartPulse className="h-8 w-8 text-primary flex-shrink-0" />
                <h3 className="text-lg font-semibold">{condition}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get world-class colorectal & laser treatment right here in Bangladesh.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {WHY_CHOOSE_US.map((item) => (
            <div key={item.title} className="flex flex-col items-center p-4">
              <div className="bg-primary/10 rounded-full p-4 mb-4">
                <item.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreviewSection() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Advanced laser treatment equipment"
              data-ai-hint="laser equipment"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">World-Class Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer state-of-the-art diagnostic and therapeutic services with a focus on minimally invasive laser procedures for Piles, Fistula, Fissure and more.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <Stethoscope className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>
                  <h4 className="font-bold">Advanced Laser Surgery</h4>
                  <p className="text-muted-foreground">Painless, bloodless solutions with faster recovery times.</p>
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>
                  <h4 className="font-bold">Comprehensive Diagnosis</h4>
                  <p className="text-muted-foreground">Accurate diagnosis using the latest technology to guide the most effective treatment plan.</p>
                </span>
              </li>
            </ul>
            <Button asChild size="lg" className="mt-8">
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
