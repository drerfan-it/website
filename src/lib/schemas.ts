
"use client";

import { z } from "zod";
import { translations } from "./i18n";

type Language = "en" | "bn";

export const getAppointmentSchema = (lang: Language) => {
    const t = translations[lang].forms.appointment;
    return z.object({
        name: z.string().min(2, { message: t.validation.name }),
        phone: z.string().min(10, { message: t.validation.phone }),
        email: z.string().email({ message: t.validation.email }),
        date: z.date({
            required_error: t.validation.date,
        }),
        message: z.string().optional(),
    });
};

export const getContactSchema = (lang: Language) => {
    const t = translations[lang].forms.contact;
    return z.object({
        name: z.string().min(2, { message: t.validation.name }),
        email: z.string().email({ message: t.validation.email }),
        subject: z.string().min(5, { message: t.validation.subject }),
        message: z.string().min(10, { message: t.validation.message })
    });
};
