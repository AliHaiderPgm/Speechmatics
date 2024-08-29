import React from 'react'
import StaggerText from '../../components/StaggerText'
import StaggerPara from '../../components/StaggerPara'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'

const HeroSection = () => {
    const isSmallestScreen = useMediaQuery({ query: '(width<=405px)' })
    return (
        <div className='col-span-3 grid grid-cols-3 gap-8 gap-y-8 lg:gap-y-12 px-8'>
            <div className='col-span-3'>
                {isSmallestScreen ? <>
                    <StaggerPara className="text-[2.5rem] font-bold !min-h-16">
                        Understanding every voice.
                    </StaggerPara>
                    <motion.img layoutId='main-image' transition={{ delay: 0.5, duration: 0.5 }} src="/images/main.webp" alt="Podcasting" className='w-32 md:w-40 h-52 md:h-64 object-cover clear-both inline mx-6' loading='lazy' height={256} width={192} />
                </>
                    :
                    <div className='text-center'>
                        <span className="sm:min-w-16 lg:min-w-24 inline-block" />
                        <StaggerText>Understanding</StaggerText>
                        <br />
                        <StaggerText>every</StaggerText>
                        <motion.img layoutId='main-image' transition={{ delay: 0.5, duration: 0.5 }} src="/images/main.webp" alt="Podcasting" className='w-40 h-52 md:h-64 object-cover clear-both inline mx-6' loading='lazy' height={256} width={192} />
                        <StaggerText>voice.</StaggerText>
                    </div>
                }
            </div>
            <div className='text-center self-center col-span-3 lg:col-span-1'>
                <a href="#" className='font-medium p-4 hover:bg-gray-500/5 transition-colors duration-200'>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }} className='underline underline-offset-8'>Try out free product</motion.span>
                </a>
            </div>
            <div className='col-span-3 lg:col-span-1'>
                <StaggerPara>
                    Speechmatics mission is to understand every voice. Turning voice data into accurate text for analysis, discovery and accessibility. Special thanks to <a href='https://dribbble.com/gilhuybrecht' target='_blank' className='underline underline-offset-4'>Gil 💕</a>.
                </StaggerPara>
            </div>
            <div className='self-center col-span-3 lg:col-span-1'>
                <motion.p
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: .9 }}
                >
                    <ArrowDown className='text-center mx-auto h-12 w-12' />
                </motion.p>
            </div>
        </div>
    )
}

export default HeroSection