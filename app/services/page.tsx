'use client'

import {BsArrowDownRight} from 'react-icons/bs'
import Link from "next/link";
import { MotionConfig } from 'framer-motion';

const services = [
  {
    num:'01',
    title: 'Web Development',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora excepturi accusantium magni iste dolore, aspernatur neque nesciunt.',
    href:'',
  },
  {
    num:'01',
    title: 'Web Design',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora excepturi accusantium magni iste dolore, aspernatur neque nesciunt.',
    href:'',
  },
  {
    num:'02',
    title: 'SEO Specialist',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora excepturi accusantium magni iste dolore, aspernatur neque nesciunt.',
    href:'',
  },
  {
    num:'03',
    title: 'Dev OPS',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora excepturi accusantium magni iste dolore, aspernatur neque nesciunt.',
    href:'',
  },
]

import { motion } from 'framer-motion';


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div initial={{opacity: 0}} animate:{{opacity: 1, transition:{delay:2.4, duration: 0.4, ease: "easeIn"},}}>
          {services.map((service, index)=>{
            return <div key={index}>
              <div>
                <div>{service.num}</div>
                <Link href={service.href}>
                <BsArrowDownRight/>
                </Link>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="norder-b border-white/20 w-full"></div>
              </div>
            </div>
          })}
          
          </motion.div>

          </div>
    </section>
    
  )
}

export default Services