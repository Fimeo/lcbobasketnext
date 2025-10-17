'use client'

import {motion} from "motion/react";
import {HistoryPeriods} from "@/data/history";
import {Award, BowArrowIcon, Handshake} from "lucide-react";
import Image from 'next/image';

export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{y: -20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.6}}
                    className="text-center mb-12"
                >
                    <h1 className="mb-4 text-red-600">Notre Histoire</h1>
                    <p className="text-black max-w-3xl mx-auto text-lg">
                        Depuis 1972, LCBO Basket est un pilier du basketball normand,
                        formant des générations de joueurs et partageant la passion du sport.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto mb-16">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-24 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                    <div className="space-y-12">
                        {HistoryPeriods.map((period, index) => (
                            <motion.div
                                key={index}
                                initial={{x: -30, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                viewport={{once: true}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                className="relative pl-8 md:pl-40"
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-[-6px] md:left-[90px] top-2 w-3 h-3 bg-red-600 rounded-full"></div>

                                {/* Year label */}
                                <div className="hidden md:block absolute left-0 top-0 w-20 text-right pr-6">
                                    <span className="text-gray-600 text-sm">{period.year}</span>
                                </div>

                                {/* Content */}
                                <div
                                    className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="md:hidden mb-2">
                                        <span className="text-red-600 text-sm">{period.year}</span>
                                    </div>
                                    <h3 className="mb-3 text-black">{period.title}</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {period.content}
                                    </p>
                                    {period.images && period.images.length > 0 && (
                                        <div className="flex gap-4 mt-4 flex-wrap">
                                            {period.images?.map((image, index) => (
                                                <Image
                                                    className="flex-1 min-w-0 object-cover rounded"
                                                    src={image}
                                                    alt=""
                                                    key={index}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 md:p-12 rounded-lg shadow-xl"
                >
                    <h2 className="text-center mb-8 text-white">Nos Valeurs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div
                                className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl"><Award/></span>
                            </div>
                            <h3 className="mb-3 text-white">Esprit d&#39;Équipe</h3>
                            <p className="text-white">
                                Ensemble, nous sommes plus forts et allons plus loin
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl"><Handshake/></span>
                            </div>
                            <h3 className="mb-3 text-white">Convivialité</h3>
                            <p className="text-white">
                                Un club où il fait bon vivre et partager sa passion
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl"><BowArrowIcon/></span>
                            </div>
                            <h3 className="mb-3 text-white">Ambition Sportive</h3>
                            <p className="text-white">
                                Viser toujours plus haut, sur et en dehors du terrain
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
