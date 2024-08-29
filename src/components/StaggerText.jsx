import React from 'react'
import { motion } from 'framer-motion'
import useDelayedAnimation from '../hooks/useDelayedAnimation'

const StaggerText = ({ children = [] }) => {
    const splitText = children.split('')
    const controls = useDelayedAnimation({ initial: 'hidden', animate: 'visible' })

    const container = {
        visible: i => ({
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5
            }
        }),
        hidden: {
            y: 150
        }
    }

    return <div className='overflow-hidden min-h-20 sm:min-h-28 lg:min-h-40 inline-block'>
        {
            splitText.map((text, i) => {
                return <div key={i + 1} style={{ display: 'inline-block', }}>
                    <motion.div
                        custom={i}
                        variants={container}
                        initial="hidden"
                        animate={controls}
                        className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold'
                    >
                        {text + (text === ' ' ? '\u00A0' : '')}
                    </motion.div>
                </div>
            })
        }
    </div>
}

export default StaggerText