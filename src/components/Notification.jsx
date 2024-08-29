import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useMediaQuery } from 'react-responsive'

const Notification = () => {
    const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' })
    const [notify, setNotify] = useState(false)


    // set local storage
    useEffect(() => {
        const val = localStorage.getItem('notification')
        val === null ? (localStorage.setItem('notification', 'true'), setNotify(true)) : val === 'true' ? setNotify(true) : setNotify(false)
    }, [])

    const handleClose = () => {
        localStorage.setItem('notification', 'false')
        setNotify(false)
    }

    if (isLargeScreen) {
        return null
    }
    return <AnimatePresence>
        {
            notify ?
                <motion.div
                    initial={{ x: 'calc(100% + 4rem)' }}
                    animate={{ x: 0 }}
                    exit={{ y: -40, opacity: 0, scale: 0.9, animationDelay: 0 }}
                    transition={{ duration: 0.5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClose}
                    className='fixed bottom-12 right-[5%] bg-white border border-gray-500/25 px-4 py-6 cursor-pointer rounded flex gap-2 z-30'
                >
                    <p className='select-none'>Use desktop for better experience.</p>
                    <X size={24} aria-label='close' />
                </motion.div>
                : null
        }
    </AnimatePresence>
}

export default Notification