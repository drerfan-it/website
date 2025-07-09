import type { ReactElementType } from "react";
import { BookText, Download, LifeBuoy, ShieldCheck, Stethoscope, CheckCircle, HeartPulse, Microscope, Waves } from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Dr. Erfan" },
  { href: "/services", label: "Services" },
  { href: "/resources",label: "Patient Resources",},
  { href: "/contact", label: "Contact Us" },
];

export const STATS = [
    { value: "30,000+", label: "Successful Laser Surgeries" },
    { value: "99%", label: "Patient Success Rate" },
    { value: "Pioneer", label: "Of Laser Surgery in Bangladesh" },
    { value: "World-Class", label: "Treatment & Technology" },
];

export const CONDITIONS_TREATED = [
    "Piles (Hemorrhoids)",
    "Anal Fistula",
    "Anal Fissure",
    "Pilonidal Sinus",
    "Rectal Prolapse",
    "Colon Polyps"
];

export const WHY_CHOOSE_US = [
    { 
        icon: ShieldCheck,
        title: "Painless & Bloodless", 
        description: "Advanced laser technology means no cutting, minimal pain, and faster recovery." 
    },
    { 
        icon: CheckCircle,
        title: "Proven Expertise", 
        description: "Over 30,000 successful procedures performed with a 99% success rate." 
    },
    { 
        icon: HeartPulse,
        title: "Confidential Care", 
        description: "Safe, private, and compassionate treatment for all sensitive conditions." 
    }
];

export const MILESTONES = [
    { year: "2008", event: "Graduated from Premier Medical University" },
    { year: "2012", event: "Completed FCPS (Surgery)" },
    { year: "2014", event: "Pioneered laser colorectal surgery in Bangladesh" },
    { year: "2018", event: "Established the Prof. Dr. S. M. A. Erfan Colorectal Center" },
    { year: "2022", event: "Crossed 30,000+ successful laser surgeries milestone" }
];

export const LASER_VS_TRADITIONAL = {
    headers: ["Feature", "Laser Surgery", "Traditional Surgery"],
    rows: [
        ["Procedure Type", "Minimally Invasive", "Invasive Cutting"],
        ["Pain Level", "Minimal to None", "Moderate to Severe"],
        ["Recovery Time", "1-2 days", "2-4 weeks"],
        ["Hospital Stay", "Outpatient (no stay)", "Requires 1-2 days stay"],
        ["Bleeding", "Bloodless", "Significant Bleeding"],
        ["Recurrence Rate", "Very Low", "Low to Moderate"],
    ],
};

export const SERVICES_LIST = [
  {
    category: "Advanced Laser Surgery",
    icon: Stethoscope,
    description: "Painless, bloodless procedures without conventional cutting, ensuring minimal recovery time.",
    items: [
      "Painless laser surgery for Piles, Anal Fissure, and Fistula",
      "Laser treatment for Pilonidal Sinus",
      "Successful laser operations for complex Fistula",
      "Outpatient procedures with minimal recovery time"
    ]
  },
  {
    category: "Complete Piles (Hemorrhoids) Care",
    icon: HeartPulse,
    description: "Comprehensive solutions for all types and grades of hemorrhoids.",
    items: [
      "Non-surgical options: Rubber Band Ligation, Injections, Vessel Ligation",
      "Treatment for all grades of Piles",
      "Specialized care for pregnancy-related Hemorrhoids"
    ]
  },
  {
    category: "Anorectal Conditions",
    icon: CheckCircle,
    description: "Expert diagnosis and treatment for a wide range of anorectal disorders.",
    items: [
      "Anal Fissure & Anal Stenosis",
      "Bleeding from anus (adults & children)",
      "Rectal & Colon Polyps",
      "Rectal Prolapse (in children & elderly)",
      "Proctitis (pain, burning, and itching in anus)",
      "All pediatric and geriatric anorectal disorders"
    ]
  },
  {
    category: "Digestive & Bowel Disorders",
    icon: Waves,
    description: "Managing complex digestive issues to restore your quality of life.",
    items: [
      "Constipation (Chronic & Acute)",
      "Obstructed Defecation Syndrome (ODS)",
      "Irritable Bowel Syndrome (IBS)",
      "Crohn’s Disease & Ulcerative Colitis",
      "Inflammatory bowel diseases with rectal bleeding"
    ]
  },
    {
    category: "Cancer Care & Polyp Removal",
    icon: ShieldCheck,
    description: "Early detection and advanced treatment for colorectal cancers.",
    items: [
      "Colorectal Cancer screening and treatment",
      "Rectal Cancer management",
      "Colonoscopy-based tumor and polyp removal"
    ]
  },
  {
    category: "Diagnostic Tests",
    icon: Microscope,
    description: "State-of-the-art diagnostic tools for accurate assessments.",
    items: [
      "Sigmoidoscopy",
      "Video Colonoscopy",
      "Rectal Manometry"
    ]
  }
];


export const FAQS = [
    {
      question: "What are the advantages of laser surgery?",
      answer: "Laser surgery offers numerous benefits, including minimal pain, faster recovery, less bleeding, and a lower risk of infection compared to traditional methods. Most procedures are done on an outpatient basis, allowing you to return home the same day."
    },
    {
      question: "Is the consultation with Prof. Dr. Erfan confidential?",
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

export const RESOURCES: { title: string; description: string; icon: React.ElementType; link: string }[] = [
    {
        title: "Pre-Operative Guide",
        description: "Essential steps to prepare for your upcoming procedure.",
        icon: Download,
        link: "/#"
    },
    {
        title: "Post-Operative Care",
        description: "Instructions for a smooth and speedy recovery at home.",
        icon: Download,
        link: "/#"
    },
    {
        title: "Condition Fact Sheets",
        description: "In-depth information about various colorectal conditions.",
        icon: BookText,
        link: "/#"
    },
    {
        title: "Patient Support",
        description: "Connect with support groups and find resources for your journey.",
        icon: LifeBuoy,
        link: "/#"
    }
];
