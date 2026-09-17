import React from "react";

export const solutions = [
  {
    id: "structured-cabling",
    title: "Structured Cabling",
    description: "Reliable and scalable cabling infrastructure for seamless connectivity.",
    longDescription: [
      "Structured cabling forms the critical backbone of your organization's entire communication system. At Unitech, we design and install high-performance copper and fiber infrastructure that supports both your current and future network demands, ensuring seamless connectivity across your facility.",
      "Our end-to-end cabling solutions are engineered to minimize downtime and eliminate bottlenecks. Whether you are outfitting a new corporate headquarters or upgrading an existing network, our certified technicians ensure every installation meets strict international standards for quality and performance."
    ],
    benefits: [
      "High-Speed Data Transmission",
      "Future-Proof Scalability",
      "Reduced Network Downtime",
      "Simplified Troubleshooting"
    ],
    image: "/images/solutions/structured-cabling.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V9a8 8 0 0 1 16 0v10" /><path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" /><path d="M9 19h6" /></svg>
    ),
  },
  {
    id: "datacenter-solution",
    title: "Datacenter Solution",
    description: "End-to-end data center infrastructure for high performance and reliability.",
    longDescription: [
      "Your data center is the heart of your digital operations. We provide comprehensive data center solutions that encompass design, deployment, and optimization. From cooling and power management to rack optimization and security, we build environments that guarantee high availability and efficiency.",
      "Our team understands the intense demands placed on modern data centers. We focus on creating agile, scalable infrastructures that can seamlessly handle massive data loads while keeping operational costs and energy consumption strictly under control."
    ],
    benefits: [
      "Maximum Uptime Guarantee",
      "Optimized Thermal Management",
      "Energy Efficient Operations",
      "Rapid Scalability & Deployment"
    ],
    image: "/images/solutions/data-center.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
    ),
  },
  {
    id: "cctv",
    title: "CCTV and Video Surveillance",
    description: "Advanced security solutions for safer environments.",
    longDescription: [
      "Protecting your assets, employees, and premises requires intelligent, reliable surveillance. We deploy state-of-the-art CCTV and video surveillance systems that offer crystal-clear, high-definition monitoring, day or night. Our solutions integrate seamlessly into your existing IT infrastructure.",
      "Beyond just recording video, our advanced systems feature smart analytics, facial recognition, and remote access capabilities. This provides your security team with proactive alerts and real-time situational awareness, ensuring rapid response to any potential threat."
    ],
    benefits: [
      "24/7 High-Definition Monitoring",
      "Intelligent Video Analytics",
      "Remote Mobile Access",
      "Deterrence of Unauthorized Access"
    ],
    image: "/images/solutions/security-and-surveillances.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="11" r="3" /></svg>
    ),
  },
  {
    id: "ups",
    title: "UPS & Power Protection",
    description: "Uninterrupted power for uninterrupted growth.",
    longDescription: [
      "Power anomalies and outages can result in catastrophic data loss and hardware damage. Our UPS (Uninterruptible Power Supply) and power protection solutions ensure that your critical systems remain online, no matter what happens to the main grid.",
      "We supply and configure industrial-grade UPS systems tailored to your load requirements. From compact units for small server rooms to massive multi-megawatt systems for enterprise data centers, we guarantee clean, consistent power delivery to safeguard your business continuity."
    ],
    benefits: [
      "Zero Downtime During Outages",
      "Protection Against Power Surges",
      "Extended Hardware Lifespan",
      "Automated Safe Shutdowns"
    ],
    image: "/images/solutions/power-protection.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    ),
  },
  {
    id: "wireless",
    title: "Wireless Communication & LTE",
    description: "Enterprise wireless and LTE solutions for always-on connectivity.",
    longDescription: [
      "In a mobile-first world, robust wireless connectivity is non-negotiable. We design enterprise-grade Wi-Fi and private LTE networks that eliminate dead zones, accommodate high user densities, and provide lightning-fast internet access across vast campuses and facilities.",
      "Our wireless architectures are built with security and seamless roaming in mind. We conduct thorough RF (Radio Frequency) site surveys to position access points perfectly, ensuring that your workforce stays connected and productive, whether they are in the office or on the warehouse floor."
    ],
    benefits: [
      "Seamless Campus-Wide Coverage",
      "High-Density Device Support",
      "Enterprise-Grade Encryption",
      "Zero-Drop Roaming"
    ],
    image: "/images/solutions/lte.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>
    ),
  },
  {
    id: "fiber-optic",
    title: "Fiber Optic",
    description: "High-bandwidth optical fiber solutions for a faster, smarter network.",
    longDescription: [
      "When speed and bandwidth are critical, fiber optic technology is the only answer. We specialize in the deployment, splicing, and testing of high-capacity fiber optic networks. Our solutions provide the ultimate highway for your data, capable of handling extreme throughput with virtually zero latency.",
      "Ideal for campus environments, data center interconnects, and heavy-duty industrial applications, our fiber installations are resilient against electromagnetic interference. We build infrastructures that are ready to handle the exponential data growth of tomorrow."
    ],
    benefits: [
      "Blazing Fast Data Transfer",
      "Immunity to Interference",
      "Secure, Hard-to-Tap Lines",
      "Long-Distance Signal Integrity"
    ],
    image: "/images/solutions/fiber-optic.webp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
    ),
  },
];
