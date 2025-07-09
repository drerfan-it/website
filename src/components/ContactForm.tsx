
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getContactSchema } from "@/lib/schemas";
import { submitContactForm } from "@/app/actions";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";


export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language].forms.contact;

  const contactSchema = getContactSchema(language);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsSubmitting(true);
    const result = await submitContactForm(values);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: t.success.title,
        description: t.success.message,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: t.error.title,
        description: t.error.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.labels.name}</FormLabel>
              <FormControl>
                <Input placeholder={t.placeholders.name} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.labels.email}</FormLabel>
              <FormControl>
                <Input placeholder={t.placeholders.email} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.labels.subject}</FormLabel>
              <FormControl>
                <Input placeholder={t.placeholders.subject} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.labels.message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t.placeholders.message}
                  className="resize-none"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {t.button}
        </Button>
      </form>
    </Form>
  );
}
