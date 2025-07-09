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
            Meet Prof. Dr. S. M. A. Erfan
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Pioneer Colorectal Surgeon in Bangladesh
          </p>
        </header>

        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/3 w-full">
            <Image
              src="https://placehold.co/400x500.png"
              alt="Portrait of Prof. Dr. S. M. A. Erfan"
              data-ai-hint="doctor portrait"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl mx-auto object-cover"
            />
          </div>
          <div className="lg:w-2/3">
            <h2 className="font-headline text-3xl font-bold mb-4">
              A Leader in Patient-Centric Laser Surgery
            </h2>
            <p className="text-muted-foreground mb-4">
              Prof. Dr. S. M. A. Erfan is a highly respected colorectal surgeon, celebrated for his pioneering work in laser-based treatments in Bangladesh. With prestigious qualifications including MBBS and FCPS (Surgery), and advanced international training, he has dedicated his career to providing world-class, painless surgical solutions.
            </p>
            <p className="text-muted-foreground">
              Having completed over 30,000 successful laser surgeries with a 99% success rate, Dr. Erfan's philosophy is rooted in combining cutting-edge technology with compassionate, patient-focused care. He believes in empowering patients with clear information, ensuring they are comfortable and confident in their treatment decisions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Credentials</CardTitle>
                  <Medal className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><Check className="text-primary mr-2 h-4 w-4" /> MBBS, FCPS (Surgery)</li>
                      <li className="flex items-center"><Check className="text-primary mr-2 h-4 w-4" /> Advanced International Training</li>
                      <li className="flex items-center"><Check className="text-primary mr-2 h-4 w-4" /> Pioneer of Laser Surgery in BD</li>
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
                      <li className="flex items-center"><Check className="text-primary mr-2 h-4 w-4" /> Piles, Fistula & Fissure</li>
                      <li className="flex items-center"><Check className="text-primary mr-2 h-4 w-4" /> Pilonidal Sinus Laser Surgery</li>
                      <li className="flex items-center"><Check className="text-primary mr-2 h-4 w-4" /> Colorectal Cancer Care</li>
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
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Take the first step towards better health. Schedule your confidential consultation with Prof. Dr. Erfan today.</p>
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
