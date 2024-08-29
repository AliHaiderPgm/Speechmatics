import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from './_components/HeroSection'
import Loader from '../components/Loader'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import Notification from '../components/Notification'

const Home = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2900)
        return () => {
            clearTimeout()
        }
    }, [])


    return (
        <LayoutGroup>
            <AnimatePresence>
                {loading ?
                    <motion.div key="loader">
                        <Loader />
                    </motion.div>
                    :
                    <>
                        <Navbar />
                        <div className='max-w-[1280px] mx-auto'>
                            <div className='grid grid-cols-3'>
                                <HeroSection />
                                <Notification />
                            </div>
                        </div>
                    </>
                }
            </AnimatePresence>
        </LayoutGroup>
    )
}


export default Home