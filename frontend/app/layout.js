import {Sora, Inter} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { StoreProvider } from "@/redux/StoreProvider";
import Footer from "@/components/Footer";


const fontSora = Sora({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-sora",
});

const fontInter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
});

export const metadata = {
	title: "PCB Design, PCB Manufacturing & Assembly in San Jose | SSC",
	category: "Electronics Manufacturing Services",
	description: "SSC provides PCB design, PCB fabrication, PCB assembly, and PCB prototyping services in San Jose, California. Supporting Silicon Valley startups and Bay Area technology companies from prototype development to scalable global PCB production.",
	keywords:  [
		"PCB design San Jose",
		"PCB manufacturing San Jose",
		"PCB fabrication San Jose",
		"PCB assembly San Jose",
		"PCB prototyping San Jose",
		"PCB manufacturer Silicon Valley",
		"PCB design Silicon Valley",
		"PCB assembly Silicon Valley",
		"PCB fabrication Silicon Valley",
		"PCB manufacturing Bay Area",
		"printed circuit board manufacturer California",
		"electronics manufacturing services San Jose",
		"turnkey PCB manufacturing",
		"custom PCB manufacturing",
		"contract electronics manufacturing",
		"PCB design and layout services",
		"multilayer PCB design",
		"high speed PCB layout",
		"signal integrity PCB design",
		"advanced PCB fabrication",
		"rapid PCB prototyping",
		"prototype to production PCB",
		"scalable PCB manufacturing",
		"mass PCB production",
		"high volume PCB manufacturing",
		"low cost PCB manufacturing",
		"low cost PCB assembly",
		"overseas PCB manufacturing",
		"global PCB manufacturing",
		"cost optimized PCB production"
	],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1
		}
	},
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_REAL_URL}`,
		languages: {
			"en-US": `${process.env.NEXT_PUBLIC_REAL_URL}`,
		}
	},
	formatDetection: { telephone: true, email: true, address: true },

	openGraph: {
		title: "SSC | PCB Engineering Services & Manufacturing in San Jose",
		description: "Precision PCB design, PCB fabrication, and PCB assembly services in San Jose supporting Silicon Valley startups and Bay Area technology companies.",
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_REAL_URL}/Carousel/1.png`,
				width: 1200,
				height: 630,
				alt: "SSC PCB Design and Manufacturing Services in San Jose"
			}
		],
		type: "website",
		siteName: "SSC PCB Engineering Services & Manufacturing",
		locale: "en_US",
		url: `${process.env.NEXT_PUBLIC_REAL_URL}`
	},
	
	twitter: {
		card: "summary_large_image",
		title: "SSC | PCB Engineering Services & Manufacturing in San Jose",
		description: "PCB design, fabrication, and assembly services in San Jose supporting Silicon Valley engineers from prototype to production.",
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_REAL_URL}/Carousel/1.png`,
				alt: "SSC PCB Design and Manufacturing Services in San Jose"
			}
		]
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-icon.png",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${fontSora.variable} ${fontInter.variable}`}
			>
				<StoreProvider>
					<main className=" font-txtFont scroll-smooth overflow-hidden">
						<Navbar />
						{children}
						<Footer />
					</main>
				</StoreProvider>
			</body>
		</html>
	);
}
