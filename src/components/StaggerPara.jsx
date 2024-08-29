import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useDelayedAnimation from '../hooks/useDelayedAnimation'

const StaggerPara = ({ children = "", className }) => {
    const controls = useDelayedAnimation({ initial: 'hidden', animate: 'visible' })
    const container = {
        visible: i => ({
            y: 0,
            transition: {
                duration: 0.3,
                delay: i * 0.03
            }
        }),
        hidden: {
            y: className ? 50 : 30
        }
    }


    const flattenArray = React.Children.toArray(children)
    return flattenArray.map((child, i) => {
        if (typeof child === 'string') {
            const splitText = child.split(' ')
            return splitText.map((word, i) => {
                return <div className={`inline-block overflow-hidden ${className}`} key={i}>
                    <motion.p variants={container} initial="hidden" animate={controls} custom={i} className='inline-block'>
                        {word + (i + 1 !== splitText.length ? '\u00A0' : '')}
                    </motion.p>
                </div>
            })
        }
        else {
            return <div className={`inline-block overflow-hidden ${className}`} key={i}>
                <motion.span variants={container} initial="hidden" animate={controls} custom={23} className='inline-block'>
                    {child}
                </motion.span>
            </div>
        }
    })
}

export default StaggerPara