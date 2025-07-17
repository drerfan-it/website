
import { BookText, Download, LifeBuoy, ShieldCheck, Stethoscope, CheckCircle, HeartPulse, Microscope, Waves, Medal, Star, Facebook, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Dr. Erfan",
      services: "Services",
      resources: "Patient Resources",
      contact: "Contact Us",
    },
    header: {
      button: "Book Appointment",
      lang_toggle: "বাংলা",
    },
    footer: {
      tagline: "Pioneer colorectal & laser surgeon in Bangladesh.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      clinicHours: "Clinic Hours",
      hours_1: {
        days: "Saturday - Thursday",
        time: "6:00 PM - 9:00 PM",
      },
      hours_2: {
        days: "Friday",
        time: "Closed",
      },
      copyright: `© ${new Date().getFullYear()} Dr Erfan Colorectal Center. All Rights Reserved.`,
    },
    home: {
      hero: {
        title: "Dr Erfan Colorectal Center",
        subtitle: "Painless, bloodless laser surgery for Piles, Fistula, Fissure & Pilonidal Sinus in Bangladesh, pioneered by Prof. Dr. S. M. A. Erfan.",
        button: "Book an Appointment",
      },
      stats: {
        item1: "Successful Laser Surgeries",
        item2: "Patient Success Rate",
        item3: "Of Laser Surgery in Bangladesh",
        item4: "World-Class Treatment & Technology",
      },
      conditions: {
        title: "Conditions We Treat",
        subtitle: "Specialized laser treatments for a wide range of colorectal conditions.",
        items: [
          "Piles (Hemorrhoids)",
          "Anal Fistula",
          "Anal Fissure",
          "Pilonidal Sinus",
          "Rectal Prolapse",
          "Colon Polyps"
        ],
      },
      whyChooseUs: {
        title: "Why Choose Us?",
        subtitle: "Get world-class colorectal & laser treatment right here in Bangladesh.",
        item1: {
          title: "Painless & Bloodless",
          description: "Advanced laser technology means no cutting, minimal pain, and faster recovery."
        },
        item2: {
          title: "Proven Expertise",
          description: "Over 30,000 successful procedures performed with a 99% success rate."
        },
        item3: {
          title: "Confidential Care",
          description: "Safe, private, and compassionate treatment for all sensitive conditions."
        },
      },
      servicesPreview: {
        title: "World-Class Services",
        subtitle: "We offer state-of-the-art diagnostic and therapeutic services with a focus on minimally invasive laser procedures for Piles, Fistula, Fissure and more.",
        item1: {
          title: "Advanced Laser Surgery",
          description: "Painless, bloodless solutions with faster recovery times."
        },
        item2: {
          title: "Comprehensive Diagnosis",
          description: "Accurate diagnosis using the latest technology to guide the most effective treatment plan."
        },
        button: "Explore All Services",
      },
    },
    about: {
      title: "Meet Prof. Dr. S. M. A. Erfan",
      subtitle: "Founder of Dr Erfan Colorectal Center",
      section1: {
        title: "A Leader in Patient-Centric Laser Surgery",
        p1: "Prof. Dr. S. M. A. Erfan is a highly respected colorectal surgeon, celebrated for his pioneering work in laser-based treatments in Bangladesh. With prestigious qualifications including MBBS and FCPS (Surgery), and advanced international training, he has dedicated his career to providing world-class, painless surgical solutions.",
        p2: "Having completed over 30,000 successful laser surgeries with a 99% success rate, Dr. Erfan's philosophy is rooted in combining cutting-edge technology with compassionate, patient-focused care. He believes in empowering patients with clear information, ensuring they are comfortable and confident in their treatment decisions.",
      },
      credentials: {
        title: "Credentials",
        items: [
          "MBBS, FCPS (Surgery)",
          "Advanced International Training",
          "Pioneer of Laser Surgery in BD"
        ]
      },
      specializations: {
        title: "Specializations",
        items: [
          "Piles, Fistula & Fissure",
          "Pilonidal Sinus Laser Surgery",
          "Colorectal Cancer Care"
        ]
      },
      milestones: {
        title: "Professional Milestones",
        subtitle: "A journey of continuous learning and dedication to medical innovation.",
        items: [
          { year: "2008", event: "Graduated from Premier Medical University" },
          { year: "2012", event: "Completed FCPS (Surgery)" },
          { year: "2014", event: "Pioneered laser colorectal surgery in Bangladesh" },
          { year: "2018", event: "Established the Dr Erfan Colorectal Center" },
          { year: "2022", event: "Crossed 30,000+ successful laser surgeries milestone" }
        ],
      },
      cta: {
        title: "Ready for a Consultation?",
        subtitle: "Take the first step towards better health. Schedule your confidential consultation today.",
        button: "Book an Appointment",
      },
    },
    services: {
      title: "Our Medical Services",
      subtitle: "World-class laser-based treatment for Piles, Fistula, Fissure, Pilonidal Sinus and a wide range of colorectal conditions.",
      comparison: {
        title: "Laser vs. Traditional Surgery",
        subtitle: "A clear comparison to help you understand the benefits of our modern approach.",
        headers: ["Feature", "Laser Surgery", "Traditional Surgery"],
        rows: [
            ["Procedure Type", "Minimally Invasive", "Invasive Cutting"],
            ["Pain Level", "Minimal to None", "Moderate to Severe"],
            ["Recovery Time", "1-2 days", "2-4 weeks"],
            ["Hospital Stay", "Outpatient (no stay)", "Requires 1-2 days stay"],
            ["Bleeding", "Bloodless", "Significant Bleeding"],
            ["Recurrence Rate", "Very Low", "Low to Moderate"],
        ],
      },
      list: [
        {
          category: "Advanced Laser Surgery",
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
          description: "Comprehensive solutions for all types and grades of hemorrhoids.",
          items: [
            "Non-surgical options: Rubber Band Ligation, Injections, Vessel Ligation",
            "Treatment for all grades of Piles",
            "Specialized care for pregnancy-related Hemorrhoids"
          ]
        },
        {
          category: "Anorectal Conditions",
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
          description: "Early detection and advanced treatment for colorectal cancers.",
          items: [
            "Colorectal Cancer screening and treatment",
            "Rectal Cancer management",
            "Colonoscopy-based tumor and polyp removal"
          ]
        },
        {
          category: "Diagnostic Tests",
          description: "State-of-the-art diagnostic tools for accurate assessments.",
          items: [
            "Sigmoidoscopy",
            "Video Colonoscopy",
            "Rectal Manometry"
          ]
        }
      ],
      cta: {
        title: "Take the Next Step",
        subtitle: "Your path to relief and recovery starts with a conversation. Contact us to schedule a private consultation.",
        button: "Book an Appointment",
      },
    },
    resources: {
      title: "Patient Resources",
      subtitle: "Information and tools to support you throughout your treatment journey.",
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Answers to common questions about our procedures and care.",
        items: [
          {
            question: "What are the advantages of laser surgery?",
            answer: "Laser surgery offers numerous benefits, including minimal pain, faster recovery, less bleeding, and a lower risk of infection compared to traditional methods. Most procedures are done on an outpatient basis, allowing you to return home the same day."
          },
          {
            question: "Is the consultation confidential?",
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
        ],
      },
      guides: {
        title: "Guides & Downloads",
        subtitle: "Downloadable resources to help you prepare and recover.",
        button: "Download PDF",
        items: [
            {
                title: "Pre-Operative Guide",
                description: "Essential steps to prepare for your upcoming procedure.",
                link: "/#"
            },
            {
                title: "Post-Operative Care",
                description: "Instructions for a smooth and speedy recovery at home.",
                link: "/#"
            },
            {
                title: "Condition Fact Sheets",
                description: "In-depth information about various colorectal conditions.",
                link: "/#"
            },
            {
                title: "Patient Support",
                description: "Connect with support groups and find resources for your journey.",
                link: "/#"
            }
        ],
      },
      videoPortfolio: {
        title: "Patient Testimonials",
        subtitle: "Hear from our patients about their experiences.",
        items: [
            { id: "eO34_18nboI", title: "Patient Review 1" },
            { id: "dQw4w9WgXcQ", title: "Patient Review 2" },
        ]
      },
      cta: {
        title: "Have More Questions?",
        subtitle: "We're here to help. Schedule a consultation to discuss your specific needs and concerns.",
        button: "Book a Consultation",
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle: "We're here to answer your questions and help you schedule a consultation.",
      form: {
        title: "Send Us a Message",
        subtitle: "Please use this form for general inquiries only. For medical questions, please book an appointment. The form is HIPAA compliant for your privacy.",
      },
      info: {
        title: "Contact Information",
        appointment: "For Appointment:",
        addressTitle: "Dr. Erfan Colorectal Center",
        addressLine1: "City Tower, 44/7 Panthapath",
        addressLine2: "Dhaka-1205, Bangladesh",
      },
      hours: {
        title: "Clinic Hours",
        days1: "Saturday - Thursday",
        time1: "6:00 PM - 9:00 PM",
        days2: "Friday",
        time2: "Closed",
      },
      location: {
        title: "Our Location",
      }
    },
    forms: {
      appointment: {
        title: "Request an Appointment",
        subtitle: "Fill out the form below and we'll contact you to confirm.",
        labels: {
          name: "Full Name",
          phone: "Phone Number",
          email: "Email Address",
          date: "Preferred Date",
          message: "Additional Message (Optional)",
        },
        placeholders: {
          name: "John Doe",
          phone: "01XXXXXXXXX",
          email: "you@example.com",
          date: "Pick a date",
          message: "Tell us a bit about your reason for the visit",
        },
        button: "Submit Request",
        success: {
            title: "Success!",
            message: "Appointment request received! We will contact you shortly.",
        },
        error: {
            title: "Error",
            message: "Something went wrong. Please try again.",
        },
        validation: {
            name: "Name must be at least 2 characters.",
            phone: "Please enter a valid phone number.",
            email: "Please enter a valid email address.",
            date: "A date for the appointment is required.",
        }
      },
      contact: {
        labels: {
          name: "Full Name",
          email: "Email Address",
          subject: "Subject",
          message: "Message",
        },
        placeholders: {
          name: "John Doe",
          email: "you@example.com",
          subject: "Question about a service",
          message: "Your message here...",
        },
        button: "Send Message",
        success: {
            title: "Success!",
            message: "Your message has been sent! We will get back to you soon.",
        },
        error: {
            title: "Error",
            message: "Something went wrong. Please try again.",
        },
        validation: {
            name: "Name must be at least 2 characters.",
            email: "Please enter a valid email address.",
            subject: "Subject must be at least 5 characters.",
            message: "Message must be at least 10 characters.",
        }
      }
    },
  },
  bn: {
    nav: {
      home: "হোম",
      about: "ডাঃ ইরফান সম্পর্কে",
      services: "সেবাসমূহ",
      resources: "রোগীর জন্য তথ্য",
      contact: "যোগাযোগ",
    },
    header: {
      button: "অ্যাপয়েন্টমেন্ট নিন",
      lang_toggle: "English",
    },
    footer: {
      tagline: "বাংলাদেশে পাইওনিয়ার কোলোরেক্টাল ও লেজার সার্জন।",
      quickLinks: "দ্রুত লিঙ্ক",
      contactUs: "আমাদের সাথে যোগাযোগ",
      clinicHours: "ক্লিনিকের সময়",
      hours_1: {
        days: "শনি - বৃহস্পতিবার",
        time: "সন্ধ্যা ৬:০০ - রাত ৯:০০",
      },
      hours_2: {
        days: "শুক্রবার",
        time: "বন্ধ",
      },
      copyright: `© ${new Date().getFullYear()} ডাঃ ইরফান কোলোরেক্টাল সেন্টার। সর্বস্বত্ব সংরক্ষিত।`,
    },
    home: {
      hero: {
        title: "ডাঃ ইরফান কোলোরেক্টাল সেন্টার",
        subtitle: "অধ্যাপক ডাঃ এস এম এ ইরফানের হাত ধরে বাংলাদেশে পাইলস, ফিস্টুলা, ফিশার এবং পাইলোনিডাল সাইনাসের জন্য ব্যথাহীন, রক্তপাতহীন লেজার সার্জারি।",
        button: "অ্যাপয়েন্টমেন্ট বুক করুন",
      },
      stats: {
        item1: "সফল লেজার সার্জারি",
        item2: "রোগীর সাফল্যের হার",
        item3: "লেজার সার্জারির পথিকৃৎ",
        item4: "মানের চিকিৎসা ও প্রযুক্তি",
      },
      conditions: {
        title: "যেসব রোগের চিকিৎসা করা হয়",
        subtitle: "বিস্তৃত কোলোরেক্টাল সমস্যার জন্য বিশেষায়িত লেজার চিকিৎসা।",
        items: [
          "পাইলস (অর্শ)",
          "অ্যানাল ফিস্টুলা",
          "অ্যানাল ফিশার",
          "পাইলোনিডাল সাইনাস",
          "রেকটাল প্রোলাপস",
          "কোলন পলিপস"
        ],
      },
      whyChooseUs: {
        title: "কেন আমাদের বেছে নেবেন?",
        subtitle: "বিশ্বমানের কোলোরেক্টাল ও লেজার চিকিৎসা এখন বাংলাদেশেই নিন।",
        item1: {
          title: "ব্যথাহীন ও রক্তপাতহীন",
          description: "উন্নত লেজার প্রযুক্তির অর্থ কোনো কাটাছেঁড়া নেই, ন্যূনতম ব্যথা এবং দ্রুত আরোগ্য।"
        },
        item2: {
          title: "প্রমাণিত দক্ষতা",
          description: "৩০,০০০ এর বেশি সফল অপারেশন ৯৯% সাফল্যের হারের সাথে সম্পন্ন হয়েছে।"
        },
        item3: {
          title: "গোপনীয় সেবা",
          description: "সব ধরনের সংবেদনশীল অবস্থার জন্য নিরাপদ, ব্যক্তিগত এবং সহানুভূতিশীল চিকিৎসা।"
        },
      },
      servicesPreview: {
        title: "বিশ্বমানের সেবাসমূহ",
        subtitle: "আমরা পাইলস, ফিস্টুলা, ফিশার এবং আরও অনেক কিছুর জন্য ন্যূনতমরূপে আক্রমণাত্মক লেজার পদ্ধতিতে মনোনিবেশ করে অত্যাধুনিক ডায়াগনস্টিক এবং থেরাপিউটিক পরিষেবা সরবরাহ করি।",
        item1: {
          title: "উন্নত লেজার সার্জারি",
          description: "দ্রুত আরোগ্যের জন্য ব্যথাহীন, রক্তপাতহীন সমাধান।"
        },
        item2: {
          title: "সমন্বিত রোগ নির্ণয়",
          description: "সবচেয়ে কার্যকর চিকিৎসা পরিকল্পনা পরিচালনার জন্য সর্বশেষ প্রযুক্তি ব্যবহার করে সঠিক রোগ নির্ণয়।"
        },
        button: "সকল সেবাসমূহ দেখুন",
      },
    },
    about: {
      title: "অধ্যাপক ডাঃ এস এম এ ইরফানের সাথে পরিচিত হন",
      subtitle: "ডাঃ ইরফান কোলোরেক্টাল সেন্টারের প্রতিষ্ঠাতা",
      section1: {
        title: "রোগী-কেন্দ্রিক লেজার সার্জারিতে একজন অগ্রণী",
        p1: "অধ্যাপক ডাঃ এস এম এ ইরফান একজন অত্যন্ত সম্মানিত কোলোরেক্টাল সার্জন, যিনি বাংলাদেশে লেজার-ভিত্তিক চিকিৎসায় তার অগ্রণী ভূমিকার জন্য প্রশংসিত। এমবিবিএস এবং এফসিপিএস (সার্জারি) সহ মর্যাদাপূর্ণ যোগ্যতা এবং উন্নত আন্তর্জাতিক প্রশিক্ষণের সাথে, তিনি বিশ্বমানের, ব্যথাহীন অস্ত্রোপচার সমাধান প্রদানের জন্য তার কর্মজীবন উৎসর্গ করেছেন।",
        p2: "৩০,০০০ এর বেশি সফল লেজার সার্জারি ৯৯% সাফল্যের হারের সাথে সম্পন্ন করার পর, ডাঃ ইরফানের দর্শন সহানুভূতিশীল, রোগী-কেন্দ্রিক যত্নের সাথে অত্যাধুনিক প্রযুক্তির সমন্বয়ে নিহিত। তিনি রোগীদের স্পষ্ট তথ্য দিয়ে ক্ষমতায়ন করার উপর বিশ্বাস করেন, যাতে তারা তাদের চিকিৎসার সিদ্ধান্তে স্বাচ্ছন্দ্য এবং আত্মবিশ্বাসী হন।",
      },
      credentials: {
        title: "যোগ্যতা",
        items: [
          "এমবিবিএস, এফসিপিএস (সার্জারি)",
          "উন্নত আন্তর্জাতিক প্রশিক্ষণ",
          "বাংলাদেশে লেজার সার্জারির পথিকৃৎ"
        ]
      },
      specializations: {
        title: "বিশেষত্ব",
        items: [
          "পাইলস, ফিস্টুলা এবং ফিশার",
          "পাইলোনিডাল সাইনাস লেজার সার্জারি",
          "কোলোরেক্টাল ক্যান্সার সেবা"
        ]
      },
      milestones: {
        title: "পেশাগত মাইলফলক",
        subtitle: "অবিরাম শেখা এবং চিকিৎসা উদ্ভাবনে উৎসর্গের একটি যাত্রা।",
        items: [
          { year: "২০০৮", event: "প্রধান মেডিকেল বিশ্ববিদ্যালয় থেকে স্নাতক" },
          { year: "২০১২", event: "এফসিপিএস (সার্জারি) সম্পন্ন" },
          { year: "২০১৪", event: "বাংলাদেশে লেজার কোলোরেক্টাল সার্জারির সূচনা" },
          { year: "২০১৮", event: "ডাঃ ইরফান কোলোরেক্টাল সেন্টার প্রতিষ্ঠা" },
          { year: "২০২২", event: "৩০,০০০+ সফল লেজার সার্জারির মাইলফলক অতিক্রম" }
        ],
      },
      cta: {
        title: "পরামর্শের জন্য প্রস্তুত?",
        subtitle: "উত্তম স্বাস্থ্যের দিকে প্রথম পদক্ষেপ নিন। আজই আপনার গোপনীয় পরামর্শের সময়সূচী নির্ধারণ করুন।",
        button: "অ্যাপয়েন্টমেন্ট বুক করুন",
      },
    },
    services: {
        title: "আমাদের চিকিৎসা সেবাসমূহ",
        subtitle: "পাইলস, ফিস্টুলা, ফিশার, পাইলোনিডাল সাইনাস এবং বিস্তৃত কোলোরেক্টাল অবস্থার জন্য বিশ্বমানের লেজার-ভিত্তিক চিকিৎসা।",
        comparison: {
          title: "লেজার বনাম প্রচলিত সার্জারি",
          subtitle: "আমাদের আধুনিক পদ্ধতির সুবিধাগুলি বুঝতে আপনাকে সাহায্য করার জন্য একটি স্পষ্ট তুলনা।",
          headers: ["বৈশিষ্ট্য", "লেজার সার্জারি", "প্রচলিত সার্জারি"],
          rows: [
              ["পদ্ধতির ধরন", "ন্যূনতমরূপে আক্রমণাত্মক", "আক্রমণাত্মক কাটাছেঁড়া"],
              ["ব্যথার স্তর", "ন্যূনতম থেকে নেই", "মাঝারি থেকে গুরুতর"],
              ["আরোগ্যের সময়", "১-২ দিন", "২-৪ সপ্তাহ"],
              ["হাসপাতালে থাকা", "বহির্বিভাগে (থাকার প্রয়োজন নেই)", "১-২ দিন থাকার প্রয়োজন"],
              ["রক্তপাত", "রক্তপাতহীন", "উল্লেখযোগ্য রক্তপাত"],
              ["পুনরাবৃত্তির হার", "খুব কম", "কম থেকে মাঝারি"],
          ],
        },
        list: [
          {
            category: "উন্নত লেজার সার্জারি",
            description: "প্রচলিত কাটাছেঁড়া ছাড়াই ব্যথাহীন, রক্তপাতহীন পদ্ধতি, যা ন্যূনতম আরোগ্যের সময় নিশ্চিত করে।",
            items: [
              "পাইলস, অ্যানাল ফিশার এবং ফিস্টুলার জন্য ব্যথাহীন লেজার সার্জারি",
              "পাইলোনিডাল সাইনাসের জন্য লেজার চিকিৎসা",
              "জটিল ফিস্টুলার জন্য সফল লেজার অপারেশন",
              "ন্যূনতম আরোগ্যের সময় সহ বহির্বিভাগের পদ্ধতি"
            ]
          },
          {
            category: "সম্পূর্ণ পাইলস (অর্শ) সেবা",
            description: "সব ধরনের এবং গ্রেডের অর্শের জন্য ব্যাপক সমাধান।",
            items: [
              "অস্ত্রোপচারহীন বিকল্প: রাবার ব্যান্ড লাইগেশন, ইনজেকশন, ভেসেল লাইগেশন",
              "সব গ্রেডের পাইলসের চিকিৎসা",
              "গর্ভাবস্থা-সম্পর্কিত অর্শের জন্য বিশেষায়িত যত্ন"
            ]
          },
          {
            category: "অ্যানোরেক্টাল অবস্থা",
            description: "বিস্তৃত অ্যানোরেক্টাল রোগের জন্য বিশেষজ্ঞ নির্ণয় এবং চিকিৎসা।",
            items: [
              "অ্যানাল ফিশার এবং অ্যানাল স্টেনোসিস",
              "মলদ্বার থেকে রক্তপাত (প্রাপ্তবয়স্ক ও শিশু)",
              "রেকটাল ও কোলন পলিপস",
              "রেকটাল প্রোলাপস (শিশু ও বৃদ্ধদের মধ্যে)",
              "প্রোক্টাইটিস (মলদ্বারে ব্যথা, জ্বালা, এবং চুলকানি)",
              "সমস্ত শিশু এবং জেরিয়াট্রিক অ্যানোরেক্টাল রোগ"
            ]
          },
          {
            category: "হজম এবং অন্ত্রের রোগ",
            description: "আপনার জীবনযাত্রার মান পুনরুদ্ধার করতে জটিল হজম সংক্রান্ত সমস্যা পরিচালনা করা।",
            items: [
              "কোষ্ঠকাঠিন্য (দীর্ঘস্থায়ী এবং তীব্র)",
              "অবস্ট্রাক্টেড ডেফিকেশন সিনড্রোম (ওডিএস)",
              "ইরিটেবল বাওয়েল সিনড্রোম (আইবিএস)",
              "ক্রোন'স ডিজিজ এবং আলসারেটিভ কোলাইটিস",
              "মলদ্বার থেকে রক্তপাত সহ প্রদাহজনক অন্ত্রের রোগ"
            ]
          },
          {
            category: "ক্যান্সার সেবা এবং পলিপ অপসারণ",
            description: "কোলোরেক্টাল ক্যান্সারের জন্য প্রাথমিক সনাক্তকরণ এবং উন্নত চিকিৎসা।",
            items: [
              "কোলোরেক্টাল ক্যান্সার স্ক্রীনিং এবং চিকিৎসা",
              "রেকটাল ক্যান্সার ব্যবস্থাপনা",
              "কলোনোস্কোপি-ভিত্তিক টিউমার এবং পলিপ অপসারণ"
            ]
          },
          {
            category: "ডায়াগনস্টিক পরীক্ষা",
            description: "সঠিক মূল্যায়নের জন্য অত্যাধুনিক ডায়াগনস্টিক সরঞ্জাম।",
            items: [
              "সিগমায়েডোস্কোপি",
              "ভিডিও কলোনোস্কোপি",
              "রেকটাল ম্যানোমেট্রি"
            ]
          }
        ],
        cta: {
          title: "পরবর্তী পদক্ষেপ নিন",
          subtitle: "আপনার আরোগ্য এবং পুনরুদ্ধারের পথ একটি কথোপকথন দিয়ে শুরু হয়। একটি ব্যক্তিগত পরামর্শের সময়সূচী নির্ধারণ করতে আমাদের সাথে যোগাযোগ করুন।",
          button: "অ্যাপয়েন্টমেন্ট বুক করুন",
        },
      },
      resources: {
        title: "রোগীর জন্য তথ্য",
        subtitle: "আপনার চিকিৎসার যাত্রাপথে আপনাকে সমর্থন করার জন্য তথ্য এবং সরঞ্জাম।",
        faq: {
          title: "সাধারণ জিজ্ঞাস্য প্রশ্ন",
          subtitle: "আমাদের পদ্ধতি এবং যত্ন সম্পর্কে সাধারণ প্রশ্নের উত্তর।",
          items: [
            {
              question: "লেজার সার্জারির সুবিধা কী?",
              answer: "লেজার সার্জারি অনেক সুবিধা প্রদান করে, যার মধ্যে রয়েছে ন্যূনতম ব্যথা, দ্রুত আরোগ্য, কম রক্তপাত, এবং প্রচলিত পদ্ধতির তুলনায় সংক্রমণের ঝুঁকি কম। বেশিরভাগ পদ্ধতি বহির্বিভাগে করা হয়, যা আপনাকে একই দিনে বাড়ি ফেরার সুযোগ দেয়।"
            },
            {
              question: "পরামর্শ কি গোপনীয়?",
              answer: "একদম। আমরা রোগীর গোপনীয়তার কঠোরতম মান মেনে চলি। আপনার পরামর্শ এবং সমস্ত মেডিকেল রেকর্ড সর্বোচ্চ গোপনীয়তা এবং নিরাপত্তার সাথে পরিচালনা করা হয়।"
            },
            {
              question: "আমি আমার প্রথম অ্যাপয়েন্টমেন্টের জন্য কীভাবে প্রস্তুতি নেব?",
              answer: "দয়া করে আপনার পূর্ববর্তী মেডিকেল রেকর্ড, বর্তমান ওষুধের একটি তালিকা এবং আপনার বীমার তথ্য সাথে আনুন। আপনার অবস্থা সম্পর্কিত নির্দিষ্ট প্রস্তুতির নির্দেশাবলীর জন্য, দয়া করে আমাদের প্রাক-অপারেটিভ গাইডগুলি দেখুন বা আমাদের অফিসে যোগাযোগ করুন।"
            },
            {
              question: "আপনারা কোন বীমা পরিকল্পনা গ্রহণ করেন?",
              answer: "আমরা বিস্তৃত বীমা পরিকল্পনা গ্রহণ করি। আপনার অ্যাপয়েন্টমেন্টের আগে কভারেজ যাচাই করতে দয়া করে আপনার বীমার বিবরণ সহ আমাদের প্রশাসনিক কর্মীদের সাথে যোগাযোগ করুন।"
            }
          ],
        },
        guides: {
          title: "গাইড এবং ডাউনলোড",
          subtitle: "আপনাকে প্রস্তুতি এবং পুনরুদ্ধারে সহায়তা করার জন্য ডাউনলোডযোগ্য সংস্থান।",
          button: "পিডিএফ ডাউনলোড করুন",
          items: [
              {
                  title: "প্রাক-অপারেটিভ গাইড",
                  description: "আপনার আসন্ন পদ্ধতির জন্য প্রস্তুতি নেওয়ার জন্য প্রয়োজনীয় পদক্ষেপ।",
                  link: "/#"
              },
              {
                  title: "পোস্ট-অপারেটিভ কেয়ার",
                  description: "বাড়িতে একটি মসৃণ এবং দ্রুত পুনরুদ্ধারের জন্য নির্দেশাবলী।",
                  link: "/#"
              },
              {
                  title: "কন্ডিশন ফ্যাক্ট শিট",
                  description: "বিভিন্ন কোলোরেক্টাল অবস্থা সম্পর্কে গভীর তথ্য।",
                  link: "/#"
              },
              {
                  title: "রোগী সমর্থন",
                  description: "সহায়তা গোষ্ঠীর সাথে সংযোগ স্থাপন করুন এবং আপনার যাত্রার জন্য সংস্থান খুঁজুন।",
                  link: "/#"
              }
          ],
        },
        videoPortfolio: {
            title: "রোগীদের মতামত",
            subtitle: "আমাদের রোগীদের অভিজ্ঞতা সম্পর্কে শুনুন।",
            items: [
                { id: "eO34_18nboI", title: "রোগীর পর্যালোচনা ১" },
                { id: "dQw4w9WgXcQ", title: "রোগীর পর্যালোচনা ২" },
            ]
        },
        cta: {
          title: "আরও প্রশ্ন আছে?",
          subtitle: "আমরা সাহায্য করতে এখানে আছি। আপনার নির্দিষ্ট প্রয়োজন এবং উদ্বেগ নিয়ে আলোচনা করার জন্য একটি পরামর্শের সময়সূচী নির্ধারণ করুন।",
          button: "একটি পরামর্শ বুক করুন",
        },
      },
      contact: {
        title: "যোগাযোগ করুন",
        subtitle: "আমরা আপনার প্রশ্নের উত্তর দিতে এবং একটি পরামর্শের সময়সূচী নির্ধারণ করতে সহায়তা করার জন্য এখানে আছি।",
        form: {
          title: "আমাদের একটি বার্তা পাঠান",
          subtitle: "দয়া করে শুধুমাত্র সাধারণ অনুসন্ধানের জন্য এই ফর্মটি ব্যবহার করুন। চিকিৎসা সংক্রান্ত প্রশ্নের জন্য, দয়া করে একটি অ্যাপয়েন্টমেন্ট বুক করুন। আপনার গোপনীয়তার জন্য ফর্মটি HIPAA অনুবর্তী।",
        },
        info: {
          title: "যোগাযোগের তথ্য",
          appointment: "অ্যাপয়েন্টমেন্টের জন্য:",
          addressTitle: "ডাঃ ইরফান কোলোরেক্টাল সেন্টার",
          addressLine1: "সিটি টাওয়ার, ৪৪/৭ পান্থপথ",
          addressLine2: "ঢাকা-১২০৫, বাংলাদেশ",
        },
        hours: {
          title: "ক্লিনিকের সময়",
          days1: "শনি - বৃহস্পতিবার",
          time1: "সন্ধ্যা ৬:০০ - রাত ৯:০০",
          days2: "শুক্রবার",
          time2: "বন্ধ",
        },
        location: {
          title: "আমাদের অবস্থান",
        }
      },
    forms: {
      appointment: {
        title: "অ্যাপয়েন্টমেন্টের জন্য অনুরোধ",
        subtitle: "নীচের ফর্মটি পূরণ করুন এবং আমরা নিশ্চিত করতে আপনার সাথে যোগাযোগ করব।",
        labels: {
          name: "পুরো নাম",
          phone: "ফোন নম্বর",
          email: "ইমেল ঠিকানা",
          date: "পছন্দের তারিখ",
          message: "অতিরিক্ত বার্তা (ঐচ্ছিক)",
        },
        placeholders: {
          name: "জন ডো",
          phone: "০১XXXXXXXXX",
          email: "you@example.com",
          date: "একটি তারিখ নির্বাচন করুন",
          message: "আপনার পরিদর্শনের কারণ সম্পর্কে আমাদের কিছু বলুন",
        },
        button: "অনুরোধ জমা দিন",
        success: {
            title: "সফল!",
            message: "অ্যাপয়েন্টমেন্টের অনুরোধ গৃহীত হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
        },
        error: {
            title: "ত্রুটি",
            message: "কিছু ভুল হয়েছে। দয়া করে আবার চেষ্টা করুন।",
        },
        validation: {
            name: "নাম কমপক্ষে ২ অক্ষরের হতে হবে।",
            phone: "অনুগ্রহ করে একটি বৈধ ফোন নম্বর দিন।",
            email: "অনুগ্রহ করে একটি বৈধ ইমেল ঠিকানা দিন।",
            date: "অ্যাপয়েন্টমেন্টের জন্য একটি তারিখ প্রয়োজন।",
        }
      },
      contact: {
        labels: {
          name: "পুরো নাম",
          email: "ইমেল ঠিকানা",
          subject: "বিষয়",
          message: "বার্তা",
        },
        placeholders: {
          name: "জন ডো",
          email: "you@example.com",
          subject: "একটি পরিষেবা সম্পর্কে প্রশ্ন",
          message: "আপনার বার্তা এখানে...",
        },
        button: "বার্তা পাঠান",
        success: {
            title: "সফল!",
            message: "আপনার বার্তা পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
        },
        error: {
            title: "ত্রুটি",
            message: "কিছু ভুল হয়েছে। দয়া করে আবার চেষ্টা করুন।",
        },
        validation: {
            name: "নাম কমপক্ষে ২ অক্ষরের হতে হবে।",
            email: "অনুগ্রহ করে একটি বৈধ ইমেল ঠিকানা দিন।",
            subject: "বিষয় কমপক্ষে ৫ অক্ষরের হতে হবে।",
            message: "বার্তা কমপক্ষে ১০ অক্ষরের হতে হবে।",
        }
      }
    }
  }
};

