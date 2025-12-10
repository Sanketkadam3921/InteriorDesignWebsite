export const HERO_DATA = {
  title: "Dream interiors made possible",
  backgroundImage:
    "https://ik.imagekit.io/bowr9614/Modular%20Interiors/ModularHeroSection.jpg",
  ctaText: "Book Online Consultation",
  ctaLink: "/contact",
};

export const INTRODUCTION_DATA = {
  title: "The complete home interiors experience",
  description:
    "No more dreaming about your interiors. KalaKruti brings together award-winning designers, service partners and brands, to help you take your home interiors from dream to reality.",
};

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
