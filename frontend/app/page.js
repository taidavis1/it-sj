"use client";

import { Carousel } from "@/components/Carousel";
import Image from "next/image";
import React from 'react'

import Section1Img from "@/public/Section1.png";
import IndustryIcon from "@/public/Icon/IndustryIcon.svg";
import IndustryList from "@/components/IndustryList";
import ServicesData from "@/components/ServicesData";
import SwiperData from "@/components/SwiperData";

import { motion, AnimatePresence } from "motion/react";

import WhyIcon1 from "@/public/Icon/WhyIcon/1.png";
import WhyIcon2 from "@/public/Icon/WhyIcon/2.png";
import WhyIcon3 from "@/public/Icon/WhyIcon/3.png";
import WhyIcon4 from "@/public/Icon/WhyIcon/4.png";

import BG1 from "@/public/Background/1.png";
import BG2 from "@/public/Background/2.png";
import BG3 from "@/public/Background/3.png";
import BG4 from "@/public/Background/4.png";

import faqData from "@/components/FaqData";


export default function HomePage() {

	const LastData = [
		{name: "Precision PCB Manufacturing", desc: "High-precision PCB fabrication and assembly in San Jose designed for advanced electronics used across Silicon Valley industries including robotics, aerospace, and semiconductor technology.", img: BG1},
		{name: "Fast PCB Prototyping", desc: "Rapid PCB prototyping services helping Silicon Valley startups and Bay Area engineers move quickly from design concepts to functional circuit boards.", img: BG2},
		{name: "Built for Silicon Valley Innovation", desc: "Based in San Jose, we support Bay Area technology companies with reliable PCB manufacturing solutions for robotics, medical devices, EV technology, and semiconductor systems.", img: BG3},
		{name: "End-to-End Electronics Solutions", desc: "From PCB fabrication and assembly to embedded software development, we deliver complete electronics solutions that help engineers turn ideas into production-ready products.", img: BG4},
	];

	const [openIndex, setOpenIndex] = React.useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
		<div>
			<Carousel />

			<section className="bg-white">
				<div className="pb-8 lg:pb-12 px-2 pt-14 lg:pt-48 lg:px-0 mx-auto max-w-7xl">
					<div className=" lg:grid-cols-2 grid gap-12 items-center">
						<div className=" space-y-8">
							<h1 className=" lg:text-4xl text-main font-bold font-headerFont">
								Engineering Behind the Boards
							</h1>
							<div className=" text-base space-y-4">
								<p className="">
									Based in San Jose, California, ITSJ Group specializes in precision PCB manufacturing, PCB fabrication, and PCB assembly services for companies across Silicon Valley and the Bay Area. We support hardware startups, engineering teams, and technology companies with reliable printed circuit board solutions, from rapid PCB prototyping to full production manufacturing. Our focus on quality, efficiency, and consistent performance allows us to help customers move their electronic products from concept to market with confidence.
								</p>
								<p className="">
									With experience supporting industries such as aerospace, medical devices, robotics, semiconductor, and EV technology, our team understands the demanding standards required for modern electronics. By combining advanced manufacturing processes, strict quality control, and responsive customer support, ITSJ Group delivers high-precision PCB fabrication and assembly in San Jose that engineers and innovators can depend on. Whether you need fast-turn prototypes or scalable production, we are committed to providing reliable PCB solutions that power the next generation of technology.
								</p>
							</div>
						</div>
						<div className=" group">
							<div className=" overflow-hidden p-6 rounded-2xl">
								<Image src={Section1Img} alt="ItSJ-G About Us Section Image" className="w-full group-hover:scale-105 shadow-xl group-hover:opacity-55 cursor-pointer ease-in-out duration-500 rounded-2xl" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-lightGray relative">
				<div className="pb-8 lg:pb-44 px-2 pt-14 lg:pt-28 lg:px-0 mx-auto max-w-7xl">
					<div className=" space-y-10 flex flex-col items-center">
						<div className="bg-linear-to-r flex items-center justify-center space-x-[4px] text-white text-center from-[#007ec7] to-[#000d68] py-4 shadow-xl rounded-full w-[160px]">
							<Image src={IndustryIcon} className=" brightness-0 invert w-6 h-6" alt="ItSJ-G Industry Icon" />
							<span className=" text-base">
								Industries
							</span>
						</div>
						<div className=" flex space-x-2 font-bold font-headerFont lg:text-4xl  items-center">
							<span className="text-main">
								Where Our
							</span>
							<span className=" text-clip text-transparent bg-linear-to-r to-[#007ec7] from-[#000d68] bg-clip-text">
								PCB Solutions 
							</span>
							<span className="">
								Make an Impact
							</span>
						</div>
						<div className=" -translate-y-4 text-center text-lg w-2/3">
							<p className="">
								Our San Jose PCB manufacturing services support industries that depend on precision electronics, including robotics, aerospace, medical technology, and semiconductor equipment.
							</p>
						</div>
					</div>
					<div className=" grid lg:grid-cols-2 gap-12 mt-14">
						{IndustryList.map((item, index) => (
							<div key={index} className=" h-fit hover:scale-105 hover:opacity-55 transition-all ease-in-out duration-500 shadow-xl rounded-2xl">
								<div className="rounded-2xl cursor-pointer flex space-x-4">
									<Image src={item.icon} alt={item?.name} className=" w-44 h-44 rounded-l-2xl rounded-tr-2xl" />
									<div className=" space-y-4 px-4 mt-3">
										<h3 className=" text-main text-xl font-headerFont font-bold">
											{item?.name}
										</h3>
										<p className="">
											{item?.desc}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<svg 
					className='absolute text-white bottom w-full h-24 sm:h-52 -mt-24'
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 1440 320"
				>
					<path 
						fill="currentColor" 
						d="M0,64L60,53.3C120,43,240,21,360,16C480,11,600,21,720,48C840,75,960,117,1080,133.3C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"					
					>
					</path>
				</svg>
			</section>

			<section className=" -translate-y-8 bg-[url('/servicesBG.png')] bg-cover bg-center bg-no-repeat">
				<div className="pb-8 lg:pb-14 px-2 pt-14 lg:pt-14 lg:px-0 mx-auto max-w-7xl">
					<div className=" space-y-12 flex flex-col items-center">
						<div className="bg-linear-to-r flex items-center justify-center space-x-[4px] text-white text-center from-[#007ec7] to-[#000d68] py-4 shadow-xl rounded-full w-[168px]">
							<Image src={IndustryIcon} className=" brightness-0 invert w-6 h-6" alt="ItSJ-G Industry Icon" />
							<span className=" text-base">
								Our Services
							</span>
						</div>
						<div className=" flex space-x-2 font-bold font-headerFont lg:text-4xl  items-center">
							<span className="text-main">
								Complete
							</span>
							<span className=" text-clip text-transparent bg-linear-to-r to-[#007ec7] from-[#000d68] bg-clip-text">
								PCB & Electronics
							</span>
							<span className="">
								Services
							</span>
						</div>
						<div className=" -translate-y-4 text-center text-lg w-3/4">
							<p className="">
								From rapid PCB prototyping to full production, we provide PCB fabrication, PCB assembly, electronics testing, and embedded software development services in San Jose, California. Supporting Silicon Valley startups and Bay Area technology companies, our team delivers reliable solutions that help engineers turn electronic designs into high-performance products.
							</p>
						</div>
					</div>
					<div className="mt-14">
						<SwiperData data={ServicesData} />
					</div>
				</div>
			</section>

			<section className="bg-lightGray">
				<div className="pb-8 lg:pb-24 px-2 pt-14 lg:pt-28 lg:px-0 mx-auto max-w-7xl">
					<div className=" flex justify-center">
						<div className="bg-linear-to-r flex items-center justify-center space-x-[4px] text-white text-center from-[#007ec7] to-[#000d68] py-4 shadow-xl rounded-full w-[200px]">
							<Image src={IndustryIcon} className=" brightness-0 invert w-6 h-6" alt="ItSJ-G Industry Icon" />
							<span className=" text-base">
								Why Choose Us
							</span>
						</div>
					</div>
					<div className=" lg:flex-row flex-col flex items-center lg:gap-x-24 mt-20">
						<div className=" w-full flex flex-col">
							<div className=" flex space-x-2 font-bold font-headerFont lg:text-5xl  items-center">
								<span className="text-main">
									The ITSJ-G
								</span>
								<span className=" text-clip text-transparent bg-linear-to-r to-[#007ec7] from-[#000d68] bg-clip-text">
									Difference.
								</span>
							</div>
							<div className=" mt-20">
								<Image src={WhyIcon1} alt="ItSJ-G Why Choose Us Icon" className=" -translate-x-8 w-32 h-28" />
								<div className="">
									<h3 className=" border-b py-4 text-2xl font-headerFont font-bold text-main uppercase">
										Precision Engineering
									</h3>
								</div>
								<p className="mt-6 text-lg">
									We deliver high-precision PCB fabrication and assembly in San Jose, ensuring every board meets strict quality and performance standards for advanced electronics.
								</p>
							</div>
							<div className=" mt-12">
								<Image src={WhyIcon2} alt="ItSJ-G Why Choose Us Icon" className=" -translate-x-8 w-32 h-28" />
								<div className="">
									<h3 className=" border-b py-4 text-2xl font-headerFont font-bold text-main uppercase">
										Reliable Manufacturing
									</h3>
								</div>
								<p className="mt-6 text-lg">
									Our manufacturing process focuses on consistent quality, helping Silicon Valley companies produce dependable electronics from prototype to full production.
								</p>
							</div>
						</div>
						<div className=" w-full">
							<h3 className=" lg:text-xl">
								Precision PCB manufacturing and electronics services in San Jose supporting Silicon Valley innovation:
							</h3>
							<div className=" mt-16">
								<Image src={WhyIcon3} alt="ItSJ-G Why Choose Us Icon" className=" -translate-x-8 w-32 h-28" />
								<div className="">
									<h3 className=" border-b py-4 text-2xl font-headerFont font-bold text-main uppercase">
										Fast Turnaround
									</h3>
								</div>
								<p className="mt-6 text-lg">
									We support Silicon Valley startups and engineering teams with fast-turn PCB prototyping and efficient production timelines, helping companies move quickly from design to working circuit boards.
								</p>
							</div>
							<div className=" mt-12">
								<Image src={WhyIcon4} alt="ItSJ-G Why Choose Us Icon" className=" -translate-x-8 w-32 h-28" />
								<div className="">
									<h3 className=" border-b py-4 text-2xl font-headerFont font-bold text-main uppercase">
										Silicon Valley Expertise
									</h3>
								</div>
								<p className="mt-6 text-lg">
									We work closely with Silicon Valley innovators across robotics, aerospace, semiconductor, and EV industries requiring advanced PCB solutions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="">
				<div className="grid lg:grid-cols-2">
					{LastData.map((item, index) => (
						<div key={index} className={`relative h-[400px] lg:h-[500px] ${index % 2 === 0 && "hidden lg:block"}`}>
							<Image src={item.img} alt={item?.name} className=" w-full h-full object-cover" />
							<div className={`absolute img-test w-full top-0 h-full`}>
								<div className="flex items-center justify-center flex-col space-y-6 h-full">
									<h3 className=" text-2xl lg:text-4xl font-headerFont font-bold text-white text-center">
										{item?.name}
									</h3>
									<div className=" mt-4 w-3/4">
										<p className=" text-center text-white text-lg">
											{item?.desc} 
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section id='resources' className="relative bg-[#F1F5F9]">
				<svg 
					xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 1440 320"
					preserveAspectRatio="none"
					className='absolute text-white lg:-top-20 -top-8 w-full h-14 sm:h-36'
				>
					<path 
						fill="currentColor" 
						d="M0,256L24,250.7C48,245,96,235,144,245.3C192,256,240,288,288,293.3C336,299,384,277,432,266.7C480,256,528,256,576,234.7C624,213,672,171,720,160C768,149,816,171,864,192C912,213,960,235,1008,250.7C1056,267,1104,277,1152,277.3C1200,277,1248,267,1296,250.7C1344,235,1392,213,1416,202.7L1440,192L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"					
					/>
				</svg>
				<div className='pb-2 lg:pb-4 px-2 pt-16 lg:pt-24 lg:px-0 mx-auto max-w-7xl'>
					<div className=''>
						<div className='lg:space-y-12 space-y-8 flex text-center flex-col items-center'>
							<div className=' shadow-xl w-32 rounded-full py-2 text-center bg-navbar/50'>
								<span className=' text-white text-lg font-headerFont'>
									Resources
								</span>
							</div>
							<h1 className=' font-headerFont text-3xl text-navbar tracking-tight lg:text-4xl'>
								Frequently Asked Questions
							</h1>
							<div className='lg:w-3/4'>
								<p className=' lg:text-lg'>
									Find answers to common questions about sheet metal fabrication, CNC laser cutting, welding, and powder coating services in Union City, CA. We proudly serve businesses throughout the East Bay and Bay Area with precision manufacturing solutions.
								</p>
							</div>
						</div>
						<div className='lg:mt-12 mt-8 grid lg:grid-cols-2 items-center gap-8 lg:gap-12'>
							<div className=' lg:space-y-2 space-y-4'>
								{faqData.map((item, index) => (
									<div key={index} className="h-fit overflow-hidden">
										<button
											onClick={() => toggleFAQ(index)}
											className="flex border-b border-b-navbar rounded-2xl justify-between items-center w-full group p-4 lg:p-6 text-left cursor-pointer transition-colors duration-500 group"
										>
											<span className="lg:text-lg text-navbar text-base font-headerFont pr-6 text-left flex-1">
												{item.question}
											</span>
											<div className="shrink-0 w-6 h-6 flex items-center justify-center">
												<motion.span
													animate={{ rotate: openIndex === index ? 45 : 0 }}
													transition={{ duration: 0.3 }}
													className="text-navbar text-base lg:text-xl font-bold"
												>
													{openIndex === index ? '−' : '+'}
												</motion.span>
											</div>
										</button>
										<AnimatePresence>
											{openIndex === index && (
												<motion.div
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: 'auto' }}
													exit={{ opacity: 0, height: 0 }}
													transition={{ duration: 0.3 }}
													className="overflow-hidden"
												>
													<div className="lg:px-6 px-4 pb-4 pt-4 lg:pt-8">
														<p className="text-black text-sm leading-relaxed text-left">
															{item.answer}
														</p>
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								))}
							</div>
							<div className='lg:p-8 lg:h-full h-100 p-4 relative'>
								{/* <Image src={faqImage} alt='Frequently Asked Questions Image' className=' h-full object-cover rounded-xl' /> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
    )
}
