export const HERO_DATA = {
  title: "Full Home Interiors",
  subtitle:
    "Transform your home with beautifully designed spaces crafted to match your lifestyle.",
  buttonText: "Book Online Consultation",
  buttonLink: "/contact",
  backgroundImage:
    "https://ik.imagekit.io/bowr9614/Modular%20Interiors/ModularHeroSection.jpg",
};

export const INTRODUCTION_TEXT =
  "Transform your home with beautifully designed spaces crafted to match your lifestyle, taste and everyday needs. At KalaKruti, we help you bring your interior vision to life with thoughtful planning and seamless execution.";

export const SERVICES = [
  {
    id: 1,
    title: "Interior Design",
    description:
      "Expert design consultation and space planning to create your dream home.",
    image:
      "https://i.pinimg.com/1200x/99/f8/7e/99f87e3b6e41038087b22d64f32eed30.jpg",
    alt: "Interior Design",
  },
  {
    id: 2,
    title: "Construction & Installation",
    description:
      "Professional construction and installation services for all your interior needs.",
    image: "https://ik.imagekit.io/bowr9614/Construcction.JPG",
    alt: "Construction & Installation",
  },
  {
    id: 3,
    title: "Kitchen Design",
    description:
      "Modern kitchen designs with premium materials and smart storage solutions.",
    image:
      "https://i.pinimg.com/1200x/23/0f/eb/230febf95dcc2e52e903f0a1652dab3b.jpg",
    alt: "Kitchen Design",
  },
];

export const JOURNEY_SNAPSHOT_DATA = {
  title: "Your journey in a snapshot",
  description:
    "At KalaKruti, we make setting up your home a process as comfortable as living in it.",
  processSteps: [
    {
      id: 1,
      stepNumber: 1,
      title: "Booking",
      duration: "Typically 2 weeks*",
      payment: "You pay 5%**",
      hasMilestone: true,
      hasBorder: true,
    },
    {
      id: 2,
      stepNumber: 2,
      title: "Design Phase",
      duration: "Typically 2 months*",
      payment: "You pay 60%",
      hasMilestone: true,
      hasBorder: false,
    },
    {
      id: 3,
      stepNumber: 3,
      title: "Manufacturing & Installation",
      duration: "Typically 3 months*",
      payment: "You pay 100%",
      hasMilestone: true,
      hasBorder: false,
    },
    {
      id: 4,
      stepNumber: 4,
      title: "Move-in",
      duration: null,
      payment: null,
      hasMilestone: false,
      hasBorder: false,
    },
  ],
  processDetails: {
    sectionTitle: "Booking",
    description:
      "Say hi to your designer and kick-start your dream with a design proposal.",
    steps: [
      {
        id: 1,
        title: "Fill form",
        description:
          "Share your basic information and property details in a quiz.",
      },
      {
        id: 2,
        title: "Get a call",
        description:
          "A KalaKruti executive connects with you to understand your requirements.",
      },
      {
        id: 3,
        title: "Share your floor plan",
        description:
          "We match you to a KalaKruti designer based on your requirements.",
      },
      {
        id: 4,
        title: "Speak to your designer",
        description:
          "Your designer takes the time to understand you and your family's needs.",
      },
      {
        id: 5,
        title: "Design proposal",
        description:
          "A design proposal and a tentative quote are created based on your budget.",
      },
      {
        id: 6,
        title: "Visit an Experience Centre",
        description:
          "Get a presentation on your home interiors at an EC or via an online call.",
      },
      {
        id: 7,
        title: "Revised quote",
        description: "Share your feedback and receive a revised proposal.",
      },
      {
        id: 8,
        title: "Book with us",
        description:
          "You pay 10% or Rs.25,000 (whichever is higher) to book with KalaKruti",
        hasMilestone: true,
      },
    ],
  },
};

export const TEAM_DATA = {
  title: "The team behind your dream",
  description:
    "It takes having the right people to bring dreams to life - and we make sure you get the best.",
  members: [
    {
      id: 1,
      icon: "👩‍🎨",
      title: "Your Designer",
      subtitle: "An expert in full home design",
      description:
        "Your designer will translate your family's personality and needs into a wholesome design.",
      education: "Masters / Bachelors in Interior Design",
      experience: "6+ years",
      projectsManaged: "Over 15 homes",
      skills: [
        "Experienced in designing across styles & themes",
        "Space planning",
        "Civil/core materials know-how",
        "Furniture & furnishing",
      ],
    },
    {
      id: 2,
      icon: "👷‍♂️",
      title: "Your Operations Lead",
      subtitle: "An expert in project management",
      description:
        "Your rep on site, your operations lead will ensure a perfect and complete home transformation.",
      education: "Civil Engineer",
      experience: "4+ years",
      projectsManaged: "Over 40 homes",
      skills: [
        "Project planning",
        "Onsite progress & tracking",
        "Custom work/services audit",
        "Quality adherence",
      ],
    },
  ],
};

