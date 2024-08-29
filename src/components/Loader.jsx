import React, { useEffect } from 'react'
import { motion, useAnimate, usePresence } from 'framer-motion'

const Loader = () => {
    const [scope, animate] = useAnimate()
    const [isPresent, safeToRemove] = usePresence()

    const animateInDuration = {
        duration: 0.8,
        delay: 1.5,
    }
    const animateOutDuration = {
        duration: 0.5,
    }

    useEffect(() => {
        if (isPresent) {
            const animateIn = async () => {
                animate("#leftFirst", { x: '-50%', opacity: 1 }, animateInDuration)
                animate("#leftSecond", { x: '-25%', opacity: 1 }, animateInDuration)
                animate("#main", { opacity: 1 }, { duration: 0.8, delay: 1 })
                animate("#rightFirst", { x: '50%', opacity: 1 }, animateInDuration)
                animate("#rightSecond", { x: '25%', opacity: 1 }, animateInDuration)
            }
            animateIn()
        } else {
            const animateOut = async () => {
                animate("#leftFirst", { x: '160%', opacity: 0 }, animateOutDuration)
                animate("#leftSecond", { x: '80%', opacity: 0 }, animateOutDuration)
                animate("#rightFirst", { x: '-160%', opacity: 0 }, animateOutDuration)
                animate("#rightSecond", { x: '-80%', opacity: 0 }, animateOutDuration)
                safeToRemove()
            }
            animateOut()
        }
    }, [isPresent])
    return (
        <div className='absolute inset-0' ref={scope}>
            <div className='flex justify-center items-center h-screen overflow-hidden'>
                {/* 1st */}
                <motion.div
                    initial={{ x: '10%', opacity: 0 }}
                    // animate={{ x: '-60%', opacity: 1 }}
                    // exit={{ x: '150%', opacity: 0 }}
                    // transition={sideImages}
                    // onAnimationComplete={() => setLoading(false)}
                    id="leftFirst"
                    className='relative z-10 hidden sm:block'
                >
                    <Image src="/images/left1.webp" alt="left-side-1" />
                </motion.div>

                {/* 2nd */}
                <motion.div
                    initial={{ x: '10%', opacity: 0 }}
                    // animate={{ x: '-30%', opacity: 1 }}
                    // exit={{ x: '75%', opacity: 0 }}
                    // transition={sideImages}
                    id="leftSecond"
                    className='relative z-20'
                >
                    <Image src="/images/left2.webp" alt="left-side-2" />
                </motion.div>

                {/* 3rd */}
                <motion.div
                    initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: 0.8, delay: 0.9 }}
                    id="main"
                    layoutId='main-image'
                    className='relative z-30'
                >
                    <Image src="/images/main.webp" alt="main" />
                </motion.div>

                {/* 4th */}
                <motion.div
                    initial={{ x: '-10%', opacity: 0 }}
                    // animate={{ x: '30%', opacity: 1 }}
                    // exit={{ x: '-75%', opacity: 0 }}
                    // transition={sideImages}
                    id="rightSecond"
                    className='relative z-20'
                >
                    <Image src="/images/right1.webp" alt="right-side-1" />
                </motion.div>

                {/* 5th */}
                <motion.div
                    initial={{ x: '-10%', opacity: 0 }}
                    // animate={{ x: '60%', opacity: 1 }}
                    // exit={{ x: '-150%', opacity: 0 }}
                    // transition={sideImages}
                    id="rightFirst"
                    className='relative z-10 hidden sm:block'
                >
                    <Image src="/images/right2.webp" alt="right-side-2" />
                </motion.div>
            </div>
        </div>
    )
}

export default Loader

const Image = ({ ...props }) => {
    return <img className='h-64 sm:h-72 lg:h-[30rem] object-cover' loading='lazy' height={560} width={900} {...props} />
}