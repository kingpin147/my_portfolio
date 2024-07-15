"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,FaDocker, FaPython,} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, SiApachekafka,SiKong, SiTypescript,SiFastapi,SiPoetry } from "react-icons/si"

const about = {
  icon:"",
  title: "About me",
  description:
  "Lorem17",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Muhammad Nouman Attique",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 331 411 1483",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "LinkedIN",
      fieldValue: "in/muhammadnoumanattique",
    },
    {
      fieldName: "Email",
      fieldValue: "nomiking0072012@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu, Punjabi",
    },
    {
      fieldName: "Programming Languanges",
      fieldValue: "HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, Python,Docker Compose, Kafka",
    },
  ]
};

const experience = {
  icon:"",
  title: "My Experience",
  description:
  "Lorem17",
  items:[
    {
      Company: "District & Session Court",
      Position: "Case Management System (CMS) Admin",
      Duraton: "2022 - Present"
    },
    {
      Company: "Code Crush Company (remote/freelance)",
      Position: "Wix Velo JavaScript Developer",
      Duraton: "2023 - Present"
    },
    {
      Company: "NGO (Part Time)",
      Position: "Computer Science Teacher",
      Duraton: "2018 - 2023"
    },
   ]
  };

  const education = {
    icon:"",
    title: "My Educaion",
    description:
    "Lorem17",
    items:[
      {
        Institute: "Presidential Initiative for Artificial Intelligence & Computing (PIAIC) ",
        Degree: "Certified Cloud Applied Generative AI Engineer (GenEng)",
        Duration: "2023 - present"
      },
      {
        Institute: "Minhaj University Lahore",
        Degree: "M.Phil Computer Science",
        Duration: "2021 - 2023"
      },
      {
        Institute: "Virtual University of Pakistan",
        Degree: "Master In Computer Science",
        Duration: "2018 - 2020"
      },
      
     ]
    };


    const skills = {
      icon: "",
      title: "My Skills",
      description: "Lorem17",
      skillList: [
        {
          Icon: <FaHtml5 />,
          name: "HTML 5",
        },
        {
          Icon: <FaCss3 />,
          name: "CSS 3",
        },
        {
          Icon: <FaJs />,
          name: "JavaScript",
        },
        {
          Icon: <FaReact />,
          name: "React",
        },
        {
          Icon: <FaFigma />,
          name: "Figma",
        },
        {
          Icon: <FaNodeJs />,
          name: "Node.js",
        },
        {
          Icon: <FaDocker />,
          name: "Docker",
        },
        {
          Icon: <FaPython />,
          name: "Python",
        },
        {
          Icon: <SiTailwindcss />,
          name: "Tailwind CSS",
        },
        {
          Icon: <SiNextdotjs />,
          name: "Next.js",
        },
        {
          Icon: <SiApachekafka />,
          name: "Apache Kafka",
        },
        {
          Icon: <SiKong />,
          name: "Kong",
        },
        {
          Icon: <SiTypescript />,
          name: "TypeScript",
        },
        {
          Icon: <SiFastapi />,
          name: "FastAPI",
        },
        {
          Icon: <SiPoetry />,
          name: "Poetry",
        },
      ],
    };

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tootltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

const resume = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{
      opacity:1,
      transition: {delay:2.4, duration:0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList 
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
          >
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills"> Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      </motion.div>
  )
}

export default resume