import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'
import Img1 from '../assets/BOOKLIST.jpg'
import Img2 from '../assets/HOME-CLOCK.jpg'
import Img3 from '../assets/whats-app.jpg'

const Work = () => {
  return <section className='section  lg:mt-[150px]' id='work'>
    <div className="conteiner mx-auto ">
      <div className='flex flex-col lg:flex-row  gap-x-10'>

        < motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-[70px] mb-10 lg:mb-0'>
          {/* {text} */}
          <div>
            <h2 className='h2 leading-tight text-accent' >My Latest <br />Work.</h2>
            <p className='max-w-sm mb-16'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nam expedita ab numquam deleniti tempora ullam aperiam sint ratione totam!</p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          {/* {image} */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* {overloy} */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* {img} */}
            <img className='group-hover:scale-125 transition-all duration-500  w-[600px] ' src={Img1} alt="" />
            {/* {protitle} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design</span>
            </div>
            {/* {title} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>

        </ motion.div>
        < motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-10'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* {overloy} */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* {img} */}
            <img className='group-hover:scale-125 transition-all duration-500  w-[600px]' src={Img2} alt="" />
            {/* {protitle} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design</span>
            </div>
            {/* {title} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* {overloy} */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* {img} */}
            <img className='group-hover:scale-125 transition-all duration-500 w-[600px]' src={Img3} alt="" />
            {/* {protitle} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design</span>
            </div>
            {/* {title} */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Project Title</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
