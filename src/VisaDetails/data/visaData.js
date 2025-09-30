// // src/data/visaData.js
// const visaData = {
//   dubai: {
//     title: "Dubai Tourist / Work / Visit Visa",
//     description: "Apply for Dubai visa easily. Fill the form below to start your application process.",
//     video: "/Videos/Dubai2.mp4",
//     image: "/Dubai.png",
//     documents: [
//       "Passport (valid for 6 months)",
//       "Passport-size photograph",
//       "Flight tickets",
//       "Hotel booking"
//     ],
//     highlights: [
//       "Fast processing",
//       "Multiple entry options",
//       "No hidden fees"
//     ],
//     steps: [
//       "Fill the online form",
//       "Upload required documents",
//       "Pay the visa fee",
//       "Receive confirmation email"
//     ],
//     tips: [
//       "Apply at least 2 weeks in advance",
//       "Check your passport validity",
//       "Ensure all documents are scanned clearly"
//     ],
//     travelInfo: {
//     intro: "Dubai is a city of wonders where modern skyscrapers meet cultural heritage. From luxurious shopping malls to golden deserts, Dubai has something for everyone.",
//     highlights: [
//       {
//         title: "Burj Khalifa",
//         img: "/images/dubai/burj.jpg",
//         desc: "The tallest building in the world – a must-see landmark."
//       },
//       {
//         title: "Desert Safari",
//         img: "/images/dubai/desert.jpg",
//         desc: "Experience dune bashing, camel rides, and traditional shows."
//       },
//       {
//         title: "Dubai Mall",
//         img: "/images/dubai/mall.jpg",
//         desc: "Shop, dine, and explore the world’s largest shopping mall."
//       },
//       {
//         title: "Palm Jumeirah",
//         img: "/images/dubai/palm.jpg",
//         desc: "An artificial island known for luxury resorts and beaches."
//       }
//     ]
//   },
//   usa: {
//     title: "USA Business & Tourist Visa (B1/B2)",
//     description: "Apply for USA visa. Interview required for approval.",
//     video: "/Videos/USA.mp4",
//     image: "/USA.jpg",
//     documents: [
//       "Passport (valid for 6 months)",
//       "Passport-size photograph",
//       "DS-160 Form confirmation",
//       "Interview appointment letter",
//       "Financial statements"
//     ],
//     highlights: [
//       "Requires personal interview",
//       "Multiple entry B1/B2 options",
//       "Processing 5-10 working days"
//     ],
//     steps: [
//       "Fill DS-160 online form",
//       "Schedule visa interview",
//       "Attend the interview at the embassy",
//       "Receive your visa"
//     ],
//     tips: [
//       "Prepare financial documents",
//       "Be honest during the interview",
//       "Carry supporting documents"
//     ],
//     travelInfo: "USA offers a variety of attractions for tourists, including national parks, cities, and cultural experiences."
//   },

//   schengen: {
//     title: "Schengen Visa",
//     description: "Travel across 26 European countries. Processing: 15 days.",
//     video: null,
//     image: "/Schengen.jpg",
//     documents: [
//       "Passport (valid for 3 months beyond stay)",
//       "Passport-size photograph",
//       "Travel insurance",
//       "Flight & hotel booking",
//       "Proof of financial means"
//     ],
//     highlights: [
//       "Single visa for multiple countries",
//       "Short stay up to 90 days",
//       "Easy to apply with all documents"
//     ],
//     steps: [
//       "Fill the application form",
//       "Book appointment at embassy/consulate",
//       "Submit documents & biometrics",
//       "Receive visa approval"
//     ],
//     tips: [
//       "Travel insurance is mandatory",
//       "Book appointment in advance",
//       "Check specific country requirements"
//     ],
//     travelInfo: "Schengen countries include France, Germany, Italy, Spain, and 22 more European nations, making travel easy."
//   },

