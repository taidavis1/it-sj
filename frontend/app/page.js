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
import CircuitL from "@/public/Icon/alt/circuitL.png";

import faqImage from "@/public/faqPic.png";

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
				<div className="pb-8 lg:pb-12 px-4 pt-24 lg:pt-48 lg:px-0 mx-auto max-w-7xl">
					<div className=" lg:grid-cols-2 grid gap-8 lg:gap-12 items-center">
						<div className=" space-y-4 lg:space-y-8">
							<h1 className=" lg:text-4xl text-2xl text-main font-bold font-headerFont">
								Engineering Behind the Boards
							</h1>
							<div className=" text-sm lg:text-base space-y-4">
								<p className="">
									Based in San Jose, California, SCS specializes in precision PCB manufacturing, PCB fabrication, and PCB assembly services for companies across Silicon Valley and the Bay Area. We support hardware startups, engineering teams, and technology companies with reliable printed circuit board solutions, from rapid PCB prototyping to full production manufacturing. Our focus on quality, efficiency, and consistent performance allows us to help customers move their electronic products from concept to market with confidence.
								</p>
								<p className="">
									With experience supporting industries such as aerospace, medical devices, robotics, semiconductor, and EV technology, our team understands the demanding standards required for modern electronics. By combining advanced manufacturing processes, strict quality control, and responsive customer support, SCS delivers high-precision PCB fabrication and assembly in San Jose that engineers and innovators can depend on. Whether you need fast-turn prototypes or scalable production, we are committed to providing reliable PCB solutions that power the next generation of technology.
								</p>
							</div>
						</div>
						<div className=" group">
							<div className=" overflow-hidden p-2 lg:p-6 rounded-2xl">
								<Image src={Section1Img} alt="SCS About Us Section Image" className="w-full group-hover:scale-105 shadow-xl group-hover:opacity-55 cursor-pointer ease-in-out duration-500 rounded-2xl" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-lightGray relative">
				<div className="pb-32 lg:pb-44 px-4 pt-14 lg:pt-28 lg:px-0 mx-auto max-w-7xl">
					<div className=" space-y-10 flex flex-col items-center">
						<div className="bg-linear-to-r flex items-center justify-center space-x-[4px] text-white text-center from-[#007ec7] to-[#000d68] py-4 shadow-xl rounded-full w-[160px]">
							<Image src={IndustryIcon} className=" brightness-0 invert w-6 h-6" alt="SCS Industry Icon" />
							<span className=" text-base">
								Industries
							</span>
						</div>
						<div className=" flex flex-wrap lg:flex-nowrap space-x-1 text-2xl justify-center lg:justify-start lg:space-x-2 font-bold font-headerFont lg:text-4xl items-center">
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
						<div className=" -translate-y-4 text-center lg:text-lg lg:w-2/3">
							<p className="">
								Our San Jose PCB manufacturing services support industries that depend on precision electronics, including robotics, aerospace, medical technology, and semiconductor equipment.
							</p>
						</div>
					</div>
					<div className=" grid lg:grid-cols-2 gap-12 mt-12 lg:mt-14">
						{IndustryList.map((item, index) => (
							<div key={index} className=" h-fit hover:scale-105 hover:opacity-55 transition-all ease-in-out duration-500 shadow-xl rounded-2xl">
								<div className="rounded-2xl cursor-pointer lg:flex-row flex-col flex space-x-4">
									<Image src={item.icon} alt={item?.name} className=" lg:w-44 lg:h-44 rounded-l-2xl rounded-tr-2xl" />
									<div className=" space-y-4 px-4 lg:py-0 py-4 lg:mt-3">
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

			<section className=" -translate-y-14 lg:-translate-y-8 bg-[url('/servicesBG.png')] bg-cover bg-center bg-no-repeat">
				<div className="lg:pb-14 px-4 pt-14 lg:pt-14 lg:px-0 mx-auto max-w-7xl">
					<div className=" space-y-12 flex flex-col items-center">
						<div className="bg-linear-to-r flex items-center justify-center space-x-[4px] text-white text-center from-[#007ec7] to-[#000d68] py-4 shadow-xl rounded-full w-[168px]">
							<Image src={IndustryIcon} className=" brightness-0 invert w-6 h-6" alt="SCS Industry Icon" />
							<span className=" text-base">
								Our Services
							</span>
						</div>
						<div className=" lg:space-x-2 font-bold font-headerFont lg:text-4xl lg:justify-start justify-center flex flex-wrap lg:flex-nowrap space-x-1 text-2xl  items-center">
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
						<div className=" -translate-y-4 text-center lg:text-lg lg:w-3/4">
							<p className="">
								From rapid PCB prototyping to full production, we provide PCB fabrication, PCB assembly, electronics testing, and embedded software development services in San Jose, California. Supporting Silicon Valley startups and Bay Area technology companies, our team delivers reliable solutions that help engineers turn electronic designs into high-performance products.
							</p>
						</div>
					</div>
					<div className="lg:mt-14 mt-10">
						<SwiperData data={ServicesData} />
					</div>
				</div>
			</section>

			<section className="bg-lightGray">
				<div className="pb-12 lg:pb-24 px-4 pt-14 lg:pt-28 lg:px-0 mx-auto max-w-7xl">
					<div className=" flex justify-center">
						<div className="bg-linear-to-r flex items-center justify-center space-x-[4px] text-white text-center from-[#007ec7] to-[#000d68] py-4 shadow-xl rounded-full w-[200px]">
							<Image src={IndustryIcon} className=" brightness-0 invert w-6 h-6" alt="SCS Industry Icon" />
							<span className=" text-base">
								Why Choose Us
							</span>
						</div>
					</div>
					<div className=" lg:flex-row flex-col flex items-center lg:gap-x-24 mt-20">
						<div className=" w-full flex flex-col">
							<div className=" flex lg:flex-nowrap flex-wrap text-3xl space-x-2 font-bold  font-headerFont lg:text-5xl  items-center">
								<span className="text-main">
									The SCS
								</span>
								<span className=" text-clip text-transparent bg-linear-to-r to-[#007ec7] from-[#000d68] bg-clip-text">
									Difference.
								</span>
							</div>
							<div className=" lg:hidden mt-6">
								<h3 className=" lg:text-xl text-lg">
									Precision PCB manufacturing and electronics services in San Jose supporting Silicon Valley innovation:
								</h3>
							</div>
							<div className=" mt-12 lg:mt-20">
								<Image src={WhyIcon1} alt="SCS Why Choose Us Icon" className="-translate-x-4 lg:-translate-x-8 lg:w-32 lg:h-28" />
								<div className="">
									<h3 className=" border-b py-4 text-xl lg:text-2xl font-headerFont font-bold text-main uppercase">
										Precision Engineering
									</h3>
								</div>
								<p className="mt-6 lg:text-lg">
									We deliver high-precision PCB fabrication and assembly in San Jose, ensuring every board meets strict quality and performance standards for advanced electronics.
								</p>
							</div>
							<div className=" mt-8 lg:mt-12">
								<Image src={WhyIcon2} alt="SCS Why Choose Us Icon" className=" -translate-x-4 lg:-translate-x-8 lg:w-32 lg:h-28" />
								<div className="">
									<h3 className=" border-b py-4 text-xl lg:text-2xl font-headerFont font-bold text-main uppercase">
										Reliable Manufacturing
									</h3>
								</div>
								<p className="mt-6 lg:text-lg">
									Our manufacturing process focuses on consistent quality, helping Silicon Valley companies produce dependable electronics from prototype to full production.
								</p>
							</div>
						</div>
						<div className=" w-full">
							<h3 className=" hidden lg:block lg:text-xl">
								Precision PCB manufacturing and electronics services in San Jose supporting Silicon Valley innovation:
							</h3>
							<div className=" mt-8 lg:mt-16">
								<Image src={WhyIcon3} alt="SCS Why Choose Us Icon" className=" -translate-x-4 lg:-translate-x-8 lg:w-32 lg:h-288" />
								<div className="">
									<h3 className=" border-b py-4 text-xl lg:text-2xl font-headerFont font-bold text-main uppercase">
										Fast Turnaround
									</h3>
								</div>
								<p className="mt-6 lg:text-lg">
									We support Silicon Valley startups and engineering teams with fast-turn PCB prototyping and efficient production timelines, helping companies move quickly from design to working circuit boards.
								</p>
							</div>
							<div className=" mt-12">
								<Image src={WhyIcon4} alt="SCS Why Choose Us Icon" className=" -translate-x-4 lg:-translate-x-8 lg:w-32 lg:h-28" />
								<div className="">
									<h3 className=" border-b py-4 text-xl lg:text-2xl font-headerFont font-bold text-main uppercase">
										Silicon Valley Expertise
									</h3>
								</div>
								<p className="mt-6 lg:text-lg">
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
								<div className="flex lg:px-0 px-4 items-center justify-center flex-col space-y-4 lg:space-y-6 h-full">
									<h3 className=" text-2xl lg:text-4xl font-headerFont font-bold text-white text-center">
										{item?.name}
									</h3>
									<div className=" mt-4 lg:w-3/4">
										<p className=" text-center text-white lg:text-lg">
											{item?.desc} 
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section id='resources' className="relative bg-white">
				<Image alt='SCS Circuit Icon Image' src={CircuitL} className=' absolute w-54 lg:w-[400px] -top-8 translate-x-8 -left-20 lg:-left-24' />

				<div className='pb-12 lg:pb-24 px-4 pt-16 lg:pt-24 lg:px-0 mx-auto max-w-7xl'>
					<div className=''>
						<div className='lg:space-y-12 space-y-8 flex text-center flex-col items-center'>
							<div className="bg-linear-to-r flex items-center justify-center space-x-[4px] text-white text-center from-[#007ec7] to-[#000d68] py-4 shadow-xl rounded-full w-[168px]">
								<Image src={IndustryIcon} className=" brightness-0 invert w-6 h-6" alt="SCS Industry Icon" />
								<span className=" text-base">
									Resources
								</span>
							</div>
							<div className=" flex lg:flex-nowrap flex-wrap space-x-2 font-bold font-headerFont text-2xl lg:text-4xl  items-center">
								<span className="text-main">
									PCB Manufacturing
								</span>
								<span className=" text-clip text-transparent bg-linear-to-r to-[#007ec7] from-[#000d68] bg-clip-text">
									 FAQs
								</span>
							</div>
							<div className=" -translate-y-4 text-center lg:text-lg lg:w-3/4">
								<p className="">
									Find answers to common questions about PCB fabrication, PCB assembly, and electronics manufacturing in San Jose, supporting Silicon Valley startups and Bay Area technology companies.
								</p>
							</div>
						</div>
						<div className='lg:mt-12 mt-6 grid lg:grid-cols-2 items-center gap-8 lg:gap-12'>
							<div className=' lg:space-y-2 space-y-4'>
								{faqData.map((item, index) => (
									<div key={index} className="h-fit overflow-hidden">
										<button
											onClick={() => toggleFAQ(index)}
											className="flex border-b border-b-navbar justify-between items-center w-full group p-4 lg:p-6 text-left cursor-pointer transition-colors duration-500 group"
										>
											<span className="lg:text-lg text-main text-base font-headerFont pr-6 text-left flex-1">
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
							<div className='lg:p-8 lg:h-full h-100 p-2 lg:p-4 relative'>
								<Image src={faqImage} alt='Frequently Asked Questions Image' className=' h-full object-cover rounded-xl' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
    );
};
