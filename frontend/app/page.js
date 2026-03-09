"use client";

import { Carousel } from "@/components/Carousel";
import Image from "next/image";
import React from 'react'

import Section1Img from "@/public/Section1.png";
import IndustryIcon from "@/public/Icon/IndustryIcon.svg";
import IndustryList from "@/components/IndustryList";
import ServicesData from "@/components/ServicesData";
// import SwiperData from "@/components/SwiperData";

import { motion, AnimatePresence } from "motion/react";

import WhyIcon1 from "@/public/Icon/WhyIcon/1.png";
import WhyIcon2 from "@/public/Icon/WhyIcon/2.png";
import WhyIcon3 from "@/public/Icon/WhyIcon/3.png";
import WhyIcon4 from "@/public/Icon/WhyIcon/4.png";

import faqData from "@/components/FaqData";
import CircuitL from "@/public/Icon/alt/circuitL.png";

import faqImage from "@/public/faqPic.png";

import {useSelector } from 'react-redux';

import langSwitchData from "@/components/langSwitch";

export default function HomePage() {

	const activeLang = useSelector((state) => state.activeLang.value);


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
						<motion.div 
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className=" space-y-4 lg:space-y-8"
						>
							<h1 className=" lg:text-4xl text-2xl text-main font-bold font-headerFont">
								{activeLang === "en" ? "Engineering Behind the Boards" : "基板の裏側にあるエンジニアリング"}
							</h1>
							<div className=" text-sm lg:text-base space-y-4">
								<p className="">
									{activeLang === "en" ? 
										
										"Based in San Jose, California, SSC specializes in PCB design, precision PCB manufacturing, PCB fabrication, and PCB assembly services for companies across Silicon Valley and the Bay Area. We support hardware startups, engineering teams, and technology companies with reliable printed circuit board solutions, from rapid PCB prototyping to scalable mass production. In addition to local engineering support, we also help customers coordinate manufacturing in trusted overseas and low-cost production regions when projects require higher-volume manufacturing."
										: 
										"カリフォルニア州サンノゼを拠点とするSSCは、PCB設計、精密PCB製造、PCBファブリケーション、PCB組立サービスを提供し、シリコンバレーおよびサンフランシスコ・ベイエリアの企業をサポートしています。私たちは、ハードウェアスタートアップ、エンジニアリングチーム、テクノロジー企業に向けて、迅速なPCB試作からスケーラブルな量産まで、信頼性の高いプリント基板ソリューションを提供しています。また、サンノゼでのエンジニアリングサポートに加え、プロジェクトで大量生産が必要な場合には、信頼できる海外およびコスト最適化された製造地域での生産調整もサポートしています。"
									}
								</p>
								<p className="">
									{activeLang === "en" ?
										"Our team supports demanding industries including aerospace, medical devices, robotics, semiconductor equipment, and EV technology. With advanced manufacturing processes, strict quality control, and responsive customer support, SSC delivers high-precision PCB design, fabrication, and assembly that engineers can depend on. Whether you need fast-turn prototypes or large-scale production, we provide reliable PCB solutions designed to support innovation across Silicon Valley and beyond."
										: 
										"当社のチームは、航空宇宙、医療機器、ロボティクス、半導体装置、EV（電気自動車）技術など、高い品質が求められる産業分野を支援しています。高度な製造プロセス、厳格な品質管理、そして迅速なカスタマーサポートにより、SSCはエンジニアが信頼できる高精度PCB設計・製造・組立サービスを提供します。高速試作から大規模量産まで、SSCはシリコンバレーをはじめとする世界中のイノベーションを支える信頼性の高いPCBソリューションを提供しています。"
									}
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ amount: 0.3 }}
							transition={{ duration: 0.8 }}
						>
							<div className=" overflow-hidden p-2 lg:p-6 rounded-2xl">
								<Image src={Section1Img} alt="SSC PCB Engineering Services & Manufacturing About Us Section Image" className="w-full group-hover:scale-105 shadow-xl group-hover:opacity-55 cursor-pointer ease-in-out duration-500 rounded-2xl" />
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="bg-lightGray relative">
				<div className="pb-32 lg:pb-44 px-4 pt-14 lg:pt-28 lg:px-0 mx-auto max-w-7xl">
					<div className=" space-y-10 flex flex-col items-center">
						<div className="bg-linear-to-r flex items-center justify-center space-x-[4px] text-white text-center from-[#007ec7] to-[#000d68] py-4 shadow-xl rounded-full w-[160px]">
							<Image src={IndustryIcon} className=" brightness-0 invert w-6 h-6" alt="SSC PCB Engineering Services & Manufacturing Industry Icon" />
							<span className=" text-base">
								{activeLang === "en"? "Industry" : "対応業界"}
							</span>
						</div>
						<div className=" flex flex-wrap lg:flex-nowrap space-x-1 text-2xl justify-center lg:justify-start lg:space-x-2 font-bold font-headerFont lg:text-4xl items-center">
							<span className="text-main">
								{activeLang === "en"? "Where Our" : "私たちの"}
							</span>
							<span className=" text-clip text-transparent bg-linear-to-r to-[#007ec7] from-[#000d68] bg-clip-text">
								{activeLang === "en"? "PCB Solutions" : "PCBソリューションが"} 
							</span>
							<span className="">
								{activeLang === "en"? "Make an Impact" : "価値を生み出す" }
							</span>
						</div>
						<div className=" -translate-y-4 text-center lg:text-lg lg:w-2/3">
							<p className="">
								{activeLang === "en"? 
									"Our San Jose PCB manufacturing services support industries that depend on precision electronics, including robotics, aerospace, medical technology, and semiconductor equipment."
							    	:
									"サンノゼ拠点のPCB製造サービスとして、ロボティクス、航空宇宙、医療技術、半導体装置などの精密電子産業をサポートしています。"
								}
							</p>
						</div>
					</div>
					<div className=" grid lg:grid-cols-2 gap-12 mt-12 lg:mt-14">
						{langSwitchData[activeLang]?.IndustryList.map((item, index) => (
							<motion.div 
								key={index} 
								className=" h-fit shadow-xl rounded-2xl"
								initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
								whileHover={{ scale: 1.05, opacity: 0.5}}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8,}}
							>
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
							</motion.div>
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

			<motion.section 
				className=" -translate-y-14 lg:-translate-y-8 bg-[url('/servicesBG.png')] bg-cover bg-center bg-no-repeat"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, type: "tween" }}
			>
				<div className="lg:pb-14 px-4 pt-14 lg:pt-14 lg:px-0 mx-auto max-w-7xl">
					<div className=" space-y-12 flex flex-col items-center">
						<div className="bg-linear-to-r flex items-center justify-center space-x-[4px] text-white text-center from-[#007ec7] to-[#000d68] py-4 shadow-xl rounded-full w-[168px]">
							<Image src={IndustryIcon} className=" brightness-0 invert w-6 h-6" alt="SSC PCB Engineering Services & Manufacturing Industry Icon" />
							<span className=" text-base">
								{activeLang === "en" ? "Our Services" : "サービス"}
							</span>
						</div>
						<div className=" lg:space-x-2 font-bold font-headerFont lg:text-4xl lg:justify-start justify-center flex flex-wrap lg:flex-nowrap space-x-1 text-2xl  items-center">
							<span className="text-main">
								{activeLang === "en"? "Complete" : "包括的な"}
							</span>
							<span className=" text-clip text-transparent bg-linear-to-r to-[#007ec7] from-[#000d68] bg-clip-text">
								{activeLang === "en" ? "PCB & Electronics" : "PCB・電子機器"}
							</span>
							<span className="">
								{activeLang === "en" ? "Services" : "サービス"}
							</span>
						</div>
						<div className=" -translate-y-4 text-center lg:text-lg lg:w-3/4">
							<p className="">
								{activeLang === "en"? 
									"From PCB design and rapid prototyping to full production, we provide PCB fabrication, PCB assembly, electronics testing, and embedded software development services in San Jose, California. Supporting Silicon Valley startups and Bay Area technology companies, our team delivers reliable solutions that help engineers turn electronic designs into high-performance products while also supporting scalable manufacturing and overseas production when needed."
									:
									"PCB設計や高速試作から量産まで、当社はカリフォルニア州サンノゼを拠点にPCB製造、PCB組立、電子機器テスト、組込みソフトウェア開発サービスを提供しています。シリコンバレーのスタートアップやベイエリアのテクノロジー企業をサポートし、エンジニアの電子設計を高性能な製品へと実現する信頼性の高いソリューションを提供します。また、必要に応じてスケーラブルな製造や海外生産の調整にも対応しています。"
								}
							</p>
						</div>
					</div>
					<div className="lg:mt-8 mt-10">
						<div className=" grid lg:p-8 lg:grid-cols-3 gap-8">
							{langSwitchData[activeLang]?.ServicesData.map((item, index) => (
								<div key={index} className={`shadow-lg lg:mb-6 hover:opacity-55 transition-all ease-in-out duration-500 rounded-2xl`}>
									<div className="rounded-2xl cursor-pointer">
										<Image src={item.img} alt={item?.name} className=" w-full h-full rounded-t-2xl object-cover" />
										<div className=" space-y-4 px-4 py-6">
											<h3 className=" text-main text-xl font-headerFont font-bold">
												{item?.name}
											</h3>
											<p className=" text-base">
												{item?.desc}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</motion.section>

			<motion.section 
				className="bg-lightGray"
				initial={{ opacity: 0}}
				whileInView={{ opacity: 1}}
				transition={{ duration: 0.8}}
			>
				<div className="pb-12 lg:pb-24 px-4 pt-14 lg:pt-28 lg:px-0 mx-auto max-w-7xl">
					<div className=" flex justify-center">
						<div className="bg-linear-to-r flex items-center justify-center space-x-[4px] text-white text-center from-[#007ec7] to-[#000d68] py-4 shadow-xl rounded-full w-[200px]">
							<Image src={IndustryIcon} className=" brightness-0 invert w-6 h-6" alt="SSC PCB Engineering Services & Manufacturing Industry Icon" />
							<span className=" text-base">
								{activeLang === "en" ? "Why Choose Us" : "選ばれる理由"}
							</span>
						</div>
					</div>
					<div className=" lg:flex-row flex-col flex items-center lg:gap-x-24 mt-20">
						<div className=" w-full flex flex-col">
							<div className=" flex lg:flex-nowrap flex-wrap text-3xl space-x-2 font-bold  font-headerFont lg:text-5xl  items-center">
								<span className="text-main">
									{activeLang === "en"? "The SSC" : "SSCの"}
								</span>
								<span className=" text-clip text-transparent bg-linear-to-r to-[#007ec7] from-[#000d68] bg-clip-text">
									{activeLang === "en"? "Difference." : "強み"}
								</span>
							</div>
							<div className=" lg:hidden mt-6">
								<h3 className=" lg:text-xl text-lg">
									{activeLang === "en"? "Precision PCB manufacturing and electronics services in San Jose supporting Silicon Valley innovation:" 
										: 
										"サンノゼ拠点の高精度PCB製造および電子機器サービスで、シリコンバレーのイノベーションを支えています: "
									}
								</h3>
							</div>
							<div className=" mt-12 lg:mt-20">
								<Image src={WhyIcon1} alt="SSC Why Choose Us Icon" className="-translate-x-4 lg:-translate-x-8 lg:w-32 lg:h-28" />
								<div className="">
									<h3 className=" border-b py-4 text-xl lg:text-2xl font-headerFont font-bold text-main uppercase">
										{activeLang === "en" ? "Precision Engineering" : "高精度エンジニアリング"}
									</h3>
								</div>
								<p className="mt-6 lg:text-lg">
									{activeLang === "en" ? 
										"We deliver high-precision PCB fabrication and assembly in San Jose, ensuring every board meets strict quality and performance standards for advanced electronics."
										:
										"サンノゼで高精度なPCB製造および組立サービスを提供し、すべての基板が高度な電子機器に求められる厳格な品質と性能基準を満たすよう徹底しています。"
									}
								</p>
							</div>
							<div className=" mt-8 lg:mt-12">
								<Image src={WhyIcon2} alt="SSC Why Choose Us Icon" className=" -translate-x-4 lg:-translate-x-8 lg:w-32 lg:h-28" />
								<div className="">
									<h3 className=" border-b py-4 text-xl lg:text-2xl font-headerFont font-bold text-main uppercase">
										{activeLang === "en"? "Reliable Manufacturing" : "信頼性の高い製造"}
									</h3>
								</div>
								<p className="mt-6 lg:text-lg">
									{activeLang === "en"? 
										"Our manufacturing process focuses on consistent quality, helping Silicon Valley companies produce dependable electronics from prototype to full production."
										: 
										"当社の製造プロセスは安定した品質を重視しており、シリコンバレーの企業が試作から量産まで信頼性の高い電子機器を製造できるようサポートします。"
									}
								</p>
							</div>
						</div>
						<div className=" w-full">
							<h3 className=" hidden lg:block lg:text-xl">
								{activeLang === "en"? "Precision PCB manufacturing and electronics services in San Jose supporting Silicon Valley innovation:" 
									: 
									"サンノゼ拠点の高精度PCB製造および電子機器サービスで、シリコンバレーのイノベーションを支えています: "
								}							</h3>
							<div className=" mt-8 lg:mt-16">
								<Image src={WhyIcon3} alt="SSC Why Choose Us Icon" className=" -translate-x-4 lg:-translate-x-8 lg:w-32 lg:h-28" />
								<div className="">
									<h3 className=" border-b py-4 text-xl lg:text-2xl font-headerFont font-bold text-main uppercase">
										{activeLang === "en" ? "Fast Turnaround" : "迅速な対応"}
									</h3>
								</div>
								<p className="mt-6 lg:text-lg">
									{activeLang === "en"? 
										"We support Silicon Valley startups and engineering teams with fast-turn PCB prototyping and efficient production timelines, helping companies move quickly from design to working circuit boards."
										:
										"高速PCB試作と効率的な生産体制により、シリコンバレーのスタートアップやエンジニアリングチームが設計から実際の回路基板まで迅速に進められるよう支援します。"
									}
								</p>
							</div>
							<div className=" mt-12">
								<Image src={WhyIcon4} alt="SSC Why Choose Us Icon" className=" -translate-x-4 lg:-translate-x-8 lg:w-32 lg:h-28" />
								<div className="">
									<h3 className=" border-b py-4 text-xl lg:text-2xl font-headerFont font-bold text-main uppercase">
										{activeLang === "en" ? "Silicon Valley Expertise" : "シリコンバレーの技術力"}
									</h3>
								</div>
								<p className="mt-6 lg:text-lg">
									{activeLang === "en"? 
										"We work closely with Silicon Valley innovators across robotics, aerospace, semiconductor, and EV industries requiring advanced PCB solutions."
										:
										"ロボティクス、航空宇宙、半導体、EV産業など、最先端技術分野の企業と密接に連携し、高度なPCBソリューションを提供しています。"
									}
								</p>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			<section className="">
				<div className="grid lg:grid-cols-2">
					{langSwitchData[activeLang]?.LastData.map((item, index) => (
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
				<Image alt='SSC PCB Engineering Services & Manufacturing Circuit Icon Image' src={CircuitL} className=' absolute w-54 lg:w-[400px] -top-8 translate-x-8 -left-20 lg:-left-24' />

				<div className='pb-12 lg:pb-24 px-4 pt-16 lg:pt-24 lg:px-0 mx-auto max-w-7xl'>
					<div className=''>
						<div className='lg:space-y-12 space-y-8 flex text-center flex-col items-center'>
							<div className="bg-linear-to-r flex items-center justify-center space-x-[4px] text-white text-center from-[#007ec7] to-[#000d68] py-4 shadow-xl rounded-full w-[168px]">
								<Image src={IndustryIcon} className=" brightness-0 invert w-6 h-6" alt="SSC PCB Engineering Services & Manufacturing Industry Icon" />
								<span className=" text-base">
									{activeLang === "en" ? "Resources" : "リソース"}
								</span>
							</div>
							<div className=" flex lg:flex-nowrap flex-wrap space-x-2 font-bold font-headerFont text-2xl lg:text-4xl  items-center">
								<span className="text-main">
									{activeLang === "en"? "PCB Manufacturing" : "PCB製造"}
								</span>
								<span className=" text-clip text-transparent bg-linear-to-r to-[#007ec7] from-[#000d68] bg-clip-text">
									{activeLang === "en"? "FAQs" : "よくある質問"}
								</span>
							</div>
							<div className=" -translate-y-4 text-center lg:text-lg lg:w-3/4">
								<p className="">
									{activeLang === "en"?
										"Find answers to common questions about PCB fabrication, PCB assembly, and electronics manufacturing in San Jose, supporting Silicon Valley startups and Bay Area technology companies."
										:
										"PCB製造、PCB組立、電子機器製造サービスに関するよくある質問をご覧ください。サンノゼを拠点に、シリコンバレーのスタートアップやベイエリアのテクノロジー企業をサポートしています。"
									}
								</p>
							</div>
						</div>
						<div className='lg:mt-12 mt-6 grid lg:grid-cols-2 items-center gap-8 lg:gap-12'>
							<div className=' lg:space-y-2 space-y-4'>
								{langSwitchData[activeLang]?.faqData.map((item, index) => (
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
							<div className='lg:p-8 lg:h-full h-100 p-2 relative'>
								<Image src={faqImage} alt='Frequently Asked Questions Image' className=' h-full object-cover rounded-xl' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
    );
};
