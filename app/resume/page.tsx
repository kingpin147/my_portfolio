"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaDocker, FaPython, FaWix } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiApachekafka, SiKong, SiTypescript, SiFastapi, SiPoetry } from "react-icons/si";

const about = {
  icon: "",
  title: "About me",
  description: "A dedicated and skilled freelancer with expertise in web development, web design, SEO, and DevOps.",
  info: [
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
      fieldName: "Programming Languages",
      fieldValue: "HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, Python, Docker Compose, Kafka",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description: "With over 2 years of hands-on experience in various roles, I have honed my skills in web development, teaching, and system administration.",
  items: [
    {
      company: "District & Session Court",
      position: "Case Management System (CMS) Admin",
      duration: "2022 - Present",
    },
    {
      company: "Code Crush Company (remote/freelance)",
      position: "Wix Velo JavaScript Developer",
      duration: "2023 - Present",
    },
    {
      company: "NGO (Part Time)",
      position: "Computer Science Teacher",
      duration: "2018 - 2023",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description: "My educational background includes advanced degrees and certifications in computer science and AI, equipping me with a strong foundation in technology.",
  items: [
    {
      institute: "Presidential Initiative for Artificial Intelligence & Computing (PIAIC)",
      degree: "Certified Cloud Applied Generative AI Engineer (GenEng)",
      duration: "2023 - present",
    },
    {
      institute: "Minhaj University Lahore",
      degree: "M.Phil Computer Science",
      duration: "2021 - 2023",
    },
    {
      institute: "Virtual University of Pakistan",
      degree: "Master In Computer Science",
      duration: "2018 - 2020",
    },
  ],
};

const skills = {
  icon: "",
  title: "My Skills",
  description: "I possess a diverse set of skills in web technologies, programming languages, and development tools.",
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
    {
      Icon: <FaWix />,
      name: "Wix VELO",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills"> Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-col-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[500px] min-h-[30px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-col-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                        <span className="text-accent">{item.institute}</span>
                        <h3 className="text-xl max-w-[500px] min-h-[30px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
  <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
    </div>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
      {skills.skillList.map((skill, index) => (
        <li key={index}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.Icon}</div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  </div>
</TabsContent>



<TabsContent value="about" className="w-full text-center xl:text-left">
  <div className="flex flex-col gap-[30px]">
    <h3 className="text-4xl font-bold">{about.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
    <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0 gap-6">
      {about.info.map((info, index) => (
        <li key={index} className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4">
          <span className="text-white/60">{info.fieldName}</span>
          <span className="text-xl ">{info.fieldValue}</span>
        </li>
      ))}
    </ul>
  </div>
</TabsContent>



          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
