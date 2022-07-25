import React, { Children } from 'react'
import {motion} from 'framer-motion'

const animations={
    initial:{opacity:0,x:100},
    animate:{opacity:1,x:0},
    exit:{opacity:0,x:100},
}

export default function AnimatedPage() {
  return (
    <motion.div variants={animations} initial="initial"
    animate="animate" exit="exit"
    >
        {Children}
    </motion.div>
  )
}
