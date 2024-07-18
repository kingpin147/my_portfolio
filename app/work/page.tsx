"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "lorem",
    stack: [{ name: "Html 5" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/public/WebsiteBanners/1.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "lorem",
    stack: [{ name: "Html 5" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/public/WebsiteBanners/2.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "lorem",
    stack: [{ name: "Html 5" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/public/WebsiteBanners/3.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper:any)=>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white py-12 ">
                <div className="flex items-center gap-6 justify-center">
                  {/* live project */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* github project */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
          <Swiper 
  spaceBetween={30}
  slidesPerView={1}
  className="xl:h-[520px] mb-12"
  onSlideChange={handleSlideChange}
>
  {projects.map((project, index) => {
    return (
      <SwiperSlide key={index} className="w-full">
        <div className="h-[560px] relative group flex justify-center items-center bg-pink-50/20">
          {/* Content for each slide */}
          <div></div>
          <div className="relative w-full hifull">
            <Image
              src={project.image}
              fill
              className="object-cover"
              alt="Project Image"
            />
          </div>
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
