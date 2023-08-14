import React from 'react';
//images
import Image from '../assets/photo_2022-05-06_13-13-16.jpg'
//icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa"
//type animotion
import { TypeAnimation } from 'react-type-animation'
//motion
import { motion } from 'framer-motion'
//varionts
import { fadeIn } from '../variants'


const Banner = () => {

  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x12'>
        {/* {Text} */}
        <div className='flex-1 text-center font-secondery lg:text-left'>
          <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[60px] lg:mt-[-50px]'>
            MUHAMMAD <span>SODIQ</span>
          </motion.h1>
          < motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4 mt-[20px]'>I am a</span>
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Designer",
                2000,
                "Youtuber",
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />

          </ motion.div>
          < motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit obcaecati suscipit sit esse eveniet? </motion.p>
          < motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-wax gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact me</button>
            <a href="#" className='text-gradient btn-link'>My Portfolio</a>
          </ motion.div>
          < motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="https://github.com/muhammadsodiq8085">
              <FaGithub />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaDribbble />
            </a>
          </motion.div>
        </div>
        {/* {Image} */}
        < motion.div variants={fadeIn('down')} initial='hidden' whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img className='border rounded-[60%]' src={Image} alt="" />
        </motion.div>
      </div>
    </div>;
  </section>

};

export default Banner;
