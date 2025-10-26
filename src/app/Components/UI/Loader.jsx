"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"


export default function Loader() {
    return (
        <AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white to-emerald-50"
            >
                <div className="relative flex flex-col items-center space-y-8">
                    {/* Pulsing circles */}
                    <div className="relative">
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                className="absolute inset-0 rounded-full"
                                animate={{
                                    scale: [1, 2, 1],
                                    opacity: [0.7, 0, 0.7],
                                    backgroundColor: [
                                        `rgba(99, 175, 81, ${0.7 - index * 0.2})`,
                                        `rgba(99, 175, 81, ${0.5 - index * 0.15})`,
                                        `rgba(99, 175, 81, ${0.3 - index * 0.1})`,
                                        `rgba(99, 175, 81, ${0.5 - index * 0.15})`,
                                        `rgba(99, 175, 81, ${0.7 - index * 0.2})`,
                                    ],
                                }}

                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: index * 0.3,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}

                        <div className="relative z-10 p-6 bg-white rounded-full shadow-xl">
                            <Image src="/emerald-logo.png" alt="Loading" width={50} height={50} />
                        </div>
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
    )
}
