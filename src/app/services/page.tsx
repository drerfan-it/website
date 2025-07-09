import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AppointmentModal } from "@/components/AppointmentModal";
import { LASER_VS_TRADITIONAL, SERVICES_LIST } from "@/lib/constants";
import { Check } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
                        Our Medical Services
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                        World-class laser-based treatment for Piles, Fistula, Fissure, Pilonidal Sinus and a wide range of colorectal conditions.
                    </p>
                </header>
                
                <section className="mb-16 sm:mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {SERVICES_LIST.map((service) => (
                            <Card key={service.category} className="flex flex-col">
                                <CardHeader className="flex flex-row items-start gap-4">
                                    <div className="bg-primary/10 rounded-lg p-3 mt-1">
                                        <service.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="font-headline text-2xl">{service.category}</CardTitle>
                                        <CardDescription>{service.description}</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-3">
                                        {service.items.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                
                <section className="mb-16 sm:mb-24">
                     <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Laser vs. Traditional Surgery</h2>
                        <p className="mt-4 text-lg text-muted-foreground">A clear comparison to help you understand the benefits of our modern approach.</p>
                    </div>
                    <Card>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {LASER_VS_TRADITIONAL.headers.map(header => <TableHead key={header} className={header === 'Feature' ? 'font-bold' : 'text-center font-bold'}>{header}</TableHead>)}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {LASER_VS_TRADITIONAL.rows.map(row => (
                                        <TableRow key={row[0]}>
                                            <TableCell className="font-medium">{row[0]}</TableCell>
                                            <TableCell className="text-center text-green-700 font-semibold">{row[1]}</TableCell>
                                            <TableCell className="text-center">{row[2]}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </section>

                <section className="bg-secondary rounded-lg p-8 md:p-12 text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Take the Next Step</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Your path to relief and recovery starts with a conversation. Contact us to schedule a private consultation.</p>
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
