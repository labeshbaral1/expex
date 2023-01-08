import React from 'react'
import { useState } from "react";
import "./About.css";
import { motion } from 'framer-motion';
import bob from "./assets/hand-holding-phone.webp";


function About() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const closeOtherCards = (cardNumber) => {
        if (cardNumber !== 1) setIsOpen(false);
        if (cardNumber !== 2) setIsOpen2(false);
        if (cardNumber !== 3) setIsOpen3(false);
    }

    return (
        <div>
            <div className="split left">
                <div className="centered">
                    <div className="app">
                        <motion.div
                            transition={{ layout: { duration: 1, type: "spring" } }}
                            layout
                            onClick={() => {
                                setIsOpen(!isOpen);
                                closeOtherCards(1);
                            }}
                            className="card"
                            style={{ borderRadius: "15px" }}
                        >
                            <motion.div className="aboutus" layout="position">
                                About Us.
                            </motion.div>
                            {isOpen && (
                                <motion.div className="expand">
                                    <p>
                                        Expex is a revolutionary financial management platform that merges
                                        all of your financial accounts, regardless of the institution or
                                        type, into a single, secure account.
                                    </p>
                                    <p>
                                        With Expex, you can get a complete, comprehensive view of your
                                        financial situation, track your spending, and make informed
                                        investment decisions to plan for your financial future.
                                    </p>
                                    <p>
                                        Our secure platform allows you to connect all of your accounts,
                                        including checking and savings accounts, credit cards, loans,
                                        investments, and more, granting a complete yet simple view of your
                                        financial situation.
                                    </p>
                                    {/* <p className="final-sen">
                            Take control of your finances today with Expex.
                        </p> */}
                                </motion.div>
                            )}
                        </motion.div>
                        <div>
                            <motion.div
                                transition={{ layout: { duration: 1, type: "spring" } }}
                                layout
                                onClick={() => {
                                    setIsOpen2(!isOpen2);
                                    closeOtherCards(2);
                                }}
                                className="card2"
                                style={{ borderRadius: "15px" }}
                            >
                                <motion.div className="aboutus" layout="position">
                                    Meet the Developers.
                                </motion.div>
                                {isOpen2 && (
                                    <motion.div className="expand">
                                        <p>
                                            Expex is a revolutionary financial management platform that
                                            merges all of your financial accounts, regardless of the
                                            institution or type, into a single, secure account.
                                        </p>
                                        <p>
                                            With Expex, you can get a complete, comprehensive view of your
                                            financial situation, track your spending, and make informed
                                            investment decisions to plan for your financial future.
                                        </p>
                                        <p>
                                            Our secure platform allows you to connect all of your accounts,
                                            including checking and savings accounts, credit cards, loans,
                                            investments, and more, granting a complete yet simple view of your
                                            financial situation.
                                        </p>
                                        <p className="final-sen">
                                            Take control of your finances today with Expex.
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>


                        <div>
                            <motion.div
                                transition={{ layout: { duration: 1, type: "spring" } }}
                                layout
                                onClick={() => {
                                    setIsOpen3(!isOpen3);
                                    closeOtherCards(3);
                                }}
                                className="card3"
                                style={{ borderRadius: "15px" }}
                            >
                                <motion.div className="aboutus" layout="position">
                                    Project Timeline.
                                </motion.div>
                                {isOpen3 && (
                                    <motion.div className="expand">
      
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="split right">

                <img className="hand" src={bob} alt="" />{" "}
                <div className='phone'></div>
                    </div>
            </div>

    );
}

export default About;