//   thailand: {
//     title: "Thailand Tourist / e-Visa",
//     description: "Tourist, Visa on Arrival & e-Visa available. Processing: 2-5 days.",
//     video: null,
//     image: "/Thailand.webp",
//     documents: [
//       "Passport (valid for 6 months)",
//       "Passport-size photograph",
//       "Flight tickets",
//       "Hotel booking"
//     ],
//     highlights: [
//       "Tourist visa up to 60 days",
//       "Quick e-Visa processing",
//       "Visa on Arrival option available"
//     ],
//     steps: [
//       "Fill online application",
//       "Upload required documents",
//       "Pay visa fee",
//       "Receive e-Visa approval"
//     ],
//     tips: [
//       "Ensure hotel bookings match your stay",
//       "Check for Visa on Arrival eligibility",
//       "Carry extra copies of documents"
//     ],
//     travelInfo: "Thailand is known for its beaches, temples, and rich cultural experiences."
//   },

//   malaysia: {
//     title: "Malaysia Tourist / eNTRI / Work Visa",
//     description: "Processing: 3-7 days. Fill form below to apply.",
//     video: null,
//     image: "/Malaysia.jfif",
//     documents: [
//       "Passport (valid for 6 months)",
//       "Passport-size photograph",
//       "Flight tickets",
//       "Hotel booking",
//       "Work contract (if applying for work visa)"
//     ],
//     highlights: [
//       "eNTRI visa for short stay",
//       "Quick processing 3-7 days",
//       "Multiple visa types"
//     ],
//     steps: [
//       "Fill online visa form",
//       "Upload documents",
//       "Pay visa fee",
//       "Receive approval via email"
//     ],
//     tips: [
//       "Ensure passport validity",
//       "Work visa requires employer documents",
//       "Apply in advance"
//     ],
//     travelInfo: "Malaysia is famous for its beaches, rainforests, and multicultural cities like Kuala Lumpur."
//   },

//   vietnam: {
//     title: "Vietnam Tourist / e-Visa",
//     description: "Processing: 3-5 days. Apply online quickly.",
//     video: null,
//     image: "/Vietnam.jfif",
//     documents: [
//       "Passport (valid for 6 months)",
//       "Passport-size photograph",
//       "Flight tickets",
//       "Hotel booking",
//       "Visa approval letter"
//     ],
//     highlights: [
//       "Online e-Visa available",
//       "Stay up to 30 days",
//       "Fast approval process"
//     ],
//     steps: [
//       "Fill online e-Visa form",
//       "Upload documents",
//       "Pay visa fee",
//       "Receive visa approval"
//     ],
//     tips: [
//       "Check visa validity before travel",
//       "Carry printout of approval letter",
//       "Apply at least a week in advance"
//     ],
//     travelInfo: "Vietnam offers beautiful landscapes, historic cities, and vibrant street food culture."
//   },

//   srilanka: {
//     title: "Sri Lanka ETA Visa",
//     description: "Electronic Travel Authorization. Processing: 1-3 days.",
//     video: null,
//     image: "/Srilanka.jfif",
//     documents: [
//       "Passport (valid for 6 months)",
//       "Passport-size photograph",
//       "Flight tickets",
//       "Hotel booking"
//     ],
//     highlights: [
//       "ETA valid for 30 days",
//       "Quick online processing",
//       "Tourist and business options"
//     ],
//     steps: [
//       "Fill ETA online form",
//       "Submit documents & payment",
//       "Receive ETA via email",
//       "Travel to Sri Lanka"
//     ],
//     tips: [
//       "Apply at least 3 days in advance",
//       "Check passport validity",
//       "Carry ETA printout while traveling"
//     ],
//     travelInfo: "Sri Lanka is known for its beautiful beaches, tea plantations, and ancient temples."
//   }
// };

// export default visaData;

