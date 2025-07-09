"use client";

import { z } from "zod";

export const appointmentSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  date: z.date({
    required_error: "A date for the appointment is required.",
  }),
  message: z.string().optional(),
});

export const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters."}),
    message: z.string().min(10, { message: "Message must be at least 10 characters."})
});