export const WHY_CHOOSE_ITEMS = [
  {
    id: 1,
    title: "End-to-End Solutions",
    icon: "Home", // Material-UI icon name
  },
  {
    id: 2,
    title: "Expert Design Team",
    icon: "DesignServices", // Material-UI icon name
  },
  {
    id: 3,
    title: "Premium Quality Materials",
    icon: "VerifiedUser", // Material-UI icon name
  },
  {
    id: 4,
    title: "Timely Project Delivery",
    icon: "Schedule", // Material-UI icon name
  },
  {
    id: 5,
    title: "Transparent Pricing",
    iconUrl: "https://cdn-icons-png.flaticon.com/128/1521/1521875.png", // Custom icon URL
  },
  {
    id: 6,
    title: "Comprehensive Service",
    icon: "Build", // Material-UI icon name
  },
];

export const TESTIMONIALS_DATA = {
  title: "Here's what our homeowners have to say",
  testimonials: [
    {
      id: 1,
      quote:
        "Hats off to the entire team at KalaKruti. They finished the project ahead of time. They said 45 days but finished it much earlier.",
      author: "Rohit Paul & Shveta",
      location: "Modular kitchen, Gurugram",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      quote:
        "Our experience with KalaKruti was nice - thanks to the project managers. They worked so much on this project, and finished it on time.",
      author: "Swati & Gaurav",
      location: "2 BHK, Bangalore",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      quote:
        "This house is a part of me. We reached out to KalaKruti and they designed the house that we really wanted.",
      author: "Priya Sharma",
      location: "4 BHK interiors, Gurugram",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ],
};

export const FAQ_ITEMS = [
  {
    id: 1,
    question: "What is included in a full home interior design package?",
    answer:
      "A full home interior design package typically includes design consultation, space planning, material selection, furniture and fixture sourcing, project management, installation supervision, and post-completion support. At KalaKruti, we provide end-to-end solutions covering all aspects from design to execution.",
  },
  {
    id: 2,
    question: "How long does a full home interior project take to complete?",
    answer:
      "The timeline for a full home interior project typically ranges from 3-6 months, depending on the size of your home, scope of work, and customization requirements. A 2 BHK may take 3-4 months, while a 4 BHK or larger home may take 4-6 months. Our team provides a detailed timeline during the design phase.",
  },
  {
    id: 3,
    question: "What is the typical cost range for full home interiors?",
    answer:
      "The cost for full home interiors varies based on property size, design complexity, material choices, and customization level. Generally, it ranges from ₹800-₹2,500 per square foot. We provide transparent pricing with detailed quotes after understanding your requirements and budget. Payment is structured across booking, design approval, and project milestones.",
  },
  {
    id: 4,
    question:
      "Can I customize the design to match my personal style and preferences?",
    answer:
      "Absolutely! Our expert designers work closely with you to understand your lifestyle, preferences, and functional needs. We offer complete customization across design styles (modern, contemporary, traditional, minimalist), color schemes, materials, furniture, lighting, and decor. Your home will reflect your unique personality and requirements.",
  },
  {
    id: 5,
    question:
      "Do you handle both design and execution, or do I need separate contractors?",
    answer:
      "KalaKruti provides end-to-end services, handling both design and execution. Our team includes expert designers, project managers, and skilled craftsmen. We manage everything from civil work, electrical, plumbing, carpentry, painting, to final installations. You don't need to coordinate with multiple contractors - we take care of it all.",
  },
  {
    id: 6,
    question: "What materials and brands do you use for full home interiors?",
    answer:
      "We use premium, quality-assured materials from trusted brands. This includes high-grade plywood, laminates, hardware, paints, tiles, sanitaryware, lighting, and furniture. We offer a range of options across different price points and can source specific brands based on your preferences and budget.",
  },

  {
    id: 8,
    question: "What happens if there are delays or issues during the project?",
    answer:
      "We have dedicated project managers who closely monitor progress and ensure timely completion. In case of any delays due to unforeseen circumstances, we communicate transparently and work to minimize impact. Our team is committed to quality and timely delivery, with regular updates throughout the project lifecycle.",
  },
];
