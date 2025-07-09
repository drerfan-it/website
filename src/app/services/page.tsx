import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppointmentModal } from "@/components/AppointmentModal";
import { LASER_VS_TRADITIONAL } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
                        Our Medical Services
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                        Leveraging advanced technology for precise, minimally invasive colorectal treatments.
                    </p>
                </header>
                
                <section className="mb-16 sm:mb-24">
                    <Tabs defaultValue="laser" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
                            <TabsTrigger value="laser">Laser Treatments</TabsTrigger>
                            <TabsTrigger value="diagnostic">Diagnostic Services</TabsTrigger>
                        </TabsList>
                        <TabsContent value="laser">
                            <Card className="mt-6">
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">State-of-the-Art Laser Procedures</CardTitle>
                                    <CardDescription>Experience faster recovery and minimal discomfort with our advanced laser solutions.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <ServiceDetail 
                                        title="Laser Hemorrhoidoplasty (LHP)" 
                                        description="A minimally invasive procedure for hemorrhoids that shrinks them from the inside out without cutting tissues. Results in less pain and quicker return to normal activities."
                                        imageUrl="https://placehold.co/600x400.png"
                                        imageHint="laser surgery equipment"
                                    />
                                    <ServiceDetail 
                                        title="Fistula-tract Laser Closure (FiLaC®)" 
                                        description="An effective, sphincter-saving technique for treating anal fistulas. The laser probe closes the tract with precision, promoting healing while preserving muscle function."
                                        imageUrl="https://placehold.co/600x400.png"
                                        imageHint="medical procedure"
                                    />
                                     <ServiceDetail 
                                        title="Laser Pilonidal Sinus Treatment (LPS)" 
                                        description="A minimally invasive approach to treat pilonidal sinus disease. The procedure involves cleaning the sinus and sealing it with laser energy, leading to faster healing and lower recurrence rates."
                                        imageUrl="https://placehold.co/600x400.png"
                                        imageHint="patient consultation"
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="diagnostic">
                           <Card className="mt-6">
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">Comprehensive Diagnostic Services</CardTitle>
                                    <CardDescription>Accurate diagnosis is the first step to effective treatment. We use the latest tools to understand your condition.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <ServiceDetail 
                                        title="Anoscopy & Proctoscopy" 
                                        description="Visual examination of the anal canal and rectum to diagnose conditions like hemorrhoids, fissures, and inflammation. A quick and essential in-office procedure."
                                        imageUrl="https://placehold.co/600x400.png"
                                        imageHint="medical diagnostic tool"
                                    />
                                    <ServiceDetail 
                                        title="Ultrasound Imaging" 
                                        description="Non-invasive imaging used to assess complex fistulas, abscesses, and other deep tissue conditions, providing a clear picture for accurate treatment planning."
                                        imageUrl="https://placehold.co/600x400.png"
                                        imageHint="ultrasound machine"
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
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

function ServiceDetail({ title, description, imageUrl, imageHint }: { title: string, description: string, imageUrl: string, imageHint: string }) {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-secondary/50 p-6 rounded-lg">
            <div className="md:w-1/3 w-full">
                <Image 
                    src={imageUrl}
                    alt={title}
                    data-ai-hint={imageHint}
                    width={400}
                    height={250}
                    className="rounded-md object-cover shadow-md"
                />
            </div>
            <div className="md:w-2/3">
                <h3 className="text-xl font-bold font-headline mb-2">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </div>
    )
}
