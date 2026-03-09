const jsonLD = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ManufacturingBusiness"],
    "@id": `${process.env.NEXT_PUBLIC_REAL_URL}#scs`,
    "name": "SCS PCB Manufacturing",
    "url": `${process.env.NEXT_PUBLIC_REAL_URL}`,
    "logo": `${process.env.NEXT_PUBLIC_REAL_URL}/logo.png`,
    "description": "SCS provides PCB design, PCB fabrication, PCB assembly, and PCB prototyping services in San Jose supporting Silicon Valley startups and Bay Area technology companies from prototype to scalable production.",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-408-705-7113",
        "contactType": "request for quote",
        "areaServed": "US",
        "availableLanguage": ["English", "Vietnamese"]
    },
    "priceRange": "$$",
	"openingHoursSpecification": [
		{
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			],
			"opens": "08:00",
			"closes": "17:00"
		}
	],
    "knowsAbout": [
        "PCB design",
        "printed circuit board manufacturing",
        "PCB fabrication",
        "PCB assembly",
        "PCB prototyping",
        "turnkey PCB manufacturing",
        "electronics manufacturing services",
        "multilayer PCB design",
        "high speed PCB layout",
        "signal integrity PCB design",
        "surface mount technology assembly",
        "through hole PCB assembly",
        "PCB testing and inspection",
        "embedded software development",
        "prototype to production electronics manufacturing",
        "high volume PCB production",
        "low cost PCB manufacturing",
        "overseas PCB manufacturing",
        "electronics hardware development",
        "Silicon Valley electronics manufacturing"
    ],
    "address": [
        {
            "@type": "PostalAddress",
            "addressLocality": "San Jose",
            "addressRegion": "CA",
            "postalCode": "95112",
            "streetAddress": "148 E. Brokaw Rd.",
            "addressCountry": "US"
        },
        {
            "@type": "PostalAddress",
            "addressLocality": "Ho Chi Minh City",
            "streetAddress": "4th & 5th Floor, Kico Building, 46 Bach Dang Street, Ward 02, Tan Binh District",
            "addressCountry": "VN"
        },
        {
            "@type": "PostalAddress",
            "addressLocality": "Ho Chi Minh City",
            "streetAddress": "3rd Floor, Sacom Chip Sang Building, Hi-Tech Park, Thu Duc City",
            "addressCountry": "VN"
        }
    ],
    "areaServed": [
        {
            "@type": "City",
            "name": "San Jose"
        },
        {
            "@type": "Place",
            "name": "Silicon Valley"
        },
        {
            "@type": "Place",
            "name": "San Francisco Bay Area"
        },
        {
            "@type": "Country",
            "name": "United States"
        },
        {
            "@type": "Country",
            "name": "Vietnam"
        },
        {
            "@type": "Country",
            "name": "China"
        },
        {
            "@type": "Country",
            "name": "Malaysia"
        },
        {
            "@type": "Country",
            "name": "Thailand"
        },
        {
            "@type": "Country",
            "name": "Mexico"
        },
        {
            "@type": "Place",
            "name": "Southeast Asia"
        },
        {
            "@type": "Place",
            "name": "Global"
        }
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "PCB Services",
        "itemListElement": [
            {
                "@type": "Service",
                "name": "PCB Design",
                "description": "Professional PCB design services in San Jose creating optimized multilayer circuit board layouts with signal integrity and manufacturability."
            },
            {
                "@type": "Service",
                "name": "PCB Fabrication",
                "description": "Precision PCB fabrication services in San Jose delivering high quality printed circuit boards for advanced electronics applications."
            },
            {
                "@type": "Service",
                "name": "PCB Assembly",
                "description": "Reliable PCB assembly services including SMT assembly and through-hole assembly for advanced electronic systems."
            },
            {
                "@type": "Service",
                "name": "PCB Prototyping",
                "description": "Fast-turn PCB prototyping helping Silicon Valley engineering teams move from electronic design to working prototype boards."
            },
            {
                "@type": "Service",
                "name": "Turnkey PCB Manufacturing",
                "description": "Complete turnkey PCB manufacturing including component sourcing, fabrication, assembly, and testing supporting scalable production."
            },
            {
                "@type": "Service",
                "name": "Electronics Testing & QC",
                "description": "Advanced PCB inspection and electronics testing ensuring reliable performance for mission-critical electronic systems."
            },
            {
                "@type": "Service",
                "name": "Embedded Software Development",
                "description": "Embedded firmware and software development supporting integrated electronic hardware systems."
            }
        ]
    },

    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [

            {
                "@type": "Question",
                "name": "What PCB services does SCS provide in San Jose?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SCS provides PCB design, PCB fabrication, PCB assembly, PCB prototyping, electronics testing, and embedded software development services in San Jose supporting Silicon Valley startups and technology companies."
                }
            },

            {
                "@type": "Question",
                "name": "Do you offer PCB prototyping services in Silicon Valley?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. SCS provides rapid PCB prototyping services in San Jose helping engineers quickly move from circuit design to working prototype boards."
                }
            },

            {
                "@type": "Question",
                "name": "Do you support both low-volume and mass PCB production?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. SCS supports low-volume prototype manufacturing as well as scalable mass PCB production for electronics companies."
                }
            },

            {
                "@type": "Question",
                "name": "Do you provide turnkey PCB manufacturing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. SCS offers turnkey PCB manufacturing including component sourcing, PCB fabrication, PCB assembly, inspection, and electronics testing."
                }
            },

            {
                "@type": "Question",
                "name": "Can SCS support overseas PCB manufacturing?",
                    "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. In addition to engineering support in San Jose, SCS can coordinate manufacturing in trusted overseas production regions when projects require large-scale production."
                }
            },
            {
                "@type": "Question",
                "name": "Can you help startups develop prototype circuit boards?",
                    "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We work with Silicon Valley startups and engineering teams to develop prototype circuit boards, helping validate designs before scaling to full production."
                }
            },
            {
                "@type": "Question",
                "name": "What is the turnaround time for PCB prototyping?",
                    "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The typical turnaround time for PCB prototyping at SCS is 1-3 business days for simple designs and 3-5 business days for more complex ones."
                }
            },
            {
                "@type": "Question",
                "name": "Do you support low-volume and mass PCB production?",
                    "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We support both low-volume PCB production and scalable mass manufacturing to help companies move from prototype to high-volume electronics production."
                }
            }
        ]
    },
    "sameAs": [],
};