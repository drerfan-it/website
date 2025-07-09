import type { ReactNode } from "react";
import { BookText, Download, LifeBuoy } from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Dr. Erfan" },
  { href: "/services", label: "Services" },
  { href: "/resources",label: "Patient Resources",},
  { href: "/contact", label: "Contact Us" },
];

export const STATS = [
    { value: "15+", label: "Years of Experience" },
    { value: "5,000+", label: "Successful Procedures" },
    { value: "98%", label: "Patient Satisfaction" },
    { value: "Top 1%", label: "Specialist Ranking" },
];

export const CONDITIONS_TREATED = [
    "Hemorrhoids",
    "Anal Fissures",
    "Fistula-in-ano",
    "Pilonidal Sinus",
    "Anal Warts",
    "Rectal Prolapse"
];

export const WHY_CHOOSE_US = [
    { title: "Expert Care", description: "Led by a renowned specialist with over 15 years of focused experience." },
    { title: "Advanced Technology", description: "Utilizing the latest laser technology for minimally invasive treatments." },
    { title: "Patient-Centric", description: "Compassionate, personalized care plans tailored to your needs and comfort." }
];

export const MILESTONES = [
    { year: "2008", event: "Graduated from Premier Medical University" },
    { year: "2012", event: "Completed Colorectal Surgery Fellowship" },
    { year: "2014", event: "Pioneered laser hemorrhoidoplasty in the region" },
    { year: "2018", event: "Established the Dr. Erfan Colorectal Center" },
    { year: "2022", event: "Recognized as a Top Colorectal Surgeon nationwide" }
];

export const LASER_VS_TRADITIONAL = {
    headers: ["Feature", "Laser Surgery", "Traditional Surgery"],
    rows: [
        ["Procedure Time", "Shorter (15-30 mins)", "Longer (30-60 mins)"],
        ["Pain Level", "Minimal", "Moderate to Severe"],
        ["Recovery Time", "1-2 days", "2-4 weeks"],
        ["Hospital Stay", "Outpatient (no stay)", "Often requires 1-2 days stay"],
        ["Success Rate", "High (>95%)", "High, but with more complications"],
        ["Recurrence Rate", "Very Low", "Low to Moderate"],
    ],
};

export const FAQS = [
    {
      question: "What are the advantages of laser surgery?",
      answer: "Laser surgery offers numerous benefits, including minimal pain, faster recovery, less bleeding, and a lower risk of infection compared to traditional methods. Most procedures are done on an outpatient basis, allowing you to return home the same day."
    },
    {
      question: "Is the consultation with Dr. Erfan confidential?",
      answer: "Absolutely. We adhere to the strictest standards of patient confidentiality. Your consultation and all medical records are handled with the utmost privacy and security."
    },
    {
      question: "How do I prepare for my first appointment?",
      answer: "Please bring any previous medical records, a list of current medications, and your insurance information. For specific preparation instructions related to your condition, please refer to our pre-operative guides or contact our office."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept a wide range of insurance plans. Please contact our administrative staff with your insurance details to verify coverage before your appointment."
    }
];

export const RESOURCES: { title: string; description: string; icon: ReactNode; link: string }[] = [
    {
        title: "Pre-Operative Guide",
        description: "Essential steps to prepare for your upcoming procedure.",
        icon: Download,
        link: "#"
    },
    {
        title: "Post-Operative Care",
        description: "Instructions for a smooth and speedy recovery at home.",
        icon: Download,
        link: "#"
    },
    {
        title: "Understanding Your Condition",
        description: "In-depth articles and resources about various colorectal conditions.",
        icon: BookText,
        link: "#"
    },
    {
        title: "Patient Support",
        description: "Connect with support groups and find resources for emotional well-being.",
        icon: LifeBuoy,
        link: "#"
    }
];
