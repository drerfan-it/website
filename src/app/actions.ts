'use server';

import { z } from 'zod';
import { appointmentSchema, contactSchema } from '@/lib/schemas';

export async function submitAppointment(values: z.infer<typeof appointmentSchema>) {
  // Here you would typically save the data to a database
  // and handle HIPAA compliance requirements.
  console.log('New appointment submitted:', values);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, message: "Appointment request received! We will contact you shortly." };
}


export async function submitContactForm(values: z.infer<typeof contactSchema>) {
    // Here you would typically save the data to a database
    // or send an email.
    console.log('New contact form submission:', values);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: "Your message has been sent! We will get back to you soon." };
}