export const ICONS = {
  services: {
    "Advanced Laser Surgery": Stethoscope,
    "Complete Piles (Hemorrhoids) Care": HeartPulse,
    "Anorectal Conditions": CheckCircle,
    "Digestive & Bowel Disorders": Waves,
    "Cancer Care & Polyp Removal": ShieldCheck,
    "Diagnostic Tests": Microscope,
    "উন্নত লেজার সার্জারি": Stethoscope,
    "সম্পূর্ণ পাইলস (অর্শ) সেবা": HeartPulse,
    "অ্যানোরেক্টাল অবস্থা": CheckCircle,
    "হজম এবং অন্ত্রের রোগ": Waves,
    "ক্যান্সার সেবা এবং পলিপ অপসারণ": ShieldCheck,
    "ডায়াগনস্টিক পরীক্ষা": Microscope,
  },
  resources: {
      "Pre-Operative Guide": Download,
      "Post-Operative Care": Download,
      "Condition Fact Sheets": BookText,
      "Patient Support": LifeBuoy,
      "প্রাক-অপারেটিভ গাইড": Download,
      "পোস্ট-অপারেটিভ কেয়ার": Download,
      "কন্ডিশন ফ্যাক্ট শিট": BookText,
      "রোগী সমর্থন": LifeBuoy,
  },
  whyChooseUs: [ShieldCheck, CheckCircle, HeartPulse],
  about: {
      credentials: Medal,
      specializations: Star,
  },
  contact: {
      phone: Phone,
      mail: Mail,
      map: MapPin,
      clock: Clock,
  },
  footer: {
      facebook: Facebook,
      youtube: Youtube,
      mail: Mail,
      phone: Phone,
      map: MapPin,
  }
};
