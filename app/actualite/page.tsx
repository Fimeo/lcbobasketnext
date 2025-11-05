'use client'

import {motion} from "motion/react";
import {NEWS} from "@/data/news";
import NewsCard from "@/components/actu/NewsCard";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* News Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.h2
                            initial={{y: 20, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            className="text-center mb-12 text-red-600"
                        >
                            Actualités
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {NEWS().map((item, index) => (
                                <NewsCard key={index} news={item} index={index}/>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
