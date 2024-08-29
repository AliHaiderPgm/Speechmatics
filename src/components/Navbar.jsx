import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { MenuIcon } from 'lucide-react'

const Navbar = () => {
    const [hover, setHover] = useState(null)
    const [active, setActive] = useState('Why Speechmatics?')
    const [isDisable, setIsDisable] = useState(false)
    const isSmallScreen = useMediaQuery({ query: '(width <= 1000px)' })
    const [open, setOpen] = useState('close')
    const controls = useAnimation()
    const List = ['Why Speechmatics?', 'Out technology', 'Resources', 'About',]


    const handleToggle = () => {
        setOpen(open === 'close' ? 'open' : 'close')
        controls.start(open === 'close' ? 'open' : 'close')
    }
    const variants = {
        close: {
            // rotate: '0deg',

        },
        open: {
            // rotate: '-45deg'
        }
    }

    return (
        <>
            {
                isSmallScreen ? <>
                    <motion.div
                        initial={{ y: -70 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1 }}
                        className='flex justify-between items-center px-8 py-6'
                    >
                        <motion.a href="#" className='font-semibold text-2xl md:text-3xl'>Speechmatics.</motion.a>
                        <div className='relative'>
                            <motion.button
                                variants={variants}
                                animate={controls}
                                onClick={handleToggle}
                                onAnimationStart={() => setIsDisable(true)}
                                onAnimationComplete={() => setIsDisable(false)}
                                disabled={isDisable}
                                className='w-6 md:w-8 h-4 aspect-square flex flex-col justify-between relative'
                            >
                                {/* Top line */}
                                <motion.div
                                    variants={{
                                        close: { rotate: '0deg', y: 0, backgroundColor: 'black' },
                                        open: { rotate: '45deg', y: '150%', backgroundColor: 'white' }
                                    }}
                                    transition={{ delay: 0.25 }}
                                    className='h-1 w-full origin-center'
                                    style={{ backgroundColor: 'black' }}
                                />
                                {/* Bottom line */}
                                <motion.div
                                    variants={{
                                        close: { rotate: '0deg', y: 0, backgroundColor: 'black' },
                                        open: { rotate: '-45deg', y: '-150%', backgroundColor: 'white' }
                                    }}
                                    transition={{ delay: 0.25 }}
                                    className='h-1 w-full origin-center'
                                    style={{ backgroundColor: 'black' }}
                                />
                                {/* Background color */}
                                <motion.div
                                    variants={{
                                        close: { height: 0, width: 0, },
                                        open: { height: 48, width: 48 },
                                    }}
                                    className='bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10'
                                />
                            </motion.button>
                            {/* Dropdown menu */}
                            <motion.div variants={variants} animate={controls}>
                                <motion.div
                                    variants={{
                                        close: { height: 0, visibility: 'hidden', transition: { when: 'afterChildren', staggerChildren: 0.05, staggerDirection: -1 }, },
                                        open: { height: 'max-content', visibility: 'visible', transition: { when: 'beforeChildren', staggerChildren: 0.05 } },
                                    }}
                                    className='border bg-white absolute top-8 right-0 z-50 shadow overflow-hidden !w-max h-0 invisible p-2 md:p-4 space-y-1 md:space-y-2 text-left'
                                >
                                    {List.map(i => <MobileList title={i} href="#" key={i} />)}
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
                    :
                    <motion.div
                        initial={{ y: -80 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.85 }}
                    >
                        <div className='px-8 py-6 flex justify-between items-center'>
                            <div>
                                <a href="#" className='font-semibold text-3xl'>Speechmatics.</a>
                            </div>
                            <div onMouseLeave={() => setHover(null)} className='flex gap-8 font-medium'>
                                {List.map((item, i) => <DesktopList href="#" item={item} hover={hover} setHover={setHover} active={active} setActive={setActive} key={i} />)}
                            </div>
                            <div className='md:hidden xl:block'>
                                <a href="#" className='font-medium p-4 hover:bg-gray-500/5 transition-colors duration-200'>
                                    <span className='underline underline-offset-8'>Try out free product</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
            }
        </>
    )
}

export default Navbar


const MobileList = ({ title, href }) => {
    return (
        <motion.a
            variants={{
                close: { opacity: 0, x: 70 },
                open: { opacity: 1, x: 0 }
            }}
            href={href}
            className='block text-lg md:text-2xl active:bg-gray-500/10 p-1 md:p-2'
        >
            {title}
        </motion.a>
    )
}

const DesktopList = ({ href, hover, active, item, setActive, setHover }) => {
    return (
        <a
            className='relative p-3 '
            onMouseEnter={() => setHover(item)}
            onClick={() => setActive(item)}
            href={href}
        >
            {item}
            {hover === item ? <motion.div transition={{ layout: { duration: 0.2, ease: 'easeInOut' } }} layoutId='highlight' className='absolute h-full w-full top-0 left-0 bg-gray-500/10' /> : null}
            {active === item ? <motion.div transition={{ layout: { duration: 0.2, ease: 'easeInOut' } }} layoutId='underline' className='absolute bottom-0 left-0 w-full h-[1px] rounded bg-black' /> : null}
        </a>
    )
}