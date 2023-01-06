import React from 'react'
import { useState } from "react";
import "./About.css";
import { motion } from 'framer-motion';



function About() {

    
const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="about-form ">
            <motion.div onClick={() => setIsOpen(!isOpen)} className='card'>
                <motion.div>About Us</motion.div>
                {isOpen &&
                    <motion.div className='inside'>
                        <p>lorem20</p>
                        <p>lorem10</p>
                    </motion.div>
                }
            </motion.div>

        </div>
    );
}

export default About