// src/data/visaData.js
const visaData = {
  dubai: {
    title: "Dubai Tourist / Work / Visit Visa",
    description: "Apply for Dubai visa easily. Fill the form below to start your application process.",
    video: "/VisaDetails/Videos/DUBAI.mp4",
    image: "/Dubai.png",
    documents: [
      "Passport (valid for 6 months)",
      "Passport-size photograph",
      "Flight tickets",
      "Hotel booking"
    ],
    highlights: ["Fast processing", "Multiple entry options", "No hidden fees"],
    steps: [
      "Fill the online form",
      "Upload required documents",
      "Pay the visa fee",
      "Receive confirmation email"
    ],
    tips: [
      "Apply at least 2 weeks in advance",
      "Check your passport validity",
      "Ensure all documents are scanned clearly"
    ],
    travelInfo: {
      intro: "Dubai is a city of wonders where modern skyscrapers meet cultural heritage. From luxurious shopping malls to golden deserts, Dubai has something for everyone.",
      highlights: [
        {
          title: "Burj Khalifa",
          img: "/VisaDetails/Images/Dubai/Burjkhalifa.jpg",
          desc: "The tallest building in the world – a must-see landmark."
        },
        {
          title: "Desert Safari",
          img: "/VisaDetails/Images/Dubai/DesertSafari.jpg",
          desc: "Experience dune bashing, camel rides, and traditional shows."
        },
        {
          title: "Dubai Mall",
          img: "/VisaDetails/Images/Dubai/DubaiMall.jpg",
          desc: "Shop, dine, and explore the world’s largest shopping mall."
        },
        {
          title: "Palm Jumeirah",
          img: "/VisaDetails/Images/Dubai/PalmJumeraih.jpg",
          desc: "An artificial island known for luxury resorts and beaches."
        }
      ]
    }
  },

  usa: {
    title: "USA Business & Tourist Visa (B1/B2)",
    description: "Apply for USA visa. Interview required for approval.",
    video: "/VisaDetails/Videos/USA1.mp4",
    image: "/USA.jpg",
    documents: [
      "Passport (valid for 6 months)",
      "Passport-size photograph",
      "DS-160 Form confirmation",
      "Interview appointment letter",
      "Financial statements"
    ],
    highlights: ["Requires personal interview", "Multiple entry B1/B2 options", "Processing 5-10 working days"],
    steps: [
      "Fill DS-160 online form",
      "Schedule visa interview",
      "Attend the interview at the embassy",
      "Receive your visa"
    ],
    tips: ["Prepare financial documents", "Be honest during the interview", "Carry supporting documents"],
    travelInfo: {
      intro: "The USA offers endless attractions – from bustling cities to natural wonders and cultural experiences.",
      highlights: [
        {
          title: "Statue of Liberty",
          img: "/VisaDetails/Images/USA/StatueOfLiberty.jpg",
          desc: "An iconic symbol of freedom located in New York City."
        },
        {
          title: "Grand Canyon",
          img: "/VisaDetails/Images/USA/GrandCanyon.jpg",
          desc: "One of the world’s natural wonders with breathtaking views."
        },
        {
          title: "Las Vegas",
          img: "/VisaDetails/Images/USA/LasVegas.jpg",
          desc: "The entertainment capital famous for nightlife and casinos."
        },
        {
          title: "Hollywood",
          img: "/VisaDetails/Images/USA/Hollywood.jpg",
          desc: "The global hub of movies and television."
        }
      ]
    }
  },

  schengen: {
    title: "Schengen Visa",
    description: "Travel across 26 European countries. Processing: 15 days.",
    video: "/VisaDetails/Videos/SCHENGAN.mp4",
    image: null,
    documents: [
      "Passport (valid for 3 months beyond stay)",
      "Passport-size photograph",
      "Travel insurance",
      "Flight & hotel booking",
      "Proof of financial means"
    ],
    highlights: ["Single visa for multiple countries", "Short stay up to 90 days", "Easy to apply with all documents"],
    steps: [
      "Fill the application form",
      "Book appointment at embassy/consulate",
      "Submit documents & biometrics",
      "Receive visa approval"
    ],
    tips: ["Travel insurance is mandatory", "Book appointment in advance", "Check specific country requirements"],
    travelInfo: {
      intro: "The Schengen Visa lets you explore Europe’s most beautiful destinations across 26 countries.",
      highlights: [
        {
          title: "Eiffel Tower (France)",
          img: "/VisaDetails/Images/Schengen/EifelTower.jpg",
          desc: "A global cultural icon located in Paris."
        },
        {
          title: "Colosseum (Italy)",
          img: "/VisaDetails/Images/Schengen/ColossemItaly.jpg",
          desc: "A historic amphitheater in Rome."
        },
        {
          title: "Santorini (Greece)",
          img: "/VisaDetails/Images/Schengen/SantoriniGreece.jpg",
          desc: "Picturesque white houses with blue domes overlooking the sea."
        },
        {
          title: "Swiss Alps (Switzerland)",
          img: "/VisaDetails/Images/Schengen/SwissalpsSwitzzerland.jpg",
          desc: "A paradise for nature lovers and adventure seekers."
        }
      ]
    }
  },

  thailand: {
    title: "Thailand Tourist / e-Visa",
    description: "Tourist, Visa on Arrival & e-Visa available. Processing: 2-5 days.",
    video: "/VisaDetails/Videos/THAILAND.mp4",
    image: null,
    documents: ["Passport (valid for 6 months)", "Passport-size photograph", "Flight tickets", "Hotel booking"],
    highlights: ["Tourist visa up to 60 days", "Quick e-Visa processing", "Visa on Arrival option available"],
    steps: ["Fill online application", "Upload required documents", "Pay visa fee", "Receive e-Visa approval"],
    tips: [
      "Ensure hotel bookings match your stay",
      "Check for Visa on Arrival eligibility",
      "Carry extra copies of documents"
    ],
    travelInfo: {
      intro: "Thailand is known for tropical beaches, royal palaces, and rich cultural heritage.",
      highlights: [
        {
          title: "Bangkok Temples",
          img: "/VisaDetails/Images/Thailand/BangkokTemples.jpg",
          desc: "Visit the Grand Palace and Wat Arun in the capital city."
        },
        {
          title: "Phuket Beaches",
          img: "/VisaDetails/Images/Thailand/PhuketBeaches.jpg",
          desc: "Relax on stunning beaches and enjoy water activities."
        },
        {
          title: "Chiang Mai",
          img: "/VisaDetails/Images/Thailand/ChiangMai.jpg",
          desc: "A city surrounded by mountains and temples."
        },
        {
          title: "Floating Markets",
          img: "/VisaDetails/Images/Thailand/FloatingMarkets.jpg",
          desc: "Shop from boats selling fresh fruits and food."
        }
      ]
    }
  },

  malaysia: {
    title: "Malaysia Tourist / eNTRI / Work Visa",
    description: "Processing: 3-7 days. Fill form below to apply.",
    video: "/VisaDetails/Videos/MALAYSIA.mp4",
    image: null,
    documents: [
      "Passport (valid for 6 months)",
      "Passport-size photograph",
      "Flight tickets",
      "Hotel booking",
      "Work contract (if applying for work visa)"
    ],
    highlights: ["eNTRI visa for short stay", "Quick processing 3-7 days", "Multiple visa types"],
    steps: ["Fill online visa form", "Upload documents", "Pay visa fee", "Receive approval via email"],
    tips: ["Ensure passport validity", "Work visa requires employer documents", "Apply in advance"],
    travelInfo: {
      intro: "Malaysia is a melting pot of cultures, modern cities, and tropical landscapes.",
      highlights: [
        {
          title: "Petronas Towers",
          img: "/VisaDetails/Images/Malaysia/PetronaTowers.jpg",
          desc: "Iconic twin towers in Kuala Lumpur."
        },
        {
          title: "Langkawi",
          img: "/VisaDetails/Images/Malaysia/LangKawi.jpg",
          desc: "A tropical paradise of beaches and islands."
        },
        {
          title: "Batu Caves",
          img: "/VisaDetails/Images/Malaysia/BatuCaves.jpg",
          desc: "A Hindu shrine with a giant golden statue."
        },
        {
          title: "Penang",
          img: "/VisaDetails/Images/Malaysia/Penang.jpg",
          desc: "Famous for its street food and cultural heritage."
        }
      ]
    }
  },

  vietnam: {
    title: "Vietnam Tourist / e-Visa",
    description: "Processing: 3-5 days. Apply online quickly.",
    video: "/VisaDetails/Videos/VIETNAM.mp4",
    image: null,
    documents: [
      "Passport (valid for 6 months)",
      "Passport-size photograph",
      "Flight tickets",
      "Hotel booking",
      "Visa approval letter"
    ],
    highlights: ["Online e-Visa available", "Stay up to 30 days", "Fast approval process"],
    steps: ["Fill online e-Visa form", "Upload documents", "Pay visa fee", "Receive visa approval"],
    tips: ["Check visa validity before travel", "Carry printout of approval letter", "Apply at least a week in advance"],
    travelInfo: {
      intro: "Vietnam is a land of breathtaking landscapes, ancient cities, and rich cuisine.",
      highlights: [
        {
          title: "Ha Long Bay",
          img: "/VisaDetails/Images/Vietnam/HalongBay.jpg",
          desc: "Stunning limestone islands and emerald waters."
        },
        {
          title: "Hoi An",
          img: "/VisaDetails/Images/Vietnam/Hoian.jpg",
          desc: "A preserved ancient town with colorful lanterns."
        },
        {
          title: "Ho Chi Minh City",
          img: "/VisaDetails/Images/Vietnam/HoChiMinahCity.jpg",
          desc: "A bustling city with modern life and history."
        },
        {
          title: "Sapa",
          img: "/VisaDetails/Images/Vietnam/Sapa.jpg",
          desc: "Terraced rice fields and mountain views."
        }
      ]
    }
  },

  srilanka: {
    title: "Sri Lanka ETA Visa",
    description: "Electronic Travel Authorization. Processing: 1-3 days.",
    video: "/VisaDetails/Videos/SRILANKA.mp4",
    image: null,
    documents: ["Passport (valid for 6 months)", "Passport-size photograph", "Flight tickets", "Hotel booking"],
    highlights: ["ETA valid for 30 days", "Quick online processing", "Tourist and business options"],
    steps: ["Fill ETA online form", "Submit documents & payment", "Receive ETA via email", "Travel to Sri Lanka"],
    tips: ["Apply at least 3 days in advance", "Check passport validity", "Carry ETA printout while traveling"],
    travelInfo: {
      intro: "Sri Lanka is known for its tropical beaches, tea plantations, and cultural heritage.",
      highlights: [
        {
          title: "Sigiriya Rock",
          img: "/VisaDetails/Images/SriLanka/SigiriyaRock.jpg",
          desc: "An ancient rock fortress with stunning views."
        },
        {
          title: "Kandy Temple",
          img: "/VisaDetails/Images/SriLanka/KandyaTemple.jpg",
          desc: "Sacred Temple of the Tooth Relic."
        },
        {
          title: "Galle Fort",
          img: "/VisaDetails/Images/SriLanka/Gallefort.jpg",
          desc: "A UNESCO World Heritage site with colonial history."
        },
        {
          title: "Ella",
          img: "/VisaDetails/Images/SriLanka/Ella.jpg",
          desc: "A beautiful hill town surrounded by tea plantations."
        }
      ]
    }
  }
};

export default visaData;
