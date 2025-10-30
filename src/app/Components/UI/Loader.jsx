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
                className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            >
                <div className="relative flex flex-col items-center space-y-6">
                    {/* Spinning ring */}
                    <div className="relative w-24 h-24">
                        <motion.div
                            className="absolute inset-0 rounded-full border-4 border-gray-200"
                        />
                        <motion.div
                            className="absolute inset-0 rounded-full border-4 border-transparent"
                            style={{
                                borderTopColor: '#001568',
                                borderRightColor: '#001568',
                            }}
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 1,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        />
                        
                        {/* Logo in center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image 
                                src="/TAINEQ-loader.png" 
                                alt="Loading" 
                                width={40} 
                                height={40}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Loading text */}
                    <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium" style={{ color: '#001568' }}>
                            Loading
                        </span>
                        {[0, 1, 2].map((index) => (
                            <motion.span
                                key={index}
                                className="w-1 h-1 rounded-full"
                                style={{ backgroundColor: '#001568' }}
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: index * 0.2,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}