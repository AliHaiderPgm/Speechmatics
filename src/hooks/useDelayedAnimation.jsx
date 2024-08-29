import { useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { mainLayoutDelay } from '../components/constant'

const useDelayedAnimation = ({ initial, animate }) => {
    const controls = useAnimation()

    useEffect(() => {
        const controlAnimation = async () => {
            await controls.start(initial)
            await new Promise(resolve => setTimeout(resolve, mainLayoutDelay))
            controls.start(animate)
        }
        controlAnimation()
    }, [controls])

    return controls
}

export default useDelayedAnimation