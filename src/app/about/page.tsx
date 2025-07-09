import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppointmentModal } from "@/components/AppointmentModal";
import { MILESTONES } from "@/lib/constants";
import { Check, Star, Medal } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
            Meet Dr. Erfan
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            A Commitment to Excellence in Colorectal Health
          </p>
        </header>

        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/3 w-full">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Portrait of Dr. Erfan"
              data-ai-hint="doctor portrait"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl mx-auto object-cover"
            />
          </div>
          <div className="lg:w-2/3">
            <h2 className="font-headline text-3xl font-bold mb-4">
              A Leader in Patient-Centric Care
            </h2>
            <p className="text-muted-foreground mb-4">
              Dr. Erfan is a board-certified colorectal surgeon renowned for his expertise in minimally invasive laser procedures. With a career dedicated to advancing the field, he combines deep medical knowledge with a compassionate approach, ensuring every patient receives the highest standard of care.
            </p>
            <p className="text-muted-foreground">
              His philosophy is rooted in patient education and empowerment. Dr. Erfan believes in building a partnership with his patients, providing them with clear, comprehensive information to make informed decisions about their health. This collaborative approach has earned him a reputation for not only exceptional surgical outcomes but also for the trust and confidence he inspires in those he treats.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Credentials</CardTitle>
                  <Medal className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><Check className="text-primary mr-2 h-4 w-4" /> Board-Certified Surgeon</li>
                      <li className="flex items-center"><Check className="text-primary mr-2 h-4 w-4" /> Colorectal Fellowship</li>
                      <li className="flex items-center"><Check className="text-primary mr-2 h-4 w-4" /> Member of ASCRS</li>
                  </ul>
                </CardContent>
              </Card>
               <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Specializations</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                   <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><Check className="text-primary mr-2 h-4 w-4" /> Laser Hemorrhoidoplasty</li>
                      <li className="flex items-center"><Check className="text-primary mr-2 h-4 w-4" /> Fissure & Fistula Treatment</li>
                      <li className="flex items-center"><Check className="text-primary mr-2 h-4 w-4" /> Pilonidal Sinus Surgery</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Professional Milestones</h2>
                <p className="mt-4 text-lg text-muted-foreground">A journey of continuous learning and dedication to medical innovation.</p>
            </div>
            <div className="relative">
                <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
                {MILESTONES.map((item, index) => (
                    <div key={item.year} className={`flex items-center w-full mb-8 md:justify-between md:flex-row${index % 2 === 0 ? "" : "-reverse"}`}>
                        <div className="md:w-5/12"></div>
                        <div className="z-10">
                            <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-full text-primary-foreground font-bold">{index + 1}</div>
                        </div>
                        <div className="md:w-5/12 bg-card p-6 rounded-lg shadow-md ml-4 md:ml-0">
                            <h3 className="font-bold text-lg text-primary">{item.year}</h3>
                            <p className="text-muted-foreground mt-2">{item.event}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className="bg-secondary rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Ready for a Consultation?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Take the first step towards better health. Schedule your confidential consultation with Dr. Erfan today.</p>
            <div className="mt-8">
              <AppointmentModal>
                <Button size="lg">
                  Book an Appointment
                </Button>
              </AppointmentModal>
            </div>
        </section>
      </div>
    </div>
  );
